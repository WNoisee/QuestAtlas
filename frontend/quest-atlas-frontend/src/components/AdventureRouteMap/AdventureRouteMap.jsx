import { useEffect, useMemo, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import styles from "./AdventureRouteMap.module.css";
import { defaultStops } from "../../data/defaultStops";

function createMarkerElement(stop, isActive = false) {
  const el = document.createElement("button");
  el.type = "button";
  el.className = `${styles.marker} ${isActive ? styles.markerActive : ""}`;
  el.setAttribute("aria-label", stop.name);

  const dot = document.createElement("span");
  dot.className = styles.markerDot;

  const duration = document.createElement("span");
  duration.className = styles.markerDuration;
  duration.textContent = stop.duration;

  el.appendChild(dot);
  el.appendChild(duration);

  return el;
}

function createWeatherElement(weather = "sunny") {
  const el = document.createElement("div");
  el.className = `${styles.weatherMarker} ${styles[weather] || styles.sunny}`;

  const particleLayer = document.createElement("div");
  particleLayer.className = styles.weatherParticleLayer;

  for (let i = 0; i < 12; i += 1) {
    const particle = document.createElement("span");
    particle.className = styles.weatherParticle;
    particle.style.setProperty("--delay", `${(i % 6) * 0.18}s`);
    particle.style.setProperty("--x", `${(i % 4) * 18 - 24}px`);
    particle.style.setProperty("--y", `${Math.floor(i / 4) * 16 - 20}px`);
    particleLayer.appendChild(particle);
  }

  el.appendChild(particleLayer);
  return el;
}

function buildPopupHtml(stop) {
  return `
    <div class="${styles.popupCard}">
      <strong>${stop.name}</strong>
      <small>${stop.type} • ${stop.duration} • ${stop.weather || "clear"}</small>
      <p>${stop.description}</p>
    </div>
  `;
}

export default function AdventureRouteMap({
  selectedStopId,
  onSelectStop,
  stops = defaultStops,
}) {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const popupRef = useRef(null);
  const weatherMarkerRef = useRef(null);

  const [internalActiveStopId, setInternalActiveStopId] = useState(stops[0]?.id);

  const activeStopId = selectedStopId ?? internalActiveStopId;

  const activeStop = useMemo(() => {
    return stops.find((stop) => stop.id === activeStopId) || stops[0] || null;
  }, [activeStopId, stops]);

  useEffect(() => {
    if (!selectedStopId && stops?.length) {
      setInternalActiveStopId(stops[0].id);
    }
  }, [selectedStopId, stops]);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current || !stops?.length) return;

    const isLocalhost =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";

    const styleUrl = "https://tiles.stadiamaps.com/styles/alidade_smooth.json";

    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: styleUrl,
      center: [106.2, 16.2],
      zoom: 4.8,
      minZoom: 4,
      maxZoom: 12,
      attributionControl: false,
    });

    map.addControl(new maplibregl.NavigationControl(), "bottom-right");

    map.on("load", () => {
      const bounds = new maplibregl.LngLatBounds();
      stops.forEach((stop) => bounds.extend([stop.lng, stop.lat]));
      map.fitBounds(bounds, { padding: 80, duration: 0 });

      map.on("load", () => {
        const style = map.getStyle();

        if (!style || !style.layers) return;

        const layers = style.layers;

            layers.forEach((layer) => {
              const { id, type } = layer;
              const layerId = id.toLowerCase();

              const isPoi =
                layerId.includes("poi") ||
                layerId.includes("airport") ||
                layerId.includes("transit") ||
                layerId.includes("housenumber") ||
                layerId.includes("address");

              const isBuilding =
                layerId.includes("building") ||
                layerId.includes("indoor");

              const isMinorRoad =
                layerId.includes("minor") ||
                layerId.includes("service") ||
                layerId.includes("path") ||
                layerId.includes("track") ||
                layerId.includes("pedestrian");

              const isBoundary =
                layerId.includes("boundary") ||
                layerId.includes("admin") ||
                layerId.includes("border");

              const isRoad =
                layerId.includes("road") ||
                layerId.includes("street") ||
                layerId.includes("highway");

              if (isPoi || isBuilding || isMinorRoad) {
                try {
                  map.setLayoutProperty(id, "visibility", "none");
                } catch {}
              }

              if (isBoundary && type === "line") {
                try {
                  map.setPaintProperty(id, "line-color", "#8f7c67");
                  map.setPaintProperty(id, "line-width", 1.35);
                  map.setPaintProperty(id, "line-opacity", 0.9);
                } catch {}
              }

              if (isRoad && type === "line") {
                try {
                  map.setPaintProperty(id, "line-color", "#d5c1a4");
                  map.setPaintProperty(id, "line-opacity", 0.45);
                } catch {}
              }
            });
          });
    });

    mapRef.current = map;

    return () => {
      markersRef.current.forEach(({ marker }) => marker.remove());
      markersRef.current = [];
      popupRef.current?.remove();
      weatherMarkerRef.current?.remove();
      map.remove();
      mapRef.current = null;
    };
  }, [stops]);

  useEffect(() => {
    if (!mapRef.current) return;

    markersRef.current.forEach(({ marker }) => marker.remove());
    markersRef.current = [];

    stops.forEach((stop) => {
      const isActive = stop.id === activeStopId;
      const markerEl = createMarkerElement(stop, isActive);

      markerEl.addEventListener("click", () => {
        setInternalActiveStopId(stop.id);
        onSelectStop?.(stop.id);
      });

      const marker = new maplibregl.Marker({
        element: markerEl,
        anchor: "bottom",
      })
        .setLngLat([stop.lng, stop.lat])
        .addTo(mapRef.current);

      markersRef.current.push({
        id: stop.id,
        marker,
      });
    });
  }, [stops, activeStopId, onSelectStop]);

  useEffect(() => {
    if (!mapRef.current || !activeStop) return;

    mapRef.current.flyTo({
      center: [activeStop.lng, activeStop.lat],
      zoom: 6.2,
      speed: 0.8,
      essential: true,
    });

    popupRef.current?.remove();

    popupRef.current = new maplibregl.Popup({
      closeButton: false,
      closeOnClick: false,
      offset: 22,
    })
      .setLngLat([activeStop.lng, activeStop.lat])
      .setHTML(buildPopupHtml(activeStop))
      .addTo(mapRef.current);

    weatherMarkerRef.current?.remove();

    const weatherEl = createWeatherElement(activeStop.weather);

    weatherMarkerRef.current = new maplibregl.Marker({
      element: weatherEl,
      anchor: "center",
      offset: [0, -10],
    })
      .setLngLat([activeStop.lng, activeStop.lat])
      .addTo(mapRef.current);
  }, [activeStop]);

  return (
    <div className={styles.wrapper}>
      <div ref={mapContainerRef} className={styles.mapCanvas} />
      <div className={styles.textureOverlay} />
      <div className={styles.gradientOverlay} />
    </div>
  );
}
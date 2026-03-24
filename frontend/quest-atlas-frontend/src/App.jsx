import "./App.css";

const destinations = [
  { id: 1, name: "Sapa Peak", type: "Mountain", x: "18%", y: "22%" },
  { id: 2, name: "Ha Giang Loop", type: "Roadtrip", x: "35%", y: "30%" },
  { id: 3, name: "Ninh Binh", type: "Nature", x: "52%", y: "48%" },
  { id: 4, name: "Da Nang", type: "Coastal", x: "66%", y: "58%" },
  { id: 5, name: "Da Lat", type: "Forest", x: "44%", y: "72%" },
];

function App() {
  return (
    <div className="page-wrapper">
      <div className="app-container">
        <div className="quest-app">
          <div className="quest-grid" />

          <header className="topbar">
            <div className="brand">
              Quest<span>Atlas</span>
            </div>

            <nav className="nav">
              <a href="#" className="nav-link active">Home</a>
              <a href="#" className="nav-link">Plugins</a>
              <a href="#" className="nav-link">Insights</a>
              <a href="#" className="nav-link">Consulting</a>
            </nav>

            <button className="outline-btn">Sign in</button>
          </header>

          <main className="hero">
            <section className="hero-copy">
              <div className="badge">QuestAtlas v1</div>

              <h1>
                Khám phá hành trình
                <br />
                bằng bản đồ trực quan
              </h1>

              <p>
                Đây là layout frontend đầu tiên cho dự án của bạn. Mình dựng một
                adventure map theo tone kem, nâu và vàng để sau này bạn nối tiếp
                sang route, weather forecast và AI recommendations.
              </p>

              <div className="cta-row">
                <button className="primary-btn">Start Exploring</button>
                <button className="secondary-btn">View Trips</button>
              </div>

              <div className="stats">
                <div className="stat-card">
                  <strong>24+</strong>
                  <span>Destinations</span>
                </div>
                <div className="stat-card">
                  <strong>12</strong>
                  <span>Suggested Routes</span>
                </div>
                <div className="stat-card">
                  <strong>AI</strong>
                  <span>Weather Ready</span>
                </div>
              </div>
            </section>

            <section className="map-panel">
              <div className="map-header">
                <div>
                  <h3>Adventure Map</h3>
                  <p>Prototype UI cho QuestAtlas</p>
                </div>
                <div className="map-pill">Live Preview</div>
              </div>

              <div className="map-canvas">
                <svg
                  className="route-svg"
                  viewBox="0 0 1000 700"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M120 150 C 220 120, 260 220, 340 210 S 500 180, 590 290 S 760 420, 860 380"
                    className="route-line"
                  />
                  <path
                    d="M350 520 C 420 470, 470 420, 560 430 S 700 470, 760 560"
                    className="route-line light"
                  />
                </svg>

                <div className="map-glow map-glow-1" />
                <div className="map-glow map-glow-2" />

                {destinations.map((item) => (
                  <div
                    key={item.id}
                    className="map-marker"
                    style={{ left: item.x, top: item.y }}
                  >
                    <div className="pin">
                      <span />
                    </div>
                    <div className="marker-card">
                      <strong>{item.name}</strong>
                      <small>{item.type}</small>
                    </div>
                  </div>
                ))}

                <div className="floating-card weather-card">
                  <span className="card-label">Weather Insight</span>
                  <h4>Best window: 6:00 AM</h4>
                  <p>Ít mưa, gió nhẹ, phù hợp cho hành trình khám phá.</p>
                </div>

                <div className="floating-card route-card">
                  <span className="card-label">Suggested Route</span>
                  <h4>North Loop Adventure</h4>
                  <p>3 ngày · Mountain · Scenic stops · AI safe score 92%</p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
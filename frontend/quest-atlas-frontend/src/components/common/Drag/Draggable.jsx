import React, { useEffect, useRef, useState } from "react";

export const DraggableWrapper = ({
    children,
    bounds,
    handleRef,
    width,
    initialPosition = { x: 0, y: 0 }, 
}) => {
    const wrapperRef = useRef(null);
    const positionRef = useRef({ x: 0, y: 0 });
    const offsetRef = useRef({ x: 0, y: 0 });
    const draggingRef = useRef(false);

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);

    const initializedRef = useRef(false);

    useEffect(() => {
    if (initializedRef.current) return;
    positionRef.current = initialPosition;
    setPosition(initialPosition);
    initializedRef.current = true;
    }, [initialPosition]);

    const onPointerDown = (e) => {
        if (handleRef?.current && !handleRef.current.contains(e.target)) return;

        draggingRef.current = true;
        setIsDragging(true);

        const rect = wrapperRef.current.getBoundingClientRect();
        offsetRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        };

        window.addEventListener("pointermove", onPointerMove);
        window.addEventListener("pointerup", onPointerUp);
    };

    const onPointerMove = (e) => {
        if (!draggingRef.current || !wrapperRef.current) return;

        const parent = wrapperRef.current.parentElement;
        if (!parent) return;

        const parentRect = parent.getBoundingClientRect();

        let x = e.clientX - parentRect.left - offsetRef.current.x + parent.scrollLeft;
        let y = e.clientY - parentRect.top - offsetRef.current.y + parent.scrollTop;

        if (bounds) {
        x = Math.min(bounds.right, Math.max(bounds.left, x));
        y = Math.min(bounds.bottom, Math.max(bounds.top, y));
        }

        positionRef.current = { x, y };
        setPosition({ x, y });
    };

    const onPointerUp = () => {
        draggingRef.current = false;
        setIsDragging(false);
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerup", onPointerUp);
    };

    useEffect(() => {
        return () => {
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerup", onPointerUp);
        };
    }, []);

    return (
        <div
        ref={wrapperRef}
        onPointerDown={onPointerDown}
        style={{
            position: "absolute",
            left: position.x,
            top: position.y,
            cursor: isDragging ? "grabbing" : "grab",
            userSelect: "none",
            zIndex: 12,
            width,
        }}
        >
        {typeof children === "function" ? children(position) : children}
        </div>
    );
};
"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isMounted, setIsMounted] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isPointer, setIsPointer] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 20, stiffness: 400, mass: 0.2 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Skip on touch/coarse-pointer devices — cursor is pointless and costly there.
        const hoverMQ = window.matchMedia("(hover: hover) and (pointer: fine)");
        if (!hoverMQ.matches) return;

        setIsMounted(true);

        let rafId = 0;
        let lastX = 0;
        let lastY = 0;
        let lastTarget: EventTarget | null = null;

        const updateHoverState = () => {
            const el = lastTarget as HTMLElement | null;
            if (!el) return;
            const clickable = el.closest('a, button, [role="button"], input, textarea, select, label, [data-cursor="pointer"]');
            setIsPointer(!!clickable);
            setIsHovering(el.tagName === "STRONG" || el.classList.contains("text-gradient"));
        };

        const moveCursor = (e: MouseEvent) => {
            lastX = e.clientX;
            lastY = e.clientY;
            lastTarget = e.target;
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                cursorX.set(lastX);
                cursorY.set(lastY);
                updateHoverState();
                rafId = 0;
            });
        };

        window.addEventListener("mousemove", moveCursor, { passive: true });
        return () => {
            window.removeEventListener("mousemove", moveCursor);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [cursorX, cursorY]);

    if (!isMounted) return null;

    // We hide default cursor via CSS or specifically handle it here if needed
    // This is better done in globals.css: body { cursor: none; }
    // but for links we need a*/, button { cursor: none; }

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 rounded-full bg-primary z-[100] pointer-events-none will-change-transform"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isPointer ? 1.5 : isHovering ? 2.5 : 1,
                    opacity: isPointer ? 0.8 : 1,
                }}
                transition={{ duration: 0.15 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/50 z-[99] pointer-events-none will-change-transform"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isPointer ? 2.5 : isHovering ? 3 : 1,
                    opacity: isPointer ? 0.4 : isHovering ? 0 : 1,
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
            />
        </>
    );
}

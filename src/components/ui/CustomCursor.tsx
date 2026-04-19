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
        setIsMounted(true);

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            // Check if hovering over clickable elements
            const target = e.target as HTMLElement;
            const computedStyle = window.getComputedStyle(target);

            const isClickable =
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') !== null ||
                target.closest('button') !== null ||
                computedStyle.cursor === 'pointer';

            setIsPointer(isClickable);

            // Look for elements with specific class or strong tags inside interactive components
            const isSpecialHover = target.tagName.toLowerCase() === 'strong' || target.classList.contains('text-gradient');
            setIsHovering(isSpecialHover);
        };

        window.addEventListener("mousemove", moveCursor);
        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, [cursorX, cursorY]);

    if (!isMounted) return null;

    // We hide default cursor via CSS or specifically handle it here if needed
    // This is better done in globals.css: body { cursor: none; }
    // but for links we need a*/, button { cursor: none; }

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 rounded-full bg-primary z-[100] pointer-events-none mix-blend-screen"
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
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/50 z-[99] pointer-events-none"
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

"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function MagneticCursor() {
    const [isMobile, setIsMobile] = useState(true);
    const [isPointer, setIsPointer] = useState(false);

    // Motion values for precise tracking
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth springs for the trailing ring
    const springX = useSpring(cursorX, { stiffness: 500, damping: 28 });
    const springY = useSpring(cursorY, { stiffness: 500, damping: 28 });

    // Calculate inner dot position directly from motion values
    const innerDotX = useTransform(cursorX, v => v + 13);
    const innerDotY = useTransform(cursorY, v => v + 13);

    useEffect(() => {
        // Only enable on desktop
        if (window.innerWidth >= 1024) {
            setIsMobile(false);
        }

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16); // Center the 32px circle
            cursorY.set(e.clientY - 16);
        };

        // Check if hovering over clickable elements to grow the cursor
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable = window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button';
            setIsPointer(isClickable);
        };

        if (!isMobile) {
            window.addEventListener("mousemove", moveCursor);
            window.addEventListener("mouseover", handleMouseOver);
        }

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY, isMobile]);

    if (isMobile) return null;

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[#FF6600]/80 pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
                style={{
                    x: springX,
                    y: springY,
                }}
                animate={{
                    scale: isPointer ? 1.5 : 1,
                    backgroundColor: isPointer ? "rgba(255, 102, 0, 0.1)" : "transparent",
                }}
                transition={{ duration: 0.15, ease: "easeOut" }}
            />
            {/* Tiny inner dot strictly following the mouse */}
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#FF6600] rounded-full pointer-events-none z-[10000] hidden lg:block"
                style={{
                    x: innerDotX, // Center inner dot perfectly relative to the 32px ring (+16 - 3 = 13ish)
                    y: innerDotY,
                }}
            />
        </>
    );
}

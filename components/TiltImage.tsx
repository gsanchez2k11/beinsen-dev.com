"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

export function TiltImage({ src, alt }: { src: string; alt: string }) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth out the motion
    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

    // Map mouse position to rotation logic
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    // Dynamic glow tracking the mouse
    const glowX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
    const glowY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();

        // Calculate normalized mouse position (-0.5 to 0.5)
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / rect.width - 0.5;
        const yPct = mouseY / rect.height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        // Reset position smoothly
        x.set(0);
        y.set(0);
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1200 }}
            className="w-full h-full flex items-center justify-center relative group z-10"
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="w-full h-full relative rounded-[3rem] shadow-2xl transition-shadow duration-500 group-hover:shadow-[0_20px_60px_-15px_rgba(255,102,0,0.3)] bg-card border border-border/50"
            >
                {/* Abstract Glow layer moving with mouse */}
                <div
                    className="absolute inset-0 overflow-hidden rounded-[3rem]"
                    style={{ transform: "translateZ(-10px)" }}
                >
                    <motion.div
                        className="absolute w-[300px] h-[300px] bg-[#FF6600]/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{
                            left: glowX,
                            top: glowY,
                            transform: 'translate(-50%, -50%)',
                        }}
                    />
                </div>

                {/* Main Image translating slightly on the Z axis to create depth */}
                <motion.div
                    className="absolute inset-0 w-full h-full rounded-[3rem] overflow-hidden"
                    style={{
                        transform: "translateZ(50px)",
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                        className="object-contain p-4 brightness-95 group-hover:brightness-105 transition-all duration-500"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}

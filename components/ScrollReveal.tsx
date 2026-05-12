"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    yOffset?: number;
}

export function ScrollReveal({ children, delay = 0, className = "", yOffset = 30 }: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        el.style.opacity = "0";
        el.style.transform = `translateY(${yOffset}px)`;
        el.style.transition = `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`;
        el.style.willChange = "opacity, transform";

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.style.opacity = "1";
                    el.style.transform = "translateY(0)";
                    el.style.willChange = "auto";
                    observer.disconnect();
                }
            },
            { rootMargin: "-40px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [delay, yOffset]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}

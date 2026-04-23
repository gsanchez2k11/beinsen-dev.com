"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

export function ScrollToTopButton({ threshold = 400 }: { threshold?: number }) {
    const [visible, setVisible] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
        const onScroll = () => setVisible(window.scrollY > threshold);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [threshold]);

    const isDark = theme === "dark";

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    transition={{ duration: 0.2 }}
                    className="fixed bottom-8 right-8 z-50 flex flex-col gap-3 items-center"
                >
                    {/* Theme toggle */}
                    {mounted && (
                        <button
                            onClick={() => setTheme(isDark ? "light" : "dark")}
                            aria-label="Toggle theme"
                            className="w-12 h-12 rounded-full bg-background border border-border text-foreground shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    key={isDark ? "dark" : "light"}
                                    initial={{ y: -12, opacity: 0, rotate: -90 }}
                                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                                    exit={{ y: 12, opacity: 0, rotate: 90 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                >
                                    {isDark ? <Moon size={20} className="text-[#FF6600]" /> : <Sun size={20} className="text-[#FF6600]" />}
                                </motion.div>
                            </AnimatePresence>
                        </button>
                    )}

                    {/* Scroll to top */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        aria-label="Ir arriba"
                        className="w-12 h-12 rounded-full bg-[#FF6600] text-white shadow-xl shadow-[#FF6600]/30 flex items-center justify-center hover:scale-110 transition-transform"
                    >
                        <ArrowUp size={20} />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

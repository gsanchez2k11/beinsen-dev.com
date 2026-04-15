"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

export function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose?: () => void }) {
    const [isOpen, setIsOpen] = useState(!!onClose || false); // If onClose is provided, assume it's externally controlled

    const handleClose = useCallback(() => {
        setIsOpen(false);
        if (onClose) onClose();
    }, [onClose]);

    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') handleClose();
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, handleClose]);

    return (
        <>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsOpen(true);
                }}
                className="absolute bottom-6 right-6 z-20 bg-background/80 hover:bg-background text-foreground p-3 rounded-full backdrop-blur-md shadow-lg transition-transform hover:scale-110 group/btn"
                aria-label="Ver imagen a pantalla completa"
            >
                <ZoomIn size={24} className="group-hover/btn:text-[#FF6600] transition-colors" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[99999] flex items-center justify-center">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={handleClose}
                            className="absolute inset-0 bg-black/90 backdrop-blur-xl cursor-zoom-out"
                        />

                        {/* Image Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center p-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-full" onClick={handleClose}>
                                <Image
                                    src={src}
                                    alt={alt}
                                    fill
                                    className="object-contain cursor-zoom-out drop-shadow-2xl"
                                    sizes="100vw"
                                    priority
                                />
                            </div>

                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-md transition-colors"
                                aria-label="Cerrar pantalla completa"
                            >
                                <X size={24} />
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}

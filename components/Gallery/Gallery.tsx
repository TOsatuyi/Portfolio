"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const memories = [
    {
        src: '/gallery/My main man.jpeg',
        title: "Mentorship",
        description: "Iron sharpens iron. Learning from the best to become the best."
    },
    {
        src: '/gallery/My super brother and CEO Eric.png',
        title: "Legacy",
        description: "Building the future of tech alongside my brother and visionary CEO, Eric."
    },
    {
        src: '/gallery/A day to remember.jpeg',
        title: "Euphoria",
        description: "Moments that freeze in time, defining who we are and who we become."
    },
    {
        src: '/gallery/Lunch with my partner 3 Daiel.jpeg',
        title: "Partnership",
        description: "Great ideas—and great lives—are built on the foundation of genuine connection in Christ... oh, and good food! :)"
    },
    {
        src: '/gallery/My beautiful family.jpeg',
        title: "Foundation",
        description: "My beautiful family. The 'Why' behind every late night and every early morning."
    }
];

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    // Auto-play functionality
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isPlaying) {
            interval = setInterval(() => {
                paginate(1);
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [currentIndex, isPlaying]);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100, // Reduced distance for subtler entry
            opacity: 0,
            scale: 1.05, // Subtle scale
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 100 : -100, // Reduced distance
            opacity: 0,
            scale: 0.95, // Subtle scale
        }),
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => (prevIndex + newDirection + memories.length) % memories.length);
    };

    return (
        <div className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col justify-center">

            {/* IMMERSIVE BACKGROUND */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }} // Smoother background transition
                        className="absolute inset-0"
                    >
                        <Image
                            src={memories[currentIndex].src}
                            alt="Background"
                            fill
                            className="object-cover opacity-30 blur-3xl scale-110"
                        />
                        <div className="absolute inset-0 bg-black/60" />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* CONTENT LAYER */}
            <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full py-20">

                {/* TEXT SECTION (Left on Desktop) */}
                <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center relative space-y-8">
                    <div className="overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // Custom bezier for premium feel
                            >
                                <h2 className="text-emerald-500 font-bold tracking-widest uppercase mb-2 text-sm md:text-base">
                                    Memory 0{currentIndex + 1} / 0{memories.length}
                                </h2>
                                <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-6">
                                    {memories[currentIndex].title}
                                </h1>
                                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-md border-l-2 border-emerald-500 pl-6">
                                    {memories[currentIndex].description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* CONTROLS */}
                    <div className="flex items-center gap-6 pt-4">
                        <button
                            onClick={() => paginate(-1)}
                            className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-black hover:border-white transition-all duration-300 group"
                        >
                            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        </button>

                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="p-4 rounded-full border border-white/10 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300 group"
                        >
                            {isPlaying ? (
                                <Pause className="w-6 h-6 fill-current" />
                            ) : (
                                <Play className="w-6 h-6 fill-current ml-1" />
                            )}
                        </button>

                        <button
                            onClick={() => paginate(1)}
                            className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-black hover:border-white transition-all duration-300 group"
                        >
                            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* IMAGE STAGE (Right on Desktop) */}
                <div className="lg:col-span-7 order-1 lg:order-2 relative h-[50vh] lg:h-[70vh] w-full">
                    <div className="relative w-full h-full">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "tween", ease: "easeInOut", duration: 0.8 }, // Silky smooth transition
                                    opacity: { duration: 0.8 },
                                    scale: { duration: 0.8 }
                                }}
                                className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                            >
                                <Image
                                    src={memories[currentIndex].src}
                                    alt={memories[currentIndex].title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {/* Glossy Overlay Effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent pointer-events-none mix-blend-overlay" />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none" />
                    <div className="absolute -top-12 -left-12 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />
                </div>

            </div>

            {/* PROGRESS BAR BOTTOM */}
            <div className="absolute bottom-10 left-0 right-0 px-6 flex justify-center gap-2">
                {memories.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setDirection(idx > currentIndex ? 1 : -1);
                            setCurrentIndex(idx);
                        }}
                        className="group relative h-1 flex-1 max-w-[4rem] bg-white/10 rounded-full overflow-hidden transition-all hover:h-2"
                    >
                        <div
                            className={`absolute inset-0 bg-emerald-500 transition-all duration-500 ${idx === currentIndex ? "w-full" : "w-0 group-hover:w-full group-hover:opacity-50"
                                }`}
                        />
                    </button>
                ))}
            </div>

        </div>
    );
};

export default Gallery;
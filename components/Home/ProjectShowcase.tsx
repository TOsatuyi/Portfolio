"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ProjectShowcaseProps {
    title: string;
    description: string;
    tags?: string[];
    images: string[];
    link?: string;
    isReversed?: boolean; // To alternate layout
    showAppStoreBadge?: boolean;
    isDesktopApp?: boolean; // For desktop/web applications
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
    title,
    description,
    tags = [],
    images,
    link,
    isReversed = false,
    showAppStoreBadge = false,
    isDesktopApp = false,
}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-advance slideshow for desktop apps
    useEffect(() => {
        if (isDesktopApp && images.length > 1) {
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % images.length);
            }, 4000); // Change slide every 4 seconds

            return () => clearInterval(interval);
        }
    }, [isDesktopApp, images.length]);

    return (
        <section className={`py-24 ${isReversed ? 'bg-neutral-950' : 'bg-black'} text-white overflow-hidden`}>
            <div className="container mx-auto px-6 md:px-12">
                <div className={`flex flex-col md:flex-row items-center gap-16 ${isReversed ? 'md:flex-row-reverse' : ''}`}>

                    {/* Text Column */}
                    <div className="flex-1 space-y-8">
                        <div>
                            {tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-medium tracking-wider text-emerald-400 uppercase bg-emerald-400/10 rounded-full border border-emerald-400/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
                                {title}
                            </h2>
                            <p className="text-lg text-gray-400 leading-relaxed font-light">
                                {description}
                            </p>
                        </div>

                        {link && (
                            <a
                                href={link}
                                className="inline-flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-colors group"
                            >
                                <span className="text-lg">View Project</span>
                                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                            </a>
                        )}

                        {showAppStoreBadge && (
                            <div className="pt-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white/10 rounded-lg">
                                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.53-1.34.08-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.28-3.13-2.55-2.84-4.2-2.36-8.5.83-10.5 1.57-1.07 2.1-1.37 3.32-1.07l.95-.62c.62-.26 1.49-.62 4.06.33 1.05.39 1.79.88 2.29 1.4-3.34 2.15-2.56 8.54 1.29 10.45zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.84 1.53-2.95 1.5-.83-4.15-4.15-5.32-4.15-5.32z" /></svg>
                                    </div>
                                    <span className="text-sm font-medium text-gray-300">Available on the <br />App Store</span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Image Column */}
                    <div className="flex-1 w-full relative">
                        {/* Background Decor */}
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 blur-[100px] rounded-full opacity-50 pointer-events-none`} />

                        {isDesktopApp ? (
                            // Desktop Browser Mockup Slideshow
                            <div className="relative z-10">
                                <div className="relative rounded-xl overflow-hidden shadow-2xl bg-neutral-900 border border-neutral-800">
                                    {/* Browser Chrome */}
                                    <div className="bg-neutral-800 px-4 py-3 flex items-center gap-2 border-b border-neutral-700">
                                        {/* Traffic Lights */}
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                            <div className="w-3 h-3 rounded-full bg-green-500" />
                                        </div>
                                        {/* URL Bar */}
                                        <div className="flex-1 ml-4 bg-neutral-900 rounded px-3 py-1 text-xs text-gray-500">
                                            {title.toLowerCase().replace(/\s+/g, '-')}.app
                                        </div>
                                    </div>

                                    {/* Browser Content - Slideshow */}
                                    <div className="relative bg-neutral-100 overflow-hidden w-full">
                                        <img
                                            src={images[currentSlide]}
                                            alt={`${title} screenshot ${currentSlide + 1}`}
                                            className="w-full h-auto block"
                                        />
                                    </div>
                                </div>

                                {/* Slideshow Indicators */}
                                <div className="flex justify-center gap-2 mt-4">
                                    {images.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentSlide(idx)}
                                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentSlide
                                                ? 'bg-emerald-500 scale-125'
                                                : 'bg-gray-600 hover:bg-gray-400'
                                                }`}
                                            aria-label={`Go to slide ${idx + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        ) : (
                            // Mobile Phone Mockup Layout
                            <div className="grid grid-cols-2 gap-6 relative z-10">
                                {images.map((img, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: idx * 0.2 }}
                                        className={`relative rounded-[2rem] border-[6px] border-neutral-800 bg-neutral-900 overflow-hidden shadow-2xl ${idx % 2 !== 0 ? 'mt-12' : 'mb-12'}`}
                                    >
                                        <div className="aspect-[9/19] relative">
                                            <Image
                                                src={img}
                                                alt={`${title} screenshot ${idx + 1}`}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 50vw, 33vw"
                                            />
                                        </div>
                                        {/* Iphone Notch / Indicator placeholder if wanted, but border-radius does the heavy lifting */}
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProjectShowcase;

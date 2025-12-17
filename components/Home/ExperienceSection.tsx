import React from 'react';
import Image from 'next/image';

const ExperienceSection = () => {
    return (
        <div id="experience" className="py-24 bg-black relative border-t border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/10 via-neutral-900 to-black pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">PROFESSIONAL <span className="text-emerald-500">EXPERIENCE</span></h2>
                    <p className="text-gray-400 max-w-2xl text-lg">
                        A timeline of my contributions delivering high-impact technological solutions across fintech and global enterprise sectors.
                    </p>
                </div>

                <div className="space-y-12">
                    {/* Coders Clutch */}
                    <div className="group relative pl-8 border-l border-white/10 hover:border-emerald-500/50 transition-colors duration-500">
                        <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />

                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">Coders Clutch</h3>
                                <p className="text-sm font-bold tracking-widest text-emerald-500 uppercase">Head of Delivery and Engineering</p>
                            </div>

                            <div className="flex flex-col items-end gap-2">
                                <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full w-fit">Present</span>
                                <div className="relative w-12 h-12 rounded-lg bg-white/5 border border-white/5 p-1 overflow-hidden">
                                    <Image
                                        src="/coders_logo.png"
                                        alt="Coders Clutch"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-400 mb-6 leading-relaxed max-w-3xl">
                            Overseeing the end-to-end delivery of complex software projects and managing multidisciplinary teams. Fostering a cohesive culture of high performance and delivery excellence.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                                <h4 className="font-bold text-white mb-1">Bonfo Delivery</h4>
                                <p className="text-sm text-gray-500">Orchestrated the successful delivery of the Bonfo platform, ensuring alignment between engineering execution and business goals.</p>
                            </div>
                            <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                                <h4 className="font-bold text-white mb-1">Leadership</h4>
                                <p className="text-sm text-gray-500">Managed both technical engineering teams and non-technical staff.</p>
                            </div>
                        </div>
                    </div>

                    {/* GTBank */}
                    <div className="group relative pl-8 border-l border-white/10 hover:border-orange-500/50 transition-colors duration-500">
                        <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />

                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">Guaranty Trust Bank (GTBank)</h3>
                                <p className="text-sm font-bold tracking-widest text-orange-500 uppercase">Software Engineer</p>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                                <span className="text-sm font-medium text-gray-500">Jun 2024 — Present</span>
                                <div className="relative w-12 h-12 rounded-lg bg-white/5 border border-white/5 p-1 overflow-hidden">
                                    <Image
                                        src="/gtco-logo.png"
                                        alt="GTBank"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-400 mb-6 leading-relaxed max-w-3xl">
                            Engineering robust financial solutions that power global transactions. Key contributions include the development and maintenance of critical banking infrastructures.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                                <h4 className="font-bold text-white mb-1">GTWorld Gambia</h4>
                                <p className="text-sm text-gray-500">Led the development of the mobile banking application with a new core banking system for the Gambian subsidiary.</p>
                            </div>
                            <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                                <h4 className="font-bold text-white mb-1">Corporate Banking</h4>
                                <p className="text-sm text-gray-500">Contributed to the enterprise financial management tools used by major corporate clients.</p>
                            </div>
                        </div>
                    </div>

                    {/* Cayor */}
                    <div className="group relative pl-8 border-l border-white/10 hover:border-blue-500/50 transition-colors duration-500">
                        <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">Cayor Enterprises</h3>
                                <p className="text-sm font-bold tracking-widest text-blue-500 uppercase">Software Engineer</p>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                                <span className="text-sm font-medium text-gray-500">Feb 2023 — Jun 2024</span>
                                <div className="relative w-12 h-12 rounded-lg bg-white/5 border border-white/5 p-1 overflow-hidden">
                                    <Image
                                        src="/Cayor-Logo-Large.jpg"
                                        alt="Cayor Enterprises"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-400 mb-6 leading-relaxed max-w-3xl">
                            Specialized in delivering high-impact fintech products, focusing on platform reliability and feature growth.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                                <h4 className="font-bold text-white mb-1">Kashma</h4>
                                <p className="text-sm text-gray-500">Responsible for the end-to-end development and continuous maintenance of the Kashma platform.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;

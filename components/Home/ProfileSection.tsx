import Image from 'next/image';
import React from 'react';

const ProfileSection = () => {
    return (
        <div className="text-gray-300 flex items-center justify-center px-6 mb-12 mt-12">
            <div className="max-w-4xl flex flex-col md:flex-row items-start gap-12">
                {/* Text Section */}
                <div className="flex-1 text-lg leading-relaxed text-gray-400">
                    <p className="">
                        I’m a passionate developer moved by <span className="font-bold text-white">Innovation</span> and <span className="font-bold text-white">Domination</span>. I strive to build software that not only functions flawlessly but also commands the digital landscape.
                    </p>
                    <p className="mt-6">
                        Currently, I am dedicated to engineering solutions that push the boundaries of what is possible, turning complex problems into elegant, dominant systems.
                    </p>
                    <p className="mt-6">
                        Driven by a relentless pursuit of excellence, I aim to create technology that leads rather than follows, setting new standards in every project I undertake.
                    </p>
                    <p className="mt-6">
                        My work is a reflection of this ethos—where code meets conquest.
                    </p>

                    <div className="mt-8 pt-8 border-t border-white/5">
                        <p className="italic text-gray-500">
                            Beyond the screen, I find balance in basketball, reading, and writing. Above all, I love Jesus, and my faith is the foundation of who I am and everything I do.
                        </p>
                    </div>



                    <div className="mt-16">
                        <h3 className="text-xs font-bold tracking-[0.2em] text-white uppercase mb-8 border-b border-white/10 pb-4 inline-block"></h3>
                        <div className="grid grid-cols-1 gap-6">
                            {/* Project items will go here */}
                        </div>
                    </div>
                </div>
                {/* Divider */}
                <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent h-[500px]"></div>
                {/* Image Section */}
                <div className="flex-1">
                    <div className="relative w-80 h-96 flex justify-center items-center ml-10">
                        <Image
                            src="/danTheMan.jpeg"
                            alt="Tobias van Schneider"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
                        />
                    </div>
                    <div className="text-left ml-10 text-xl">
                        <p className="text-white mt-6 font-bold tracking-tight">Daniel Ofili Achigbue</p>
                        <p className="text-emerald-500 text-sm font-bold tracking-widest uppercase mt-1">Software Developer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSection;
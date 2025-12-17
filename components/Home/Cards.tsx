import Image from 'next/image';

const Cards = () => {
    return (
        <div className="mx-[4%]">
            <p className='text-6xl pb-3 text-black'>Featured Essays</p>
            <p className='text-3xl pb-6 text-[#BDB6B6]'>from the DESK blog</p>
            <div className="grid border-t border-slate-900 pt-3 grid-cols-3 gap-4">
                <div className="flex flex-col pr-3 pb-3 border-r border-slate-900 cursor-pointer transition-all ease-in-out duration-500">
                    <div className="relative w-full h-[430px]">
                        <Image
                            src="https://vanschneider.com/wp-content/uploads/2024/03/Desk-1.webp"
                            alt="Card 1"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <p className="mt-4 text-2xl hover:text-[#666666] transition-all ease-in-out duration-500 cursor-pointer">Dear young Designer﻿</p>
                </div>
                <div className="flex flex-col pr-3 pb-3 border-r border-slate-900 cursor-pointer transition-all ease-in-out duration-500">
                    <div className="relative  w-full h-[430px]">
                        <Image
                            src="https://vanschneider.com/wp-content/uploads/2024/03/Desk-2.webp"
                            alt="Card 2"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <p className="mt-4 text-2xl hover:text-[#666666] transition-all ease-in-out duration-500 cursor-pointer">Breaking the algorithm﻿</p>
                </div>
                <div className="flex flex-col pb-3 border-slate-900 transition-all ease-in-out duration-500">
                    <div className="relative w-full h-[430px] cursor-pointer">
                        <Image
                            src="https://vanschneider.com/wp-content/uploads/2024/03/Desk-3.webp"
                            alt="Card 3"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <p className="mt-4 text-2xl hover:text-[#666666] transition-all ease-in-out duration-500 cursor-pointer">Where are our design heroes?﻿</p>
                </div>
            </div>
        </div>
    );
};

export default Cards;

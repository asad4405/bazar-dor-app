"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Banner = () => {
    const [todayDate, setTodayDate] = useState<string>("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setTodayDate(new Date().toLocaleDateString("bn-BD", { dateStyle: 'full' }));
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="w-full py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto bg-white rounded-3xl p-5 sm:p-8 lg:p-8 shadow-sm border border-emerald-50/50 flex flex-col md:flex-row items-center justify-between gap-6">
                
                <div className="flex-1 space-y-3 sm:space-y-4 text-left">
                    <div className="inline-block bg-emerald-100/70 text-[#0f8a4d] px-3.5 py-1 rounded-full text-xs sm:text-sm font-semibold tracking-wide min-h-[28px]">
                        {todayDate}
                    </div>

                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-tight tracking-tight">
                        আজকের বাজারের দাম এক নজরে
                    </h1>

                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                        চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
                    </p>

                    <div className="pt-1">
                        <Link
                            href="#all-products"
                            className="inline-flex items-center justify-center px-6 py-2.5 text-sm sm:text-base font-bold text-white bg-[#0f8a4d] hover:bg-[#0c7340] rounded-xl shadow-md transition-all active:scale-95"
                        >
                            সব পণ্য দেখুন
                        </Link>
                    </div>
                </div>

                <div className="w-full md:w-1/2 lg:w-2/5 flex justify-center items-center">
                    <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
                        <Image
                            src="/bazar-hero.png"
                            alt="Banner Image"
                            fill
                            priority
                            className="object-contain"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Banner;
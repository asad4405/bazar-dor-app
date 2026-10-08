import Link from "next/link";
import React from "react";

const NotFound = () => {
    return (
        <div className="w-full bg-[#f4f7f4] min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center space-y-5 max-w-md">
                <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-emerald-50 border border-emerald-100 shadow-sm text-[#008744] text-3xl sm:text-4xl font-extrabold">
                    ৪০৪
                </div>

                <div className="space-y-2">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                        পেজটি পাওয়া যায়নি!
                    </h1>
                    <p className="text-xs sm:text-sm text-gray-500 font-normal leading-relaxed">
                        আপনি যে পেজটি খুঁজছেন তা হয়তো সরানো হয়েছে অথবা লিংকটি সঠিক নয়।
                    </p>
                </div>
                
                <div className="pt-2">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 bg-[#008744] hover:bg-[#00753a] text-white font-bold py-3 px-6 rounded-xl shadow-sm transition-all active:scale-95 text-xs sm:text-sm"
                    >
                        <span>&larr;</span> হোম পেজে ফিরে যান
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ProductType } from '@/type/Products';

export default function CategoryProducts({ products }: { products: ProductType[] }) {
    const [sortOption, setSortOption] = useState<string>('default');

    const sortedProducts = [...products].sort((a, b) => {
        if (sortOption === 'lowToHigh') return a.today - b.today;
        if (sortOption === 'highToLow') return b.today - a.today;
        return 0;
    });

    const categoryName = products[0]?.categoryNameBn || 'ক্যাটাগরি';
    const categoryIcon = products[0]?.categoryIcon || products[0]?.image || '🍚';

    return (
        <>
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-3xl sm:text-4xl shadow-inner shrink-0">
                    {categoryIcon}
                </div>
                <div>
                    <h1 className="text-2xl sm:text-3xl font-black text-gray-900">
                        {categoryName}
                    </h1>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
                        {products.length}টি পণ্যের আজকের দাম ও পরিবর্তন
                    </p>
                </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-end gap-3">
                <span className="text-xs text-gray-500 font-medium">সাজান</span>
                <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="bg-gray-50 border border-gray-200 text-gray-800 text-xs rounded-xl px-3 py-2 outline-none font-medium cursor-pointer"
                >
                    <option value="default">ডিফল্ট</option>
                    <option value="lowToHigh">কম দাম থেকে বেশি</option>
                    <option value="highToLow">বেশি দাম থেকে কম</option>
                </select>
            </div>

            <div className="text-xs text-gray-500 font-medium px-1">
                মোট {sortedProducts.length}টি পণ্য দেখানো হচ্ছে
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {sortedProducts.map((item) => {
                    const isUp = item.change.dir === 'up';
                    const isFlat = item.change.dir === 'flat' || item.change.pct === 0;

                    return (
                        <Link
                            key={item.id}
                            href={`/product/${item.slug || item.id}`}
                            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col justify-between h-36"
                        >
                            <div className="flex items-center gap-3.5">
                                <div className="w-12 h-12 rounded-xl bg-amber-50/60 flex items-center justify-center text-2xl shrink-0">
                                    {item.categoryIcon || item.image}
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-base leading-snug">
                                        {item.nameBn}
                                    </h3>
                                    <p className="text-xs text-gray-400 mt-0.5">
                                        প্রতি {item.unit}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-end justify-between mt-3">
                                <div>
                                    <span className="text-[11px] text-gray-400 block mb-0.5">
                                        আজকের দাম
                                    </span>
                                    <span className="text-lg font-black text-gray-900">
                                        {item.today} টাকা
                                    </span>
                                </div>

                                <div
                                    className={`inline-flex items-center gap-1 font-bold text-xs px-2 py-0.5 rounded-md ${
                                        isFlat
                                            ? 'bg-gray-100 text-gray-600'
                                            : isUp
                                            ? 'bg-red-50 text-red-500'
                                            : 'bg-emerald-50 text-emerald-600'
                                    }`}
                                >
                                    <span>{isFlat ? '—' : isUp ? '▲' : '▼'}</span>
                                    <span>{Math.abs(item.change.pct)}%</span>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </>
    );
}
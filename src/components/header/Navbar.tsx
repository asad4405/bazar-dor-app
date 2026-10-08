"use client";

import { CategoryType } from '@/type/Category';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const pathname = usePathname();
    const [categories, setCategories] = useState<CategoryType[]>([]);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.api-store.workers.dev/api/bazardor"}/categories`)
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <nav className="flex items-center gap-2 sm:gap-3 overflow-x-auto py-2.5 no-scrollbar scroll-smooth border-t border-gray-50">
                {categories.map((category) => {
                    const categoryPath = `/category/${category.slug}`;
                    const isActive = pathname === categoryPath;

                    return (
                        <Link
                            key={category.slug || category.id}
                            href={categoryPath}
                            className={`flex items-center gap-1.5 text-sm font-medium whitespace-nowrap transition-colors py-1.5 px-3 rounded-lg ${
                                isActive
                                    ? "bg-[#0f8a4d] text-white font-semibold"
                                    : "text-gray-700 hover:text-[#0f8a4d] hover:bg-emerald-50/60"
                            }`}
                        >
                            <span className="text-base">{category.icon}</span>
                            <span>{category.nameBn}</span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
};

export default Navbar;
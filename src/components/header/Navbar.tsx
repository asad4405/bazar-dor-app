import { CategoryType } from '@/type/Category';
import Link from 'next/link';

const Navbar = async () => {
    const res = await fetch(`${process.env.NEXT_API_BASE_URL}/categories`, {
        next: { revalidate: 3600 }
    });
    const categories: CategoryType[] = await res.json();

    return (
        <div>
            <nav className="flex items-center gap-6 overflow-x-auto py-2.5 no-scrollbar scroll-smooth border-t border-gray-50">
                {categories.map((category, index) => (
                    <Link
                        key={index}
                        href={`/category/${category.slug}`}
                        className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-[#0f8a4d] whitespace-nowrap transition-colors py-1 px-1 rounded-md"
                    >
                        <span className="text-base">{category.icon}</span>
                        <span>{category.nameBn}</span>
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default Navbar;
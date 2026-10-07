import { CategoryType } from '@/type/Category';
import Image from 'next/image'; 
import Link from 'next/link';
export default async function Navbar() {
    const date = new Date().toLocaleDateString("bn-BD", { dateStyle: 'full' });
    
    const res = await fetch(`${process.env.NEXT_API_BASE_URL}/categories`);
    const categories: CategoryType[] = await res.json();
    return (
        <header className="w-full bg-[#fcfdfd] border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="flex items-center justify-between py-3">
                
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 relative rounded-2xl bg-[#0f8a4d] flex items-center justify-center p-2 shadow-sm">
                            <Image
                                src="/logo-icon.png"
                                alt="Logo"
                                width={50}
                                height={50}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight leading-none">
                                বাজার দর
                            </span>
                            <span className="text-xs sm:text-sm font-medium text-gray-500 mt-1">
                            {date}
                            </span>
                        </div>
                    </Link>

                <div className="hidden sm:flex items-center gap-3">
                    <Link href="/signin"
                        className="px-4 py-2 text-sm font-semibold text-gray-800 hover:text-emerald-700 transition-colors">
                        সাইন ইন
                    </Link>
                    <Link href="/signup"
                        className="px-5 py-2 text-sm font-semibold text-white bg-[#0f8a4d] hover:bg-[#0c7340] rounded-xl shadow-md transition-all active:scale-95">
                        সাইন আপ
                    </Link>
                </div>

                <div className="sm:hidden dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu menu-sm bg-base-100 rounded-box z-[1] mt-3 w-48 p-2 shadow-lg border border-gray-100">
                        <li><Link href="/signin">সাইন ইন</Link></li>
                        <li><Link href="/signup" className="text-[#0f8a4d] font-semibold">সাইন আপ</Link></li>
                    </ul>
                </div>

                </div>

                <nav className="flex items-center gap-6 overflow-x-auto py-2.5 no-scrollbar scroll-smooth border-t border-gray-50">
                    {categories.map((category, index) => (
                        <Link
                            key={index}
                            href=""
                            className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-[#0f8a4d] whitespace-nowrap transition-colors py-1 px-1 rounded-md"
                            >
                            <span className="text-base">{category.icon}</span>
                            <span>{category.nameBn}</span>
                        </Link>
                    ))}
                </nav>

            </div>
        </header>
    );
}
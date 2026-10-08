import Image from 'next/image'; 
import Link from 'next/link';
import MarqueeHeadingText from './MarqueeHeadingText';
import Navbar from './Navbar';
import UserDropdown from './UserDropdown';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export default async function Header() {
    const date = new Date().toLocaleDateString("bn-BD", { dateStyle: 'full' });

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const user = session?.user;

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
                        {user ? (
                            <UserDropdown user={user} />
                        ) : (
                            <>
                                <Link href="/sign-in"
                                    className="px-4 py-2 text-sm font-semibold text-gray-800 hover:text-emerald-700 transition-colors">
                                    সাইন ইন
                                </Link>
                                <Link href="/sign-up"
                                    className="px-5 py-2 text-sm font-semibold text-white bg-[#0f8a4d] hover:bg-[#0c7340] rounded-xl shadow-md transition-all active:scale-95">
                                    সাইন আপ
                                </Link>
                            </>
                        )}
                    </div>

                    <div className="sm:hidden">
                        {user ? (
                            <UserDropdown user={user} />
                        ) : (
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu menu-sm bg-base-100 rounded-box z-[50] mt-3 w-48 p-2 shadow-lg border border-gray-100">
                                    <li><Link href="/sign-in">সাইন ইন</Link></li>
                                    <li><Link href="/sign-up" className="text-[#0f8a4d] font-semibold">সাইন আপ</Link></li>
                                </ul>
                            </div>
                        )}
                    </div>

                </div>

                <Navbar />
            </div>
            <MarqueeHeadingText />
        </header>
    );
}
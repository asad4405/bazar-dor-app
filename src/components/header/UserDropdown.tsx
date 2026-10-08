"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import Image from "next/image";

interface UserDropdownProps {
    user: {
        name: string;
        email: string;
        image?: string | null;
    };
}

export default function UserDropdown({ user }: UserDropdownProps) {
    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    window.location.href = "/";
                },
            },
        });
    };

    const firstLetter = user.name ? user.name.charAt(0).toUpperCase() : "U";

    return (
        <div className="dropdown dropdown-end">
            <div
                tabIndex={0}
                role="button"
                className="flex items-center gap-2 py-1 px-2 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
            >
                <div className="w-9 h-9 relative rounded-xl bg-gray-200 overflow-hidden flex items-center justify-center font-bold text-gray-700 border border-gray-200">
                    {user.image ? (
                        <Image
                            src={user.image}
                            alt={user.name}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <span>{firstLetter}</span>
                    )}
                </div>
                <span className="text-sm font-semibold text-gray-800">
                    {user.name.split(" ")[0]}
                </span>
                <svg
                    className="w-4 h-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </div>

            <div
                tabIndex={0}
                className="dropdown-content z-[50] menu p-4 shadow-xl bg-white border border-gray-100 rounded-3xl w-60 mt-2 space-y-3"
            >
                <div className="space-y-0.5 pb-2 border-b border-gray-100">
                    <p className="text-sm font-extrabold text-gray-900 truncate">
                        {user.name}
                    </p>
                    <p className="text-xs text-gray-500 truncate font-normal">
                        {user.email}
                    </p>
                </div>

                <ul className="space-y-1 text-sm font-medium">
                    <li>
                        <Link
                            href="/profile"
                            className="flex items-center gap-2 py-2 px-3 rounded-xl hover:bg-gray-50 text-gray-700 transition-colors"
                        >
                            <span>👤</span> আমার প্রোফাইল
                        </Link>
                    </li>
                    <li>
                        <button
                            onClick={handleSignOut}
                            className="flex items-center gap-2 py-2 px-3 rounded-xl hover:bg-red-50 text-red-600 w-full text-left transition-colors font-semibold"
                        >
                            <span>↩</span> সাইন আউট
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
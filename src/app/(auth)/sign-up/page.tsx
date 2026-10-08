"use client";

import { signIn, signUp } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

const SignUpPage = () => {
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const { data: resData, error } = await signUp.email({
            name,
            email,
            password,
            callbackURL: "/?signedIn=true",
        });

        if (error) {
            console.error("Signup Error:", error);
            toast.error(error.message || "অ্যাকাউন্ট তৈরি করতে সমস্যা হয়েছে!");
            return;
        }

        if (resData) {
            toast.success("সফলভাবে অ্যাকাউন্ট তৈরি হয়েছে!");
        }
    };

    const handleGoogleSignIn = async () => {
        toast.info("গুগল রিডাইরেক্ট করা হচ্ছে...");

        const { error } = await signIn.social({
            provider: "google",
            callbackURL: "/?signedIn=true",
        });

        if (error) {
            toast.error("Google দিয়ে সাইন ইন করতে সমস্যা হয়েছে!");
        }
    };

    const handleGithubSignIn = async () => {
        toast.info("গিটহাব রিডাইরেক্ট করা হচ্ছে...");

        const { error } = await signIn.social({
            provider: "github",
            callbackURL: "/?signedIn=true",
        });

        if (error) {
            toast.error("GitHub দিয়ে সাইন ইন করতে সমস্যা হয়েছে!");
        }
    };

    return (
        <div className="w-full bg-[#f4f7f4] min-h-screen py-6 sm:py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div className="text-center mb-6 space-y-1.5">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                    অ্যাকাউন্ট তৈরি করুন
                </h1>
                <p className="text-xs sm:text-sm text-gray-500 font-normal">
                    বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
                </p>
            </div>

            <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-5">
                <form className="space-y-4" onSubmit={onSubmit}>
                    <div className="space-y-1.5 text-left">
                        <label className="text-xs font-bold text-gray-800">
                            নাম
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="রহিম উদ্দিন ..."
                            className="w-full bg-[#fbfcfb] border border-gray-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-600 transition-colors"
                        />
                    </div>

                    <div className="space-y-1.5 text-left">
                        <label className="text-xs font-bold text-gray-800">
                            ইমেইল
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="you@example.com"
                            className="w-full bg-[#fbfcfb] border border-gray-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-600 transition-colors"
                        />
                    </div>

                    <div className="space-y-1.5 text-left">
                        <label className="text-xs font-bold text-gray-800">
                            পাসওয়ার্ড
                        </label>
                        <input
                            type="password"
                            name="password"
                            required
                            placeholder="কমপক্ষে ৮ অক্ষর"
                            className="w-full bg-[#fbfcfb] border border-gray-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-600 transition-colors"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full cursor-pointer bg-[#008744] hover:bg-[#00753a] text-white font-bold py-3 px-4 rounded-xl shadow-sm transition-colors text-xs sm:text-sm mt-2"
                    >
                        অ্যাকাউন্ট তৈরি করুন
                    </button>
                </form>

                <div className="relative flex items-center justify-center my-3">
                    <div className="border-t border-gray-200 w-full"></div>
                    <span className="bg-white px-3 text-[11px] text-gray-400 absolute font-medium">
                        অথবা
                    </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <button
                        type="button"
                        onClick={handleGoogleSignIn}
                        className="w-full cursor-pointer bg-[#f8faf8] hover:bg-gray-100 border border-gray-200 rounded-xl py-2.5 px-3 flex items-center justify-center gap-2 text-[11px] font-bold text-gray-800 transition-colors"
                    >
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                            <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.3 9 5 12 5z" />
                            <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z" />
                            <path fill="#FBBC05" d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 10.8 0 12s.7 2.3 1.9 4.7l3.7-2.9z" />
                            <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.3-6.4-5.2L1.9 16c1.8 3.7 5.6 7 10.1 7z" />
                        </svg>
                        <span className="truncate">Google দিয়ে চালিয়ে যান</span>
                    </button>

                    <button
                        type="button"
                        onClick={handleGithubSignIn}
                        className="w-full cursor-pointer bg-[#f8faf8] hover:bg-gray-100 border border-gray-200 rounded-xl py-2.5 px-3 flex items-center justify-center gap-2 text-[11px] font-bold text-gray-800 transition-colors"
                    >
                        <svg className="w-4 h-4 shrink-0 fill-current text-gray-900" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                        <span className="truncate">GitHub দিয়ে চালিয়ে যান</span>
                    </button>
                </div>

                <div className="text-center pt-2 text-xs text-gray-500 font-medium">
                    অ্যাকাউন্ট আছে?{' '}
                    <Link href="/sign-in" className="text-[#008744] font-bold hover:underline">
                        সাইন ইন করুন
                    </Link>
                </div>
            </div>

            <div className="mt-6 text-center">
                <Link href="/" className="text-xs text-gray-500 hover:text-gray-800 transition-colors font-medium">
                    ← হোম পেজে ফিরে যান
                </Link>
            </div>
        </div>
    );
};

export default SignUpPage;
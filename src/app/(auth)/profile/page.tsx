"use client";

import React from "react";
import Image from "next/image";
import { authClient, updateUser } from "@/lib/auth-client";
import { toast } from "react-toastify";

const ProfilePage = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const handleSignOut = async () => {
        toast.error("আপনি সাইন আউট করেছেন!");
        
        setTimeout(async () => {
            window.location.href = "/";
        }, 600);

        await authClient.signOut({
            fetchOptions: {
                onError: (ctx) => {
                    toast.error(ctx.error.message || "সাইন আউট করতে সমস্যা হয়েছে!");
                },
            },
        });
    };

    const handleUpdateUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        const { error } = await updateUser({
            name: userData.name as string,
        });

        if (error) {
            toast.error(error.message || "নাম আপডেট করতে ব্যর্থ হয়েছে!");
            return;
        }

        toast.success("নাম সফলভাবে আপডেট করা হয়েছে!");
    };

    if (isPending) {
        return (
            <div className="min-h-screen bg-[#f4f7f4] flex items-center justify-center">
                <p className="text-sm font-semibold text-gray-500">লোডিং হচ্ছে...</p>
            </div>
        );
    }

    const firstLetter = user?.name ? user.name.charAt(0).toUpperCase() : "U";

    return (
        <div className="w-full bg-[#f4f7f4] min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div className="w-full max-w-2xl space-y-6">
                {/* Header Title */}
                <div className="text-left space-y-1">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                        আমার প্রোফাইল
                    </h1>
                    <p className="text-xs sm:text-sm text-gray-500 font-normal">
                        আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
                    </p>
                </div>

                {/* Profile Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-gray-100 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 relative rounded-2xl bg-gray-200 overflow-hidden flex items-center justify-center font-bold text-xl text-gray-700 border border-gray-200 shrink-0">
                            {user?.image ? (
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
                        <div className="space-y-0.5">
                            <h2 className="text-base sm:text-lg font-bold text-gray-900">
                                {user?.name || "ব্যবহারকারীর নাম"}
                            </h2>
                            <p className="text-xs sm:text-sm text-gray-500 font-normal">
                                {user?.email || "example@gmail.com"}
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={handleSignOut}
                        className="px-4 py-2 cursor-pointer border border-red-300 text-red-500 hover:bg-red-50 font-bold rounded-xl text-xs sm:text-sm transition-colors shrink-0"
                    >
                        &larr; সাইন আউট
                    </button>
                </div>

                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-6">
                    <h3 className="text-base font-bold text-gray-900">
                        তথ্য
                    </h3>

                    <form onSubmit={handleUpdateUser} className="space-y-5">
                        <div className="space-y-2 text-left">
                            <label className="text-xs font-bold text-gray-800">
                                নাম
                            </label>
                            <input
                                type="text"
                                name="name"
                                defaultValue={user?.name || ""}
                                required
                                placeholder="আপনার নাম লিখুন"
                                className="w-full bg-[#fbfcfb] border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-600 transition-colors"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#008744] hover:bg-[#00753a] text-white font-bold py-3.5 px-4 rounded-xl shadow-sm transition-colors text-xs sm:text-sm"
                        >
                            আপডেট
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
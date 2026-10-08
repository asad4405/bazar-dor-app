"use client";

import { useState, useEffect } from "react";

export default function CurrentDate() {
    const [date, setDate] = useState<string>("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setDate(new Date().toLocaleDateString("bn-BD", { dateStyle: "full" }));
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    return (
        <span className="text-xs sm:text-sm font-medium text-gray-500 mt-1 min-h-[20px]">
            {date}
        </span>
    );
}
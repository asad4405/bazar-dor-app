import { ProductType } from "@/type/Products";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const MarqueeHeadingText = async () => {
    const res = await fetch(`${process.env.NEXT_API_BASE_URL}/products`, {
        next: { revalidate: 60 }
    });
    const headlines: ProductType[] = await res.json();

    return (
        <div className="flex bg-[#fbfcfb] py-2 border-t border-gray-100 overflow-hidden">
            <MarqueeText direction="right" duration={25}>
                {headlines.map((headline) => (
                    <div
                        key={headline.id}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800 px-6 border-r border-gray-200"
                    >
                        <span>
                            {headline.categoryIcon} {headline.nameBn} {headline.today} টাকা/{headline.unit}
                        </span>

                        {headline.change.dir === "up" && (
                            <span className="text-red-600 font-bold">
                                ▲ {headline.change.pct}%
                            </span>
                        )}

                        {headline.change.dir === "down" && (
                            <span className="text-emerald-600 font-bold">
                                ▼ {headline.change.pct}%
                            </span>
                        )}
                    </div>
                ))}
            </MarqueeText>
        </div>
    );
};

export default MarqueeHeadingText;
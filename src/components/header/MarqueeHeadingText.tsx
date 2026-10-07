import { ProductType } from "@/type/Products";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const MarqueeHeadingText = async () => {
    const res = await fetch(`${process.env.NEXT_API_BASE_URL}/products`, {
        next: { revalidate: 60 }
    });
    const headlines: ProductType[] = await res.json();

    return (
        <div className="flex bg-emerald-50/50 py-2 border-t border-gray-100">
            <MarqueeText direction="right" duration={15}>
                {headlines.map((headline, index) => (
                    <span key={index} className="text-sm font-medium text-gray-700">
                        <span>
                            {headline.categoryIcon} {headline.nameBn} {headline.today} টাকা/{headline.unit}
                        </span>
                        <span className="mx-4 text-gray-400">•</span>
                    </span>
                ))}
            </MarqueeText>
        </div>
    );
};

export default MarqueeHeadingText;
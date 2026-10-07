import AllProducts from "@/components/homepage/AllProducts";
import Banner from "@/components/homepage/Banner";
import TopFallers from "@/components/homepage/TopFallers";
import TopRisers from "@/components/homepage/TopRisers";
import { ProductType } from "@/type/Products";
import Link from "next/link";

export default async function Home() {
    const res = await fetch(`${process.env.NEXT_API_BASE_URL}/products`, {
        next: { revalidate: 60 }
    });
    const allProducts: ProductType[] = await res.json();

    const risers = allProducts
        .filter((product) => product.change.dir === 'up')
        .sort((a, b) => Math.abs(b.change.pct) - Math.abs(a.change.pct))
        .slice(0, 6);

    const fallers = allProducts
        .filter((product) => product.change.dir === 'down')
        .sort((a, b) => Math.abs(b.change.pct) - Math.abs(a.change.pct))
        .slice(0, 6);
    return (
        <div className="bg-[#f4f7f4]">
            <Banner/>
            <section className="w-full py-8 px-4 sm:px-6 lg:px-8 space-y-10">
                <div className="max-w-7xl mx-auto space-y-10">
                    <TopRisers risers={risers} />

                    <TopFallers fallers={fallers} />
                    
                    <AllProducts allProducts={allProducts} />
                </div>
            </section>
        </div>
    );
}
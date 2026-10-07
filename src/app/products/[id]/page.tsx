import ProductHeading from "@/components/products/ProductHeading";
import ProductMarketPrice from "@/components/products/ProductMarketPrice";
import ProductPriceSummary from "@/components/products/ProductPriceSummary";
import { ProductType } from "@/type/Products";
import Link from "next/link";

const ProductDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    const res = await fetch(`${process.env.NEXT_API_BASE_URL}/products/${id}`, {
        next: { revalidate: 60 }
    });

    const product: ProductType = await res.json();

    return (
        <div className="w-full bg-[#f4f7f4] min-h-screen py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-6">
                
                <nav className="flex items-center gap-2 text-xs text-gray-500">
                    <Link href="/" className="hover:text-emerald-700">হোম</Link>
                    <span>›</span>
                    <Link href={`/category/${product.category}`} className="hover:text-emerald-700">
                        {product.categoryNameBn}
                    </Link>
                    <span>›</span>
                    <span className="text-gray-800 font-medium">{product.nameBn}</span>
                </nav>

                
                <ProductHeading product={product} />
                <ProductPriceSummary product={product} />
                <ProductMarketPrice product={product} />

            </div>
        </div>
    );
};

export default ProductDetailsPage;
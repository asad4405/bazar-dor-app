import CategoryProducts from "@/components/category/CategoryProducts";
import { ProductType } from "@/type/Products";

const CategoryProduct = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    const res = await fetch(`${process.env.NEXT_API_BASE_URL}/products`, {
        next: { revalidate: 60 }
    });
    const allProducts: ProductType[] = await res.json();

    const products = allProducts.filter((item) => item.category === slug);

    return (
        <div className="w-full bg-[#f4f7f4] min-h-screen py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-6">
                <CategoryProducts products={products} />
            </div>
        </div>
    );
};

export default CategoryProduct;
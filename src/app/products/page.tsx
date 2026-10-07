import AllProducts from '@/components/homepage/AllProducts';
import { ProductType } from '@/type/Products';

const Products = async() => {
    const res = await fetch(`${process.env.NEXT_API_BASE_URL}/products`);
    const allProducts: ProductType[] = await res.json();
    return (
        <>
            <section className="w-full py-8 px-4 sm:px-6 lg:px-8 space-y-10">
                <div className="max-w-7xl mx-auto space-y-10">
                    <AllProducts allProducts={allProducts} />
                </div>
            </section>
        </>
    );
};

export default Products;
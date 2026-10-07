import { ProductType } from '@/type/Products';

const ProductPriceSummary = ({product}: {product: ProductType}) => {
    const minPrice = Math.min(...product.markets.map(m => m.min));
    const maxPrice = Math.max(...product.markets.map(m => m.max));
    const overallAvg = (
        product.markets.reduce((acc, curr) => acc + (curr.min + curr.max) / 2, 0) / product.markets.length
    ).toFixed(2);
    return (
        <>
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-4">
                <h2 className="text-lg font-bold text-gray-900">দামের সারসংক্ষেপ</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-[#fbfcfb] rounded-2xl p-4 border border-gray-100 space-y-1">
                        <span className="text-xs text-gray-500 font-medium">সর্বনিম্ন দাম</span>
                        <div className="text-xl font-bold text-emerald-600">{minPrice} টাকা</div>
                        <span className="text-[11px] text-gray-400 block">সবচেয়ে কম দামের বাজার</span>
                    </div>

                    <div className="bg-[#fbfcfb] rounded-2xl p-4 border border-gray-100 space-y-1">
                        <span className="text-xs text-gray-500 font-medium">সর্বাধিক দাম</span>
                        <div className="text-xl font-bold text-rose-500">{maxPrice} টাকা</div>
                        <span className="text-[11px] text-gray-400 block">সবচেয়ে বেশি দামের বাজার</span>
                    </div>

                    <div className="bg-[#fbfcfb] rounded-2xl p-4 border border-gray-100 space-y-1">
                        <span className="text-xs text-gray-500 font-medium">গড় দাম</span>
                        <div className="text-xl font-bold text-emerald-700">{overallAvg} টাকা</div>
                        <span className="text-[11px] text-gray-400 block">প্রতি {product.unit}-এর হিসাবে</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductPriceSummary;
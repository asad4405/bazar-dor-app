import { ProductType } from '@/type/Products';
import Link from 'next/link';

const AllProducts = ({allProducts}: {allProducts: ProductType[]}) => {
    return (
        <div>
            <div id="all-products" className="space-y-4 pt-4">
                <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">সব পণ্য</h2>
                    <p className="text-xs text-gray-500 mt-1">
                        মোট {allProducts.length}টি পণ্য দেখানো হচ্ছে
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {allProducts.map((item) => {
                        const isUp = item.change.dir === 'up';
                        const isFlat = item.change.dir === 'flat' || item.change.pct === 0;

                        return (
                            <Link
                                key={item.id}
                                href={`/products/${item.id}`}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col justify-between h-32"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-amber-50/60 flex items-center justify-center text-2xl">
                                        {item.categoryIcon || item.image}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-base leading-snug">{item.nameBn}</h3>
                                        <p className="text-xs text-gray-500">প্রতি {item.unit}</p>
                                    </div>
                                </div>
                                <div className="flex items-end justify-between mt-2">
                                    <div>
                                        <span className="text-[11px] text-gray-400 block">আজকের দাম</span>
                                        <span className="text-lg font-black text-gray-900">
                                            {item.today} টাকা
                                        </span>
                                    </div>
                                    <div
                                        className={`inline-flex items-center gap-1 font-bold text-xs px-2.5 py-1 rounded-md ${
                                            isFlat
                                                ? 'bg-gray-100 text-gray-600'
                                                : isUp
                                                ? 'bg-red-50 text-red-600'
                                                : 'bg-emerald-50 text-emerald-600'
                                        }`}
                                    >
                                        <span>{isFlat ? '—' : isUp ? '▲' : '▼'}</span>
                                        <span>{Math.abs(item.change.pct)}%</span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AllProducts;
import { ProductType } from '@/type/Products';

const ProductHeading = ({product}: {product: ProductType}) => {
    
    const priceDiff = Math.abs(product.today - product.yesterday);
    const isUp = product.change.dir === 'up';
    const isFlat = product.change.dir === 'flat' || product.change.pct === 0;

    return (
        <>
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gray-50 flex items-center justify-center text-3xl sm:text-4xl shadow-inner shrink-0">
                        {product.categoryIcon || product.image}
                    </div>
                    <div className="space-y-1">
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                            {product.nameBn}
                        </h1>
                        <p className="text-xs sm:text-sm text-gray-500 font-medium">
                            প্রতি {product.unit} • {product.categoryNameBn}
                        </p>
                        <p className="text-xs text-gray-600 pt-1">
                            গতকালের তুলনায় আজ দাম{" "}
                            <span className="font-bold text-gray-900">
                                {isFlat ? "একই আছে" : isUp ? "বেড়েছে" : "কমেছে"}
                            </span>{" "}
                            {!isFlat && `• ${priceDiff} টাকা`}
                        </p>
                    </div>
                </div>

                <div className="bg-[#f8faf8] rounded-2xl p-4 sm:p-5 text-right w-full sm:w-auto min-w-[140px] border border-gray-100">
                    <span className="text-xs text-gray-400 block mb-1">আজকের দাম</span>
                    <div className="text-2xl sm:text-3xl font-black text-gray-900">
                        {product.today}
                    </div>
                    <span className="text-xs text-gray-500 block font-medium mt-0.5">
                        টাকা / {product.unit}
                    </span>
                    <div
                        className={`inline-flex items-center justify-end gap-1 text-xs font-bold mt-1 ${
                            isFlat
                                ? "text-gray-500"
                                : isUp
                                ? "text-red-500"
                                : "text-emerald-600"
                        }`}
                    >
                        <span>{isFlat ? "—" : isUp ? "▲" : "▼"}</span>
                        <span>{Math.abs(product.change.pct)}%</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductHeading;
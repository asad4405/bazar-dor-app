import { ProductType } from '@/type/Products';
import React from 'react';

const ProductMarketPrice = ({product}: {product: ProductType}) => {
    return (
        <>
           <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-5">
                <h2 className="text-lg font-bold text-gray-900">বাজারভিত্তিক আজকের দাম</h2>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm border-separate border-spacing-y-2">
                        <thead>
                            <tr className="text-xs text-gray-400 border-b border-gray-100">
                                <th className="pb-3 font-normal px-4">বাজার</th>
                                <th className="pb-3 font-normal px-4">বিভাগ</th>
                                <th className="pb-3 font-normal px-4 text-center">সর্বনিম্ন</th>
                                <th className="pb-3 font-normal px-4 text-center">সর্বাধিক</th>
                                <th className="pb-3 font-normal px-4 text-right">গড়</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {product.markets?.map((market, index) => (
                                <tr key={index} className="hover:bg-gray-50/80 transition-colors">
                                    <td className="py-3 px-4 font-semibold text-gray-800">{market.market}</td>
                                    <td className="py-3 px-4 text-gray-600">{market.division}</td>
                                    <td className="py-3 px-4 text-center font-medium text-gray-700">{market.min} টাকা</td>
                                    <td className="py-3 px-4 text-center font-medium text-gray-700">{market.max} টাকা</td>
                                    <td className="py-3 px-4 text-right font-extrabold text-gray-900">
                                        {((market.min + market.max) / 2).toFixed(2)} টাকা
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div> 
        </>
    );
};

export default ProductMarketPrice;
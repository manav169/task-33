import React from 'react'
import { relatedProductData } from "../../data/relatedProducts"
import ProductItem from './ProductItem'

const RelatedProducts: React.FC = () => {
    return (
        <div className='my-12 lg:my-20'>
            <h1 className='text-xl lg:text-4xl text-center mb-20 font-bold'>Related Products</h1>
            <div className='container mx-auto lg:px-20 grid grid-cols-1 lg:grid-cols-4 gap-4 p-4'>
                {
                    relatedProductData.map((product, index) => (
                        <ProductItem key={index} {...product} />
                    ))

                }
            </div>

        </div>
    )
}

export default RelatedProducts

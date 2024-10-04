// import React from 'react'

import '../../modules/ProductPage/index.css'
import ProductDetails from '../ProductPage/ProductDetails'
import ProductDescription from '../ProductPage/ProductDescription'
import RelatedProducts from '../ProductPage/RelatedProducts'


export const Product = () => {
  return (
    <>
      {/* <section className='section1'>
        <div className='row1'>
            <div className='column1'>            </div>
            <div className='column2'>            </div>

        </div>
        <div className='row2'>
            <img src='https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-QW1iX7K5fPbg-layer-b.png?v=1724224514' />
        </div>
      </section> */}
      <ProductDetails/>
      <ProductDescription/>
      <RelatedProducts />
    </>
  )
}


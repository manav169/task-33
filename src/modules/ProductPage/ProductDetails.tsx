import React from 'react';
import AccordianProduct from '../ProductPage/AccordianProduct';
import { shoppingProducts } from '../../data/shoppingProducts'; // Ensure the correct path

const ProductDetails: React.FC = () => {
  // Get the first product from the shoppingProducts array for demonstration
  const product = shoppingProducts[0];

  return (
    <div className='pt-20 px-4'> 
      <div className="container grid lg:grid-cols-2 mx-auto lg:px-20">
        {/* Images Section */}
        <div className="flex flex-col gap-4">
          {product.colors.map((color, index) => (
            <img
              key={index}
              src={color.imageUrl}
              alt={color.colorName}
              className="rounded-xl"
            />
          ))}
        </div>

        {/* Product Details Section */}
        <div className='lg:pl-20 max-sm:pt-12' >
          <h1 className="text-2xl font-bold text-black">{product.name}</h1>
          <del className="text-gray-500">${product.originalPrice}</del>
          <p className="text-xl font-semibold text-black">${product.discountedPrice}</p>
          <p className='text-black'>{product.description}</p>

          {/* List of features */}
          <ul className="list-disc ml-4">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          {/* Additional product text */}
          <p>{product.additionalDetails.fit}</p>
          <p>{product.additionalDetails.careInstructions}</p>

          {/* Accordion for more details */}
          <AccordianProduct />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

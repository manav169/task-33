import React from 'react'

const ProductItem :React.FC = (props :any) => {
  return (
    <div>
       <div className='flex flex-col gap-4'>
          <img src={props.image} className='rounded-xl'/>
          <h1 className='text-xl '> {props.name}</h1>
          <p>{props.price}</p>
       </div>
    </div>
  )
}

export default ProductItem

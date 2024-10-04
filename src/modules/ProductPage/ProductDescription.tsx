import React from 'react';

const ProductDescription: React.FC = () => {
    return (
        <div className='mt-20'>

            <div className=' bg-[#F3F3EF]'>
                <div className="container mx-auto grid grid-cols-2  items-center p-20 gap-16">


                    <div className='flex flex-col gap-4'>
                        <h1 className='text-2xl font-bold'>Drop Duffel</h1>
                        <p>Our first soft duffel bag is crafted from a soft Italian leather. The Egg-shaped charm is a unique decorative element of the Drop Duffel. A roomy cylindrical shape that is perfect for fitting an iPhone Pro Max, a long wallet plus some essentials.</p>
                    </div>
                    <div>
                        <video controls className="w-[100%] rounded-2xl">
                            <source
                                src="https://cdn.shopify.com/videos/c/vp/2f39b8b567394db2871b2290d379f512/2f39b8b567394db2871b2290d379f512.HD-1080p-7.2Mbps-35046988.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>


                </div>
            </div>
            <div className='bg-[#F3F3EF]'>
                <div className="container mx-auto grid grid-cols-2  items-center p-20 gap-16" >

                    <div>
                        <img src='https://cdn.shopify.com/s/files/1/0623/8303/0317/files/ecom-no-replace-qQDJc9FbraRectangle_5809.png?v=1726820516' className='rounded-2xl' />


                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-2xl font-bold'>Adjustable Strap</h1>
                        <p>
                            Our soft duffel bag, crafted from luxurious Italian leather. Designed for practicality, it fits your iPhone Pro Max, wallet, and essentials effortlessly, combining style with everyday convenience.
                        </p>
                    </div>



                </div>

            </div>

        </div>
    );
}

export default ProductDescription;

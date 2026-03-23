import React from 'react'

const Testimonial = () => {
  return (
    <div className='w-full overflow-hidden py-10'>

      {/* Heading */}
      <div className="text-center px-4">
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-semibold'>
          Testimonials from customers who
        </h2>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-semibold'>
          recommend Deco
        </h2>
      </div>

      <div className="mt-10 px-4 grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* Testimonial 1 */}
        <div className="w-full bg-gray-100 rounded-2xl shadow-lg flex flex-col items-center p-6 transform transition duration-500 hover:-translate-y-3 hover:shadow-2xl">
          
          <div className="overflow-hidden rounded-full">
            <img 
              src="images/HomeImage/cloth.jpg" 
              alt="Customer Testimonial" 
              className="rounded-full w-20 h-20 border-4 border-white mb-4 transition duration-500 hover:scale-110"
            />
          </div>

          <p className='text-xl sm:text-2xl text-center font-semibold'>
            Excellent Quality
          </p>

          <p className='mt-2 text-center text-yellow-500 text-lg'>
            ⭐⭐⭐⭐⭐
          </p>

          <p className='mt-4 text-center text-gray-600 leading-relaxed'>
            "I absolutely love the fabric and fitting. The dress exceeded my expectations. 
            Delivery was super quick and the packaging was beautiful. 
            Will definitely order again!"
          </p>

          <h2 className='mt-6 text-xl sm:text-2xl font-semibold'>
            Mithael L.
          </h2>

          <p className='text-center text-sm mt-1 text-gray-500'>
            Maharashtra, Mumbai
          </p>
        </div>


        {/* Testimonial 2 */}
        <div className="w-full bg-gray-100 rounded-2xl shadow-lg flex flex-col items-center p-6 transform transition duration-500 hover:-translate-y-3 hover:shadow-2xl">
          
          <div className="overflow-hidden rounded-full">
            <img 
              src="images/HomeImage/cloth2.webp" 
              alt="Customer Testimonial" 
              className="rounded-full w-20 h-20 border-4 border-white mb-4 transition duration-500 hover:scale-110"
            />
          </div>

          <p className='text-xl sm:text-2xl text-center font-semibold'>
            Great Customer Service
          </p>

          <p className='mt-2 text-center text-yellow-500 text-lg'>
            ⭐⭐⭐⭐
          </p>

          <p className='mt-4 text-center text-gray-600 leading-relaxed'>
            "The team helped me choose the right size and the product arrived earlier 
            than expected. The quality is top-notch for the price. Highly recommended!"
          </p>

          <h2 className='mt-6 text-xl sm:text-2xl font-semibold'>
            Mithael L.
          </h2>

          <p className='text-center text-sm mt-1 text-gray-500'>
            London, UK
          </p>

        </div>

      </div>
    </div>
  )
}

export default Testimonial
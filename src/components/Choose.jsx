import React from 'react'

const Choose = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="mt-6 px-4 grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl mx-auto">

        {/* Image Section */}
        <div className="relative h-64 sm:h-80 md:h-[420px] overflow-hidden rounded-3xl group">
          <img
            src="/images/All/Choose2.jpg"
            alt="Choose Us"
            className="w-full h-full object-cover rounded-3xl transform  duration-700 group-hover:scale-110"
          />
        </div>

        {/* Text Section */}
        <div className="relative flex flex-col justify-center animate-fadeIn">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-4 duration-500 hover:translate-x-2">
            Why Choose Us
          </h2>

          <p className="mt-2 mb-6 text-sm sm:text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, adipisci quibusdam? 
            Officiis architecto alias ad nihil sint quidem, itaque repellendus commodi 
            enim a optio nobis accusamus, soluta pariatur explicabo repudiandae?
          </p>

          <hr className="my-3" />

          <h4 className="mt-3 text-lg sm:text-xl md:text-2xl mb-3 font-semibold  duration-300 hover:text-blue-500">
            Detailed Product Information
          </h4>
          <hr className="my-2" />

          <h4 className="mt-3 text-lg sm:text-xl md:text-2xl mb-3 font-semibold  duration-300 hover:text-blue-500">
            Time and Energy Savings
          </h4>
          <hr className="my-2" />

          <h4 className="mt-3 text-lg sm:text-xl md:text-2xl mb-3 font-semibold  duration-300 hover:text-blue-500">
            Reliable Customer Service
          </h4>

          <p className="mb-3 text-sm sm:text-md ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur maiores placeat 
          </p>

      
        
        </div>

      </div>
    </div>
  )
}

export default Choose
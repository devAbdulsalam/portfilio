import React from 'react';

// import components
import TestiSlider from './TestiSlider';

const Testimonials = () => {

  return (
    <section id='testimonials' className='section py-10 bg-secondary'>
      <div className="container mx-auto mt-8 ">
        <div className='flex flex-col items-center text-center'>
          <div className="text-center">
            <h3 className="text-4xl font-semibold">
              Clients <span className="text-cyan-600">Testimonials</span>
            </h3>
            <p className="text-gray-400 mt-3 text-lg">What other people say's about my works</p>
          </div>
          <br />
        </div>
        <div className='w-10/12 mx-auto mb-12'>
        <TestiSlider />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

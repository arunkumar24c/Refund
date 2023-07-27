import React from 'react'
import Faq from './Faq'

const Refund = () => {
  return (
    <div className="p-11">
      <Faq />
      {/* contact section */}
      <div className="mt-8 flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col ">
        <div className="pb-5 xl:pr-8">
          <p className="text-[#021caf] border-4 border-l-red-700 border-[#ffffff]  pl-2">
            Email Us
          </p>
          <p className="text-[#021caf] font-bold pl-3">
            inquiries@theredpen.in
          </p>
        </div>
        <div className="xl:pr-8 lg:pr-6">
          <p className="text-[#021caf] border-4 border-l-red-700 border-[#ffffff] pl-2">
            Call Us
          </p>
          <p className="text-[#021caf] font-bold pl-3">91 98204 91179</p>
        </div>
        <div className="">
          <p className="text-[#021caf] border-4 border-l-red-700 border-[#ffffff] pl-2">
            Meet Us
          </p>
          <p className="text-[#021caf] font-bold pl-3">
            PRASAD CHAMBERS #411, TATA ROAD, NO-2, OPERA HOUSE, MUMBAI – 400004.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Refund

import React from 'react';

function Pagination({ handlePrev, handleNext, pageNo }) {
  return (
    <div className='bg-gray-400 p-4 mt-8 flex justify-center items-center'>
      <div onClick={handlePrev} className="px-8 cursor-pointer">
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div className="font-bold px-4">
        {pageNo}
      </div>
      <div onClick={handleNext} className="px-8 cursor-pointer">
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}

export default Pagination;

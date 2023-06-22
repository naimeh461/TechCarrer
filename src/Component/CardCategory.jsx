import React from 'react';

const CardCategory = ({category}) => {
    const {JobAvailable,categoryType,img} = category;
    return (
        <div className='bg-violet-100 p-10 rounded-md items-start flex flex-col mb-5'>
            <img src={img} alt=""/>
            <h2 className='text-xl my-3'>{categoryType}</h2>
            <h2 className='text-gray-500'>{JobAvailable}</h2>
        </div>
    );
};

export default CardCategory;
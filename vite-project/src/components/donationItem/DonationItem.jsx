import React from 'react'

const DonationItem = ({item}) => {
    console.log(item);
  return (
    <div style={{backgroundColor: `${item.card_bg_color}`}} className='flex  md:items-center rounded-md'>
        <div className='w-[200px] h-[150px]'><img className='w-full h-full' src={item.image} alt="" /></div>
        <div className='p-4'>
            <span className='py-2 px-3  rounded-md ' style={{color:`${item.text_color}` ,backgroundColor: `${item.category_bg_color}`}}>{item.Category}</span>
            <h2 className='mt-3 font-semibold text-[#0B0B0B]'>{item.title}</h2>
            <h3 className='font-semibold mt-1' style={{color: `${item.text_color}`}}>${item.price}</h3>
            <button className='mt-2 text-sm font-semibold text-white px-3 py-2 rounded-md' style={{backgroundColor: `${item.text_color}`}}>View Details</button>
        </div>
    </div>
  )
}

export default DonationItem
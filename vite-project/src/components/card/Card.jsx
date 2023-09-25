import React from 'react'
import { useNavigate } from 'react-router-dom';

const Card = ({item}) => {
    const {card_bg_color, Category, category_bg_color, title, text_color} = item;
    const navaigate = useNavigate()

    const handleClick = () => {
        navaigate(`card/${item.id}`)
    }

    return (
    <div onClick={handleClick} className="card cursor-pointer card-compact shadow-md">
        <div className='h-[150px]'><img className='w-full h-full' src={item.image} alt="Shoes" /></div>
        <div style={{backgroundColor: `${card_bg_color}`}} className={`p-4`}>
                <span style={{color: `${text_color}`, backgroundColor: `${category_bg_color}`}} className={`text-sm p-2 rounded-md font-semibold `}>
                    {Category}
                </span>
            <h2 style={{color: `${text_color}`}} className="mt-3 font-semibold">{title}</h2>
        </div>
    </div>
  )
}

export default Card
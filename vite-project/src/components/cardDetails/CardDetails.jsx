import { useLoaderData, useParams } from 'react-router-dom'
import localStorage from '../../utils/localStorage'
import { useEffect, useState } from 'react';


const CardDetails = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('/data.json')
        .then((res) => res.json())
        .then((data) => setItems(data))
    },[])


    const {id} = useParams()
    const item = items.length > 0 && items?.find((card) => card.id == id)

    const handleSavaTols = () => {
       localStorage.saveToLs(id)
    }


    return (
        <div className=' px-4 my-4 md:px-16'>
            <div className='w-full relative'>
                <img className='w-full max-h-[420px]' src={item.image} alt="" />
                <div className='absolute py-5 px-7 bg-[#0b0b0b66] w-full bottom-0 left-0'>
                    <button style={{backgroundColor: `${item.text_color}`, color: "white", borderRadius: "6px", padding: "8px 18px"}} onClick={handleSavaTols} className='font-semibold text-white]'>Donate ${item.price}</button>
                </div>
            </div>
            

            <div className='w-full'>
                <h1 className='text-2xl mt-4 font-semibold'>{item.title}</h1>
                <p className='text-[#0b0b0bb3] text-xs my-3 mb-6 text-justify'>{item.Description}</p>
            </div>
        </div>
  )
}

export default CardDetails
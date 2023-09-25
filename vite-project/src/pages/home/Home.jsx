import React, { useEffect, useState } from 'react'
import Banner from '../../components/header/banner/Banner'
import { useLoaderData } from 'react-router-dom'
import Card from '../../components/card/Card';

const Home = () => {
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch('data.json')
    .then((res) => res.json())
    .then((Data) => setData(Data))
  }, [])

  
  return (
    <div>
      <Banner />
      <div className='p-10 px-16 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {
           data?.map((item) => <Card key={item.id} item={item} />)
        }
      </div>
    </div>
  )
}

export default Home
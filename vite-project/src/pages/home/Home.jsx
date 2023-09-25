import React, { useEffect, useState } from 'react'
import Banner from '../../components/header/banner/Banner'
import { useLoaderData } from 'react-router-dom'
import Card from '../../components/card/Card';

const Home = () => {
  const [data, setData] = useState([])
  const [seachData, setSearchData] = useState([])
  const [inputText, setInputText] = useState('')

  useEffect(() => {
    fetch('data.json')
    .then((res) => res.json())
    .then((Data) => {
      setSearchData(Data)
      setData(Data)
    })
  }, [])

  const handleSearch = () => {
    if(inputText.toLowerCase() === 'health') {
     const filterData = data.filter((item) => item.Category == 'Health')
     setSearchData(filterData)
    }

    if(inputText.toLowerCase() === 'clothing') {
     const filterData = data.filter((item) => item.Category == 'Clothing')
     setSearchData(filterData)
    }

    if(inputText.toLowerCase() === 'food') {
     const filterData = data.filter((item) => item.Category == 'Food')
     setSearchData(filterData)
    }

    if(inputText.toLowerCase() === 'education') {
     const filterData = data.filter((item) => item.Category == 'Education')
     setSearchData(filterData)
    }
  
  }

  
  return (
    <div>
      <Banner  handleSearch={handleSearch} value={inputText} setInputText={setInputText} />
      <div className='p-10 px-16 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {
           seachData?.map((item) => <Card key={item.id} item={item} />)
        }
      </div>
    </div>
  )
}

export default Home
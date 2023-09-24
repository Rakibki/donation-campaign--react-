import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import localStorage from '../../utils/localStorage'

const Donation = () => {
  const data = useLoaderData();
  const lsItems = localStorage.getDonation();
  const [localStorageItems, setLocalStorageItems] = useState([])


  useEffect(() => {
    const DonationItems = data.filter((item) => lsItems.includes(item.id))
    setLocalStorageItems(DonationItems)
  }, [])

  return (
    <div>
        {
        localStorageItems.map((item) => <p>hello</p>)
        }
    </div>
  )
}

export default Donation
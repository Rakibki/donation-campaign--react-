import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import localStorage from '../../utils/localStorage'
import DonationItem from '../../components/donationItem/DonationItem';

const Donation = () => {
  const [DonationItems, setDonationItems] = useState([]);
  const data = useLoaderData();
  const lsItems = localStorage.getDonation();

  useEffect(() => {
    const localStorageItems = data.filter((item) => lsItems.includes(item.id))
    setDonationItems(localStorageItems);
  }, [])

  return (
    <div className='grid gap-2 px-8 md:px-16 grid-cols-1 md:grid-cols-2'>
      {
        DonationItems.map((item) => <DonationItem key={item.id} item={item} />)
      }
    </div>
  )
}

export default Donation
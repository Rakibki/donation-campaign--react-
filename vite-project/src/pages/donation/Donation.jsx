import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import localStorage from "../../utils/localStorage";
import DonationItem from "../../components/donationItem/DonationItem";

const Donation = () => {
  const [DonationItems, setDonationItems] = useState([]);
  const [isShowAll, setIsSHowAll] = useState(true);
  const [data, setData] = useState([])
  
  const lsItems = localStorage.getDonation();
  
  useEffect(() => {
    fetch('data.json')
    .then((res) => res.json())
    .then((Data) => setData(Data))
  }, [])


  useEffect(() => {
    const localStorageItems = data.length > 0 && data.filter((item) => lsItems.includes(item.id));
    setDonationItems(localStorageItems);
  }, [data]);


  return (
    <div>
      <div className="grid gap-2 px-8 md:px-16 grid-cols-1 md:grid-cols-2">
        {isShowAll
          ? DonationItems.length > 0 && DonationItems.slice(0, 4).map((item) => (
              <DonationItem key={item.id} item={item} />
            ))
          : DonationItems.map((item) => (
              <DonationItem key={item.id} item={item} />
            ))}
      </div>
      <div className="flex justify-center mt-4">
        {DonationItems.length > 3 && (
          <button onClick={() => setIsSHowAll(!isShowAll)} className="text-white mb-6 font-semibold px-4 rounded-md py-2 bg-[#009444]">
            {isShowAll ? "Show All" : "See less"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Donation;


const getDonation = () => {
    const donationItems = localStorage.getItem('donations')
    if(donationItems) {
        return JSON.parse(donationItems)
    }else {
        return []
    }
}




const saveToLs = (id) => {
    const DonationItems = getDonation();
    DonationItems.push(id)
    localStorage.setItem('donations', JSON.stringify(DonationItems))
}


export default {getDonation, saveToLs}
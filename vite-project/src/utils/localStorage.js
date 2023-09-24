const getDonation = () => {
    const donationItems = localStorage.getItem('donations')
    if(donationItems) {
        return JSON.parse(donationItems)
    }else {
        return []
    }
}




const saveToLs = (id) => {
    donationItems = getDonation();
    donationItems.push(id)
    localStorage.setItem(JSON.stringify(donationItems))
}


export default {getDonation, saveToLs}
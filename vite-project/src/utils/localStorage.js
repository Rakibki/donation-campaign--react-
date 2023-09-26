import swal from 'sweetalert';

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
    const exist = DonationItems.find((item) => item == id)
    if(exist) {
       return swal("Good job!", " already Donate", "error");
    }else {
        DonationItems.push(id)
        swal("Good job!", "successful Donate", "success");
    }
    localStorage.setItem('donations', JSON.stringify(DonationItems))
}


export default {getDonation, saveToLs}
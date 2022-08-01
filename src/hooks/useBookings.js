import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { SERVER_URL } from "../variables/variables";

const useBookings = (id) => {
    const [bookings, setBookings] = useState([]);
    let FINAL_URL = SERVER_URL + '/outgoing/booking-data/get';
    if(id){
        FINAL_URL = SERVER_URL + '/outgoing/booking-data/get' + id;
    }
    else{
        FINAL_URL = SERVER_URL + '/outgoing/booking-data/get';
    }
    useEffect(() => {
        axios.get(FINAL_URL)
            .then(result => setBookings(result.data))
    }, [])

    return [bookings, setBookings]
}

export default useBookings;
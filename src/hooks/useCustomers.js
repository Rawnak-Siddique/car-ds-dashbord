import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { SERVER_URL } from "../variables/variables";

const useCustomers = (id) => {
    const [customers, setCustomers] = useState([]);
    let FINAL_URL = SERVER_URL + '/outgoing/customer-data/get';
    if(id){
        FINAL_URL = SERVER_URL + '/outgoing/customer-data/get' + id;
    }
    else{
        FINAL_URL = SERVER_URL + '/outgoing/customer-data/get';
    }
    useEffect(() => {
        axios.get(FINAL_URL)
            .then(result => setCustomers(result.data))
    }, [])

    return [customers, setCustomers]
}

export default useCustomers;
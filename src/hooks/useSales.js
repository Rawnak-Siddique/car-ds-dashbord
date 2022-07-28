import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { SERVER_URL } from "../variables/variables";

const useSales = (id) => {
    const [sales, setSales] = useState([]);
    let FINAL_URL = SERVER_URL + '/outgoing/sale-data/get';
    if(id){
        FINAL_URL = SERVER_URL + '/outgoing/sale-data/get' + id;
    }
    else{
        FINAL_URL = SERVER_URL + '/outgoing/sale-data/get';
    }
    useEffect(() => {
        axios.get(FINAL_URL)
            .then(result => setSales(result.data))
    }, [])

    return [sales, setSales]
}

export default useSales;
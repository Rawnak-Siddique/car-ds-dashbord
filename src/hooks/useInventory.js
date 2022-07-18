import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { SERVER_URL } from "../variables/variables";

const useInventory = (id) => {
    const [inventory, setInventory] = useState([]);
    let FINAL_URL = SERVER_URL + '/outgoing/inventory';
    if(id){
        FINAL_URL = SERVER_URL + '/outgoing/inventory/' + id;
    }
    else{
        FINAL_URL = SERVER_URL + '/outgoing/inventory';
    }
    useEffect(() => {
        axios.get(FINAL_URL)
            .then(result => setInventory(result.data))
    }, [])

    return [inventory, setInventory]
}

export default useInventory;
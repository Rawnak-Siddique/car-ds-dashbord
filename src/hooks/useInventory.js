import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"

const useInventory = (id) => {
    const SERVER_URL = 'http://localhost:4000/'
    const [inventory, setInventory] = useState([]);
    let FINAL_URL = SERVER_URL + 'outgoing/inventory';
    if(id){
        FINAL_URL = SERVER_URL + 'outgoing/inventory/' + id;
    }
    else{
        FINAL_URL = SERVER_URL + 'outgoing/inventory';
    }
    useEffect(() => {
        axios.get(FINAL_URL)
            .then(result => setInventory(result.data))
    }, [])

    return [inventory, setInventory]
}

export default useInventory;
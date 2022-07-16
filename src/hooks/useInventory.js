import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"

const useInventory = () => {
    const SERVER_URL = 'http://localhost:4000/'
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        axios.get(SERVER_URL + 'outgoing/inventory')
            .then(result => setInventory(result.data))
    }, [])

    return [inventory, setInventory]
}

export default useInventory;
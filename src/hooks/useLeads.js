import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { SERVER_URL } from "../variables/variables";

const useLeads = (id) => {
    const [leads, setLeads] = useState([]);
    let FINAL_URL = SERVER_URL + '/outgoing/leads-data/get';
    if(id){
        FINAL_URL = SERVER_URL + '/outgoing/leads-data/get' + id;
    }
    else{
        FINAL_URL = SERVER_URL + '/outgoing/leads-data/get';
    }
    useEffect(() => {
        axios.get(FINAL_URL)
            .then(result => setLeads(result.data))
    }, [])

    return [leads, setLeads]
}

export default useLeads;
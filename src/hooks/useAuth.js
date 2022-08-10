import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { SERVER_URL } from "../variables/variables";

const useCredentials = (id) => {
    const [credentials, setCredentials] = useState([]);
    let FINAL_URL = SERVER_URL + '/outgoing/settings-data/read-credentials';
    useEffect(() => {
        axios.post(FINAL_URL)
            .then(result => setCredentials(result.data))
    }, [])

    return [credentials, setCredentials]
}

export default useCredentials;
// https://restcountries.com/v2/all?fields=name

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"

const useCountries = () => {
    const [countries, setCountries] = useState([]);
    let FINAL_URL = 'https://restcountries.com/v2/all?fields=name';
    useEffect(() => {
        axios.get(FINAL_URL)
            .then(result => setCountries(result.data))
    }, [])

    return [countries, setCountries]
}

export default useCountries;
import axios from "axios";
import { useEffect, useState } from "react";
import { SERVER_URL } from "../variables/variables";


/**
 * This function is used to get the images of the inventory items
 * @param id - the id of the inventory item
 * @returns [images, setImages]
 */
const useInventoryImages = (id) => {
    const [images, setImages] = useState([]);
    let FINAL_URL = SERVER_URL + '/outgoing/inventory/images';
    if (id) {
        FINAL_URL = SERVER_URL + '/outgoing/inventory/images' + id;
    }
    else {
        FINAL_URL = SERVER_URL + '/outgoing/inventory/images';
    }
    useEffect(() => {
        axios.get(FINAL_URL)
            .then(result => setImages(result.data))
    }, [])

    return [images, setImages];

}

export default useInventoryImages;
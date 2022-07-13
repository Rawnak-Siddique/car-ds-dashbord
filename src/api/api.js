import axios from "axios";

const baseUrl = 'https://mominapi.adulteducationhelp.com/test/';

export const postInventoryFormData = async ( inventoryFiles, inventoryData ) => {
    const stringifyData = JSON.stringify(inventoryData);
    try {
        await axios.post(`${baseUrl}post`, {
            id: '1',
            file: inventoryFiles,
            data: stringifyData
        }).then( (response) => {
            console.log('success', response);
        }).catch( (error) => {
            console.log(error);
        }); 
    } catch (error) {
        console.log('failure', error);
    }
};
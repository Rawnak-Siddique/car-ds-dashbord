import axios from "axios";



export const postInventoryFormData = async ( inventoryFiles, inventoryData ) => {
    const stringifyData = JSON.stringify(inventoryData);
    /*file: inventoryFiles,*/
    try {
        await axios.post('https://mominapi.adulteducationhelp.com/test/post', {
            id: '1',
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
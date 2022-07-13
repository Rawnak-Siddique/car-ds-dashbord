import axios from "axios";


const sampleData = {
    body_type: "  Sedan",
    brand: "Audi",
    condition: " Used",
    cylinder: "6",
    description: "123",
    door: "6",
    drive: " all-wheel",
    ext_color: "123",
    featured_text: "123",
    fuel_type: "Hybrid Gas",
    int_color: "123",
    mileage: "123",
    model: "123",
    odometer: "123",
    price: "121",
    status: " out of stock",
    stock: "123",
    transmission: "manual",
    vinNumber: "123",
}

export const postInventoryFormData = async (inventoryFiles, inventoryData) => {
    try {
        console.log(inventoryData);
        // await axios.post('https://mominapi.adulteducationhelp.com/test/post', {
        //     id: '1',
        //     file: inventoryFiles,
        //     data: stringifyData
        // }).then( (response) => {
        //     console.log('success', response);
        // }).catch( (error) => {
        //     console.log(error);
        // }); 
    } catch (error) {
        console.log('failure', error);
    }
};
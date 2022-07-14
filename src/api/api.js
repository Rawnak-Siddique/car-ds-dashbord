import axios from "axios";

const baseUrl = 'https://mominapi.adulteducationhelp.com/test/';

const sampleData = {
    body_type: "Sedan",
    brand: "Audi",
    condition: "Used",
    cylinder: "6",
    description: "123",
    door: "6",
    drive: "All-wheel",
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

export const postInventoryFormData = async (inventoryData, sessionTicket) => {
    if(!sessionTicket){
        alert('Server response: Image Upload Unsuccessful')
        return;
    }
    inventoryData.ticket = sessionTicket;
    console.log(sessionTicket);
    try {
        console.log(inventoryData);
        await axios.post('http://localhost:4000/incoming/post', inventoryData)
        .then( (response) => {
            console.log('success', response);
        }).catch( (error) => {
            console.log(error);
        }); 
    } catch (error) {
        console.log('failure', error);
    }
};
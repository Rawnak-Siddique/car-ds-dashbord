import axios from "axios";
import { SERVER_URL } from "../variables/variables";

// const baseUrl = 'https://mominapi.adulteducationhelp.com/incoming';

/*const sampleData = {
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
}*/

export const postInventoryFormData = async (inventoryData, sessionTicket, setSubmitSuccess) => {
    if (!sessionTicket) {
        alert('Server response: Image Upload Unsuccessful')
        return;
    }
    inventoryData.ticket = sessionTicket;
    // console.log(sessionTicket);
    try {
        // console.log(inventoryData);
        await axios.post(SERVER_URL + '/incoming/post', inventoryData)
            .then((response) => {
                if (response.data.submit_status === 'success') {
                    setSubmitSuccess(true);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    } catch (error) {
        console.log('failure', error);
    }
};

export const updateInventory = async (data, setSubmitSuccess) => {
    try {
        // console.log(data);
        await axios.put(SERVER_URL + '/incoming/update', data)
            .then((response) => {
                if (response.data.submit_status === 'success') {
                    setSubmitSuccess(true);
                }
            }).catch((error) => {
                console.log(error);
            });
    } catch (error) {
        console.log('failure', error);
    }
}

export const addSales = async (data, setSubmitSuccess) => {
    try {
        // console.log(data);
        await axios.post(SERVER_URL + '/incoming/sales/add', data)
            .then((response) => {
                if (response.data.submit_status === 'success') {
                    setSubmitSuccess(true);
                }
            }).catch((error) => {
                console.log(error);
            });
    } catch (error) {
        console.log('failure', error);
    }
}
export const addCustomer = async (data, setSubmitSuccess) => {
    try {
        // console.log(data);
        await axios.post(SERVER_URL + '/incoming/customer/add', data)
            .then((response) => {
                if (response.data.submit_status === 'success') {
                    setSubmitSuccess(true);
                }
            }).catch((error) => {
                console.log(error);
            });
    } catch (error) {
        console.log('failure', error);
    }
}
export const addLeads = async (data, setSubmitSuccess) => {
    try {
        // console.log(data);
        await axios.post(SERVER_URL + '/incoming/leads/add', data)
            .then((response) => {
                if (response.data.submit_status === 'success') {
                    setSubmitSuccess(true);
                }
            }).catch((error) => {
                console.log(error);
            });
    } catch (error) {
        console.log('failure', error);
    }
}

export const sendSettingsForm = async (data, setSubmitSuccess, setSubmitError) => {
    try {
        // console.log(data);
        await axios.post(SERVER_URL + '/incoming/settings/update', data)
            .then((response) => {
                if (response.data.submit_status === 'success') {
                    setSubmitSuccess(true);
                }
                else {
                    setSubmitSuccess(true);
                    setSubmitError(true);
                }
            }).catch((error) => {
                console.log(error);
            });
    } catch (error) {
        console.log('failure', error);
    }
}
export const sendChangePassForm = async (data, setSubmitSuccess, setSubmitError) => {
    try {
        // console.log(data);
        await axios.post(SERVER_URL + '/incoming/settings/update-pass', data)
            .then((response) => {
                if (response.data.submit_status === 'success') {
                    setSubmitSuccess(true);
                }
                else {
                    setSubmitSuccess(true);
                    setSubmitError(true);
                }
            }).catch((error) => {
                console.log(error);
            });
    } catch (error) {
        console.log('failure', error);
    }
}


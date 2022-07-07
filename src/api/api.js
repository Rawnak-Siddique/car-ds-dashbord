import axios from "axios";

const apiUrl = "https://";

export const singleFileUpload = async (data) => {
    try {
        await axios.post(apiUrl + 'singleFile', data);
    } catch (error) {
        console.log(error);
    }
};
import axios from "axios";

const BACKEND_URL =
    process.env.REACT_APP_IS_PROD === "true"
        ? process.env.REACT_APP_BACKEND_URL_PROD
        : process.env.REACT_APP_BACKEND_URL;

const BACKEND_STOCK_URL =
    process.env.REACT_APP_IS_PROD === "true"
        ? process.env.REACT_APP_STOCK_BACKEND_URL_PROD
        : process.env.REACT_APP_STOCK_BACKEND_URL;

export const loginDrugMachine = async (drugMachineCode, password) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/chatAI/loginDrugMachine`, {
            drugMachineCode: drugMachineCode,
            password: password,
        });

        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const insertIdCard = async (idCardNumber) => {
    try {
        const response = await axios.post(`${BACKEND_STOCK_URL}/api/insertIdCard`, {
            idCardNumber: idCardNumber
        });

        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
export const removeIdCard = async (idCardNumber) => {
    try {
        const response = await axios.post(`${BACKEND_STOCK_URL}/api/removeIdCard`, {
            idCardNumber: idCardNumber
        });

        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
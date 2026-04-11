import AxiosInstance from "./Axiosinstance"

const GenderService = {
    storeGender: async (data: any) => {
        try {
            const response = await AxiosInstance.post('/gender/storeGender', data);
            return response
        } catch (error) {
            throw error;
        }

    },

};

export default GenderService
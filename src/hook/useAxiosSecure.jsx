import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://book-lovers-server-tawny.vercel.app',


});
const useAxiosSecure = () => {

    return axiosSecure;
};

export default useAxiosSecure;
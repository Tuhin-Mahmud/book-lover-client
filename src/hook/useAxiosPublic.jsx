import axios from "axios";



const axiosPublic = axios.create({
    baseURL: 'https://book-lovers-server-tawny.vercel.app',

});

const useAxiosPublic = () => {

    return axiosPublic;
};

export default useAxiosPublic;
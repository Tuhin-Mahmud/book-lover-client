import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useBooks = () => {
    const axiosPublic = useAxiosPublic()
    const { data: books = [] } = useQuery({
        queryKey: ['mainBooks'],
        queryFn: async () => {
            const res = await axiosPublic.get('/books')
            return res.data;
        }
    })
    return [books]
};

export default useBooks;
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useCateBooks = () => {
    const axiosPublic = useAxiosPublic()
    const { data: categoriesBook = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await axiosPublic.get('/categories-book')
            return res.data
        }
    })
    return [categoriesBook, isLoading];
};

export default useCateBooks;
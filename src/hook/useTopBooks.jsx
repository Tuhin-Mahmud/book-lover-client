import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTopBooks = () => {
    const axiosPublic = useAxiosPublic()
    const { data: topBooks = [], isLoading } = useQuery({
        queryKey: ['topBooks'],
        queryFn: async () => {
            const res = await axiosPublic.get('/toBooks')
            // console.log(topBooks);
            return res.data;
        }
    })
    return [topBooks, isLoading]
};

export default useTopBooks;

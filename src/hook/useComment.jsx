import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useComment = () => {
    const axiosPublic = useAxiosPublic()
    const { data: comment = [], refetch, isLoading } = useQuery({
        queryKey: ['comment'],
        queryFn: async () => {
            const res = await axiosPublic.get('/comment')
            return res.data
        }
    })
    return [comment, refetch, isLoading]
};

export default useComment;
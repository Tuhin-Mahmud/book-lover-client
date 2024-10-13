import Container from "../../component/common/Container";
import TopBookCart from "./TopBookCart";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hook/useAxiosPublic";

const TopBooks = () => {
    // const axiosPublic = useAxiosPublic()
    // const { data: topBooks = [] } = useQuery({
    //     queryKey: ['topBooks'],
    //     queryFn: async () => {
    //         const res = await axiosPublic.get('/toBooks')
    //         console.log(topBooks);
    //         return res.data;
    //     }
    // })
    return (
        <div className="relative  overflow-hidden min-h-screen">
            <div className="absolute inset-y-0  -right-72 bg-[#007aff] transform rotate-45 w-[100%]" >

            </div>
            <Container>
                <h1 className="text-3xl  relative font-bold ">Library Top Books</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 relative ">
                    {
                        topBooks.map(book => <TopBookCart
                            key={book._id}
                            book={book}
                        ></TopBookCart>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default TopBooks;
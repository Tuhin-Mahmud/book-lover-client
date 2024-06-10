
import useAuth from "../../hook/useAuth";

import useAxiosSecure from "../../hook/useAxiosSecure";
import BorrowedBookCart from "./BorrowedBookCart";

import { useQuery } from "@tanstack/react-query";
import Container from "../../component/common/Container";
import HeaderText from "../../component/common/HeaderText";

const BorrowedBooks = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: borrowed = [], refetch } = useQuery({
        queryKey: ['borrowed'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/borrowed?email=${user?.email}`)
            return res.data
        }
    })






    return (
        <Container>

            <HeaderText Heading={'All Borrowed Books Here'} subHeading={' User Borrowed Books  '}></HeaderText>
            <div className="grid grid-cols-6 gap-5">
                {/* grid card */}

                <div className="col-span-4">

                    {
                        borrowed?.length ?
                            <>
                                < div className="grid grid-cols-1  gap-6">
                                    {
                                        borrowed.map((book, indx) => <BorrowedBookCart
                                            key={indx}
                                            book={book}
                                            refetch={refetch}


                                        ></BorrowedBookCart>)
                                    }


                                </div>
                            </>
                            :
                            <>
                                <h1 className="text-2xl text-center text-neutral-800 font-serif">No Borrowed Book Available,<br /> <span className="font-bold text-blue-500">Please Collect Borrowed Book</span></h1>
                            </>
                    }

                </div>
                {/* ----contact------ */}
                <div className="col-span-2">

                </div>
            </div>
        </Container >
    );
};

export default BorrowedBooks;
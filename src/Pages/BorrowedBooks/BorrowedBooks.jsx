
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
                    <div className="group relative max-w-[350px] overflow-hidden bg-gradient-to-r from-[#3b99f1] via-[#4FB5FF] to-[#4FB5FF] px-6 py-6 text-white shadow">
                        <span className="absolute left-[-40%] top-[30%] z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-r from-[#0064c2] via-[#49aef7] to-[#c7e0f1] duration-300 group-hover:top-[-30%] group-hover:blur-sm"></span>
                        <span className="absolute right-[-40%] top-[-40%] z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-tr from-[#0064c2] via-[#4FB5FF] to-[#4FB5FF] duration-300 group-hover:top-[40%] group-hover:blur-sm"></span>
                        <div className="relative z-20 space-y-6">
                            <h1 className="text-2xl font-bold">Thanks for Borrowed Book</h1>
                            <p>The Great Gatsby is a quintessential American novel that explores themes of wealth, love, and the American Dream in the 1920s. Through the eyes of Nick Carraway, readers experience the opulence and tragedy of Jay Gatsby&apos;s pursuit of the elusive Daisy Buchanan. A critique of the Jazz Age, the novel is celebrated for its vivid portrayal of a flawed, yet fascinating, era and has received critical acclaim as one of the greatest literary works in American history.This format ensures a concise yet informative description of the borrowed book, providing essential details and a brief overview of its content.<a href="#" className="border-b"> What for?</a></p>
                            <button className="bg-[#1b8efa] px-6 py-2">Understood</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container >
    );
};

export default BorrowedBooks;
import { useEffect, useState } from "react";
import BooksCard from "./BooksCard";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import Container from "../../../component/common/Container";
import HeaderText from "../../../component/common/HeaderText";

const Books = () => {
    const [books, setBooks] = useState([])
    const axiosPublic = useAxiosPublic()
    useEffect(() => {
        axiosPublic.get('/books')
            .then(res => {
                setBooks(res.data)
            })
    }, [axiosPublic])


    return (
        <Container>
            <HeaderText Heading={'Category Books'} subHeading={'Please Choose Your Books'} />
            <div className="mt-5">
                {/* <h1 className="text-5xl text-red-500 mb-4 text-center">Please Choose Your Books</h1> */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        books.map(book => <BooksCard
                            key={book._id}
                            book={book}
                        ></BooksCard>)
                    }
                </div>
            </div>
        </Container>
    );
};

export default Books;
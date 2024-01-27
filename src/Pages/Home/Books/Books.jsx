import { useEffect, useState } from "react";
import BooksCard from "./BooksCard";

const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/books/read')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div className="mt-10">
            <h1 className="text-5xl text-red-500 mb-4 text-center">Please Choose Your Books</h1>
            <div className="grid md:grid-cols-3 gap-4">
                {
                    books.map(book => <BooksCard
                        key={book._id}
                        book={book}
                    ></BooksCard>)
                }
            </div>
        </div>
    );
};

export default Books;
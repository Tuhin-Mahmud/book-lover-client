import { useEffect, useState } from "react";
import AuthorsCard from "./AuthorsCard";

const Authors = () => {
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/authors/read')
            .then(res => res.json())
            .then(data => setAuthors(data))
    }, [])
    return (
        <div className="mt-7 bg-gray-100 p-5 rounded-xl mb-8">
            <h1 className="text-center text-red-500 text-5xl">Most Popular Authors</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
                {
                    authors.map(author => <AuthorsCard
                        key={author.id}
                        author={author}
                    ></AuthorsCard>)
                }
            </div>
        </div>
    );
};

export default Authors;
import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";

const AllBooks = () => {
    const { user } = useAuth()
    const [books, setBooks] = useState([])

    const URL = `http://localhost:5000/orderBook?email=${user?.email}`

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [URL])

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>image</th>
                            <th>name</th>
                            <th>price</th>
                            <th>email</th>
                            <th>delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map((book, index) => <tr key={book._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={book.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {book.price}
                                </td>
                                <td>
                                    {book.name}
                                </td>
                                <td>{book.email}</td>
                                <th>
                                    <button className="btn btn-ghost  ">X</button>
                                </th>
                                <th>
                                    <button className="btn btn-ghost  ">update</button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBooks;
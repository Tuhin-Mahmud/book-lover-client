
import useAuth from "../../hook/useAuth";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hook/useAxiosSecure";
import BorrowedBookCart from "./BorrowedBookCart";
import Swal from "sweetalert2";

const BorrowedBooks = () => {
    const { user } = useAuth()
    // console.log(user);
    const instance = useAxiosSecure()
    const [borrowed, setBorrowed] = useState([])

    useEffect(() => {
        instance.get(`/borrowed?email=${user?.email}`)
            .then(res => {
                // console.log(res.data);
                setBorrowed(res.data)
            })
    }, [instance, user])


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "return the book!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes Return!"
        }).then((result) => {
            if (result.isConfirmed) {

                instance.delete(`/borrowed/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Return!",
                                text: "Your book has been return.",
                                icon: "success"
                            });
                            const remaining = borrowed.filter(book => book._id !== id)
                            setBorrowed(remaining)
                        }

                    })



            }
        });

    }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    borrowed.map((book, indx) => <BorrowedBookCart
                        key={indx}
                        book={book}
                        handleDelete={handleDelete}

                    ></BorrowedBookCart>)
                }
            </div>
        </div>
    );
};

export default BorrowedBooks;
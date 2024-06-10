import Swal from "sweetalert2";
import useAxiosSecure from "../../hook/useAxiosSecure";

/* eslint-disable react/prop-types */
const BorrowedBookCart = ({ book, refetch }) => {
    const axiosSecure = useAxiosSecure()

    const { _id, date, image, category, book_name, author_name, quantity, email, userName } = book;

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't remove  this borrowed book!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/borrowed/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been removed.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    return (
        <div>

            <div className="flex flex-col items-center justify-center md:flex-row">
                <div className=" sm:w-[300px] border h-[380px] rounded-lg">
                    <img className="h-full  w-full  rounded-lg border border-red-500 bg-black/70 " src={image} alt="borrowed" />
                </div>
                <div className="min-w-[250px] max-w-[350px] space-y-12 rounded-br-lg rounded-tr-lg bg-white p-10 text-center shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)] dark:bg-[#18181B] md:w-[350px] dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">
                    <div className="space-y-1">
                        <h2 className="text-center font-sans text-2xl font-medium text-gray-700 dark:text-white/90 lg:text-3xl">{book_name}</h2>
                        <div className="flex justify-between text-gray-500">
                            <p className="font-sans  dark:text-white/70 capitalize">{category}</p>
                            <p>UserName: {userName}</p>
                        </div>
                        <p className="text-gray-400 dark:text-white/70">email: {email}</p>
                    </div>
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="space-y-1">
                            <p className="font-sans text-sm text-gray-500 dark:text-white/70">Quantity</p>
                            <p className="text-sm tracking-wider text-gray-500 dark:text-white/80 ">{quantity}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="font-sans text-sm text-gray-500 dark:text-white/70">Author Name</p>
                            <p className=" text-gray-500 dark:text-white/80 text-sm">{author_name}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="font-sans text-sm text-gray-500 dark:text-white/70">date</p>
                            <p className="text-sm tracking-wider text-gray-700 dark:text-white/80 ">{date}</p>
                        </div>
                    </div>
                    <div>
                        <button
                            onClick={() => { handleDelete(_id) }}
                            className="rounded-full border border-[#0d87f8] px-4 py-2 text-sm text-[#0d87f8] hover:bg-[#0d87f8] hover:text-white  duration-300 dark:hover:bg-transparent dark:hover:text-[#0d87f8] dark:hover:drop-shadow-[0px_0px_2px_#0d87f8]">Delete</button>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default BorrowedBookCart;
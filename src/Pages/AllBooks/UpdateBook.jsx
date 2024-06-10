import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";


const UpdateBook = () => {
    const updateBook = useLoaderData()
    const { _id, image, book_name, author_name, quantity, rating } = updateBook;



    const handleBookUpdate = e => {
        e.preventDefault()
        const form = e.target || 'not available';
        const name = form.name?.value || 'not available';
        const category = form.category?.value || 'not available';
        const authorName = form.authorName?.value || 'not available';
        const rating = form.rating?.value || 'not available';
        const photo = form.photo?.value || 'not available';

        const updateBook = {
            name,
            category,
            authorName,
            rating,
            photo
        }

        fetch(`http://localhost:5000/books/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateBook)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "this book updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }
    return (
        <div>
            <h1 className="text-4xl text-orange-400 text-center">Update Book:{book_name}</h1>
            <form onSubmit={handleBookUpdate} className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={book_name} name="name" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        {/* <input type="text" placeholder="Category" className="input input-bordered" name="category" /> */}
                        <select className="input  select select-bordered" name="category" id="">
                            {/* <option defaultValue={updateBook.category} value="">Select book category</option> */}
                            <option defaultValue={updateBook.category} value="novel">Novel</option>
                            <option defaultValue={updateBook.category} value="Thriller">Thriller</option>
                            <option defaultValue={updateBook.category} value="History">History</option>
                            <option defaultValue={updateBook.category} value="Drama">Drama</option>
                        </select>
                        {/* <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Who shot first?</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select> */}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Author Name</span>
                        </label>
                        <input type="text" defaultValue={author_name} className="input input-bordered" required name="authorName" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input defaultValue={rating} type="text" placeholder="Rating" className="input input-bordered" required name="rating" />
                    </div>
                </div>
                {/* img  */}
                <div className="form-control  w-full ">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input type="text" defaultValue={image} placeholder="Image URL" className="input input-bordered" required name="photo" />
                </div>

                <div className="form-control mt-6">
                    {/* <button className="btn btn-primary">Login</button> */}
                    <input className="btn btn-block btn-error text-xl text-white" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default UpdateBook;
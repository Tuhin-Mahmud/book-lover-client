
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hook/useAuth";

const AddBook = () => {
    const books = useLoaderData()
    const { user } = useAuth()
    const { author_name, image, quantity, rating } = books;

    const handleBookSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;
        const authorName = form.authorName.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const email = user?.email;
        const order = {
            name,
            image,
            email,
            category,
            authorName,
            quantity,
            description,
            rating,
            photo
        }
        console.log(order);

        fetch('http://localhost:5000/orderBook', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(order)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "book order successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div>
            <form onSubmit={handleBookSubmit} className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        {/* <input type="text" placeholder="Category" className="input input-bordered" name="category" /> */}
                        <select className="input input-bordered" name="category" id="">
                            <option value="">Select book category</option>
                            <option value="novel">Novel</option>
                            <option value="Thriller">Thriller</option>
                            <option value="History">History</option>
                            <option value="Drama">Drama</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Author Name</span>
                        </label>
                        <input type="text" defaultValue={author_name} className="input input-bordered" required name="authorName" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity Of The Book</span>
                        </label>
                        <input defaultValue={quantity} type="text" placeholder="Quantity" className="input input-bordered" required name="quantity" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <input type="text" placeholder="Description" className="input input-bordered" required name="description" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" defaultValue={rating} placeholder="Rating" className="input input-bordered" required name="rating" />
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

export default AddBook;
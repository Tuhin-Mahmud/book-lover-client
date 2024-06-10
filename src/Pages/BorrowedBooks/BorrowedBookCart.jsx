import useAxiosSecure from "../../hook/useAxiosSecure";

/* eslint-disable react/prop-types */
const BorrowedBookCart = ({ book, handleDelete }) => {


    const { _id, date, image, category, book_name, author_name, quantity, email, userName } = book;

    return (
        <div>
            <div className="card  border-orange-100 hover:shadow-2xl border  h-[500px]">
                <figure className=" "><img className=" w-3/4
                h-[250px] px-5 mt-4 rounded-xl " src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Category:
                        <div className="badge bg-orange-400 uppercase">{category}</div>
                    </h2>
                    <p className="text-3xl font-semibold">{book_name}</p>
                    <div className="divider"></div>
                    <div className="card-actions justify-end">

                        <div className="badge badge-outline">
                            <p>Return Date:</p>
                            {date}
                        </div>
                        <div className="badge badge-outline">
                            <p>Borrowed date:</p>
                            4/7/2024
                        </div>
                        <button onClick={() => handleDelete(_id)} className="btn border-2  w-full border-orange-200 ">Return</button>
                    </div>
                </div>
            </div>

            {/* <div className="hero h-[400px] bg-base-200 my-10">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="flex-1">
                        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className="flex-1">
                        <div className="space-y-4">
                            <h5 className="bg-orange-400 font-bold w-24 text-white rounded-r-full px-2 uppercase">{category}</h5>
                            <h1 className="text-5xl font-bold">{book_name}</h1>
                            <p className="text-gray-500 text-xl uppercase">by:   {author_name}</p>
                            <p className="text-gray-500 text-xl uppercase">quantity: {quantity}</p>
                        </div>
                    </div>
                    <div className="flex-1">
                        <h4 className="text-5xl font-bold" >$<span>46.00</span></h4>
                        <p className="py-6"></p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default BorrowedBookCart;
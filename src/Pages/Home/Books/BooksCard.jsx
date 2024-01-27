/* eslint-disable react/prop-types */
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const BooksCard = ({ book }) => {
    const { _id, image, category_name } = book


    return (
        <div className="card  bg-base-100 border-2">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <div className="card-actions flex justify-between items-center">
                    <h2 className="card-title">{category_name}</h2>
                    <Link to={`/addBook/${_id}`}>
                        <button className="btn text-red-500 text-2xl"><AiOutlineArrowRight /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BooksCard;
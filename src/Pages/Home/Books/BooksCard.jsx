/* eslint-disable react/prop-types */
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const BooksCard = ({ book }) => {
    const { image, name } = book


    return (
        <div className="card  bg-base-100 border-2  h-[350px]">
            <figure className="px-5 py-6  ">
                <img src={image} alt="Shoes" className="
                w-11/12  object-cover p-3
                
                " />
            </figure>
            <div className="card-body ">
                <div className="card-actions flex justify-between items-center">
                    <h2 className="card-title uppercase">{name}</h2>
                    <Link to={`/bookCategories/${name}`}>
                        <button className="btn text-red-500 text-2xl"><AiOutlineArrowRight /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BooksCard;
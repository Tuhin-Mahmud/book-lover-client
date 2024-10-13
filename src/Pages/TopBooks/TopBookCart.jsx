/* eslint-disable react/prop-types */
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';
import Loader from '../../component/Loader/Loader';

const TopBookCart = ({ book, isLoading }) => {

    const { _id, book_image, book_name, previous_price, running_price, author_img, author_name, rating, customer_review, review_date_time, description, long_description, SKU, category, format, total_page, language, publish_years, century } = book || {};

    if (isLoading) {
        return <Loader />
    }

    return (
        <div>
            <div className="card bg-gray-50  ">
                <figure className="px-10 pt-10 ">
                    <div className="bg-gray-200 p-5">
                        <img
                            src={book_image}
                            alt="Shoes"
                            className="rounded-xl w-full  h-[200px] object-cover" />
                    </div>
                </figure>
                <div className="px-5 py-5 space-y-3">
                    <h2 className="card-title">{book_name}</h2>
                    <div className="flex items-center space-x-4">
                        <p className="text-orange-400 font-medium">${running_price}</p>
                        <p className="line-through text-gray-500">${previous_price}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className="flex items-center gap-2">
                            <img src={author_img} className="w-8 h-8 rounded-full" alt="author image" />
                            <p className="text-slate-400">{author_name}</p>
                        </div>
                        <Rating
                            style={{ maxWidth: 80 }}
                            value={rating}
                            readOnly
                        />
                    </div>
                    <div className="card-actions">
                        <Link to={`/addToCartDetails/${_id}`} className='w-full'>
                            <button className="relative h-10 w-full origin-top transform rounded-lg border-2 border-[#052c65] text-xl text-sky-500 before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-sky-500">Add To Cart</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBookCart;
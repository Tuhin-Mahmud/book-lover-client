import { useLoaderData } from "react-router-dom";
import bannerImg from '../../assets/images/bookBaner/bookh3.jpg'
import Container from "../../component/common/Container";
import HeaderImage from "../../component/common/HeaderImage";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { useState } from "react";
import Modal from "../../component/utils/TopNavbar/Modal";

const AddToCartDetails = () => {
    const { _id, book_image, book_name, previous_price, running_price, author_img, author_name, rating, customer_review, review_date_time, description, long_description, SKU, category, format, total_page, language, publish_years, century } = useLoaderData()


    const [count, setCount] = useState(true)

    return (
        <Container>
            <div className="mb-32">
                <HeaderImage image={bannerImg} text={'new books'}></HeaderImage>
            </div>
            <div>
                <div className="">
                    <div className="flex flex-col lg:flex-row">
                        <div className="flex-1  bg-gray-100 p-5 border-2 rounded-lg">

                            <img
                                src={book_image}
                                className="max-w-sm rounded-lg shadow-2xl mx-auto  p-5 " />
                        </div>
                        <div className="flex-1 px-9">
                            <h1 className="text-5xl font-bold">{book_name}</h1>
                            <div className="flex gap-3">
                                <Rating
                                    style={{ maxWidth: 80 }}
                                    value={rating}
                                    readOnly
                                />
                                <p>(1 customer review)</p>
                            </div>
                            <p>{description}</p>
                            <p>Books are a gateway to knowledge, imagination, and adventure. They offer insights into various subjects, tell captivating stories, and provide a means to learn, escape, and grow. Whether fiction or non-fiction, books connect readers to different cultures, ideas, and experiences across time and space.</p>
                            <h3 className="text-2xl font-bold text-orange-500 font-mono">${running_price}</h3>
                            <div>
                                <div className="flex border gap-5 w-1/4 px-8 rounded-2xl  ">
                                    <button onClick={() => setCount(count - 1)} className="text-3xl text-center">-</button>
                                    <h1 className="text-2xl">{count}</h1>
                                    <button onClick={() => setCount(count + 1)} className="text-3xl">+</button>
                                </div>
                                <div>
                                    <Modal />
                                </div>
                            </div>

                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

        </Container >
    );
};

export default AddToCartDetails;
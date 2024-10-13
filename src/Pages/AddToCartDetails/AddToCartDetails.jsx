import { useLoaderData } from "react-router-dom";
import bannerImg from '../../assets/images/bookBaner/bookh3.jpg'
import Container from "../../component/common/Container";
import HeaderImage from "../../component/common/HeaderImage";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { useState } from "react";
import Modal from "../../component/utils/TopNavbar/Modal";
import { CgShoppingCart } from "react-icons/cg";
import { GiSelfLove } from "react-icons/gi";
import TabsDetails from "../../component/utils/TabsDetails";



const AddToCartDetails = () => {
    const [count, setCount] = useState(true)

    const { _id, book_image, book_name, previous_price, running_price, author_img, author_name, rating, customer_review, review_date_time, description, long_description, SKU, category, format, total_page, language, publish_years, century } = useLoaderData()


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
                        <div className="flex-1 px-9 space-y-5">
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
                            <p>{long_description.slice(0, 400)}....</p>
                            <h3 className="text-2xl font-bold text-orange-500 font-mono">${running_price}</h3>
                            <div className="md:flex gap-3">
                                <div className="flex border gap-5 w-1/4 px-8 rounded-2xl  ">
                                    <button onClick={() => setCount(count - 1)} className="text-3xl text-center">-</button>
                                    <h1 className="text-2xl">{count}</h1>
                                    <button onClick={() => setCount(count + 1)} className="text-3xl">+</button>
                                </div>
                                <div className="md:flex gap-2 items-center">
                                    <Modal />
                                    {/* add to cart */}
                                    <button className="btn
                            relative h-10  origin-top transform rounded-lg border-2 border-[#007aff] bg-[#052c65] text-xl text-sky-500 before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-sky-500
                            "><CgShoppingCart /> Add To Cart</button>
                                    <div className="bg-[#052c65] hover:bg-[#052c65] btn btn-circle rounded-full ">
                                        <GiSelfLove className="text-xl w-12 h-12 p-3 text-white" />
                                    </div>
                                </div>

                            </div>
                            {/* ---------- */}
                            <div className="">
                                <div className="flex gap-3 border p-5 rounded bg-gray-100">
                                    {/* 1 */}
                                    <div className="space-y-6">
                                        <p className="text-gray-500"><span className="text-[#052c65] font-bold">SKU: </span>{SKU}</p>
                                        <p className="text-gray-500"><span className="text-[#052c65] font-bold">Category: </span> {category}</p>
                                    </div>
                                    {/* 2 */}
                                    <div className="">
                                        <p className="text-gray-500"><span className="text-[#052c65] font-bold">Tags: </span> Design Low</p>
                                        <p className="text-gray-500"><span className="text-[#052c65] font-bold">Format: </span>{format}</p>
                                    </div>
                                    {/* 3*/}
                                    <div className="space-y-6">
                                        <p className="text-gray-500"><span className="text-[#052c65] font-bold">Total Page: </span> {total_page}</p>
                                        <p className="text-gray-500"><span className="text-[#052c65] font-bold">Languages: </span>{language}</p>
                                    </div>
                                    {/* 4 */}
                                    <div className="">
                                        <p className="text-gray-500"><span className="text-[#052c65] font-bold">Publish Years: </span> {publish_years}</p>
                                        <p className="text-gray-500"><span className="text-[#052c65] font-bold">Century: </span>{century}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tabs */}
            <TabsDetails />

        </Container >
    );
};

export default AddToCartDetails;
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
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useAuth from "../../hook/useAuth";
import useAxiosPublic from "../../hook/useAxiosPublic";



const AddToCartDetails = () => {
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const [count, setCount] = useState(true)
    const [tabIndex, setTabIndex] = useState(0);
    const { _id, book_image, book_name, previous_price, running_price, author_img, author_name, rating, customer_review, review_date_time, description, long_description, SKU, category, format, total_page, language, publish_years, century } = useLoaderData()


    // ----------------
    const handleComment = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const text = form.text.value;
        console.log(name, email, text);
        const userInfo = {
            name,
            email,
            text
        }
        axiosPublic.post('/comment', userInfo)
            .then(res => {
                console.log(res.data);
            })

    }

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
            <div className="mt-10">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Description</Tab>
                        <Tab>Additional Information</Tab>
                        <Tab>Reviews(2)</Tab>
                    </TabList>
                    <TabPanel>
                        <div>
                            <p>{description}</p>
                            <p>{long_description}</p>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <table className="table">

                                <tbody>
                                    <tr>
                                        <td className="font-semibold">Availability</td>
                                        <td className="text-gray-600">Available</td>
                                    </tr>
                                    <tr>
                                        <td className="font-semibold">Category</td>
                                        <td className="text-gray-600" >{category}</td>
                                    </tr>
                                    <tr>
                                        <td className="font-semibold">Publish Date</td>
                                        <td className="text-gray-600">{publish_years}</td>
                                    </tr>
                                    <tr>
                                        <td className="font-semibold">Total Page</td>
                                        <td className="text-gray-600">{total_page}</td>
                                    </tr>
                                    <tr>
                                        <td className="font-semibold">Format</td>
                                        <td className="text-gray-600">{format}</td>
                                    </tr>
                                    <tr>
                                        <td className="font-semibold">Country</td>
                                        <td className="text-gray-600">{century}</td>
                                    </tr>
                                    <tr>
                                        <td className="font-semibold">Language</td>
                                        <td className="text-gray-600">{language}</td>
                                    </tr>
                                    <tr>
                                        <td className="font-semibold">Dimension</td>
                                        <td className="text-gray-600">30 × 32 × 46 Inches</td>
                                    </tr>
                                    <tr>
                                        <td className="font-semibold">Weight</td>
                                        <td className="text-gray-600">2.5 Pounds</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="flex gap-5 items-center">
                            <img src={author_img} className=" w-24 h-24 rounded-full" alt="" />
                            <div className="">
                                <h1 className="text-xl font-semibold">{author_name}</h1>
                                <p className="text-gray-600">{review_date_time}</p>
                                <p className="text-gray-600">{description}</p>
                            </div>
                            <Rating
                                style={{ maxWidth: 80 }}
                                value={rating}
                                readOnly
                            />
                        </div>
                        {/* your comment */}
                        <div>
                            <form onSubmit={handleComment} className="card-body">
                                <h1 className="font-bold">Your Rating*</h1>
                                <div className="md:flex gap-3">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Your Name</span>
                                        </label>
                                        <input name="name" type="Text" placeholder="Your Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Your Email</span>
                                        </label>
                                        <input name="email" type="email" placeholder="password" className="input input-bordered" required />
                                    </div>
                                </div>

                                <textarea
                                    name="text"
                                    className="textarea textarea-bordered h-[150px] mt-3" placeholder="Write Message"

                                ></textarea>
                                <div className="form-control mt-6">
                                    <input
                                        className="
                            relative h-10  origin-top transform rounded-lg border-2 border-[#007aff] bg-[#052c65] text-xl text-sky-500 before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-sky-500"
                                        type="submit"
                                        value="Submit Now" />
                                </div>
                            </form>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>

        </Container >
    );
};

export default AddToCartDetails;
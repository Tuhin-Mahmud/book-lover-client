import { useLoaderData, useNavigate } from "react-router-dom";
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
import toast from "react-hot-toast";
import useComment from "../../hook/useComment";
import GetCurrentDateTime from "../../component/utils/GetCurrentDateTime";
import userImg from '../../assets/images/logo/user.jpg'
import Swal from "sweetalert2";
import useCarts from "../../hook/useCarts";




const AddToCartDetails = () => {
    const [comment, refetch, isLoading] = useComment()
    // const [carts, refetch] = useCarts()
    const navigate = useNavigate()
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const [count, setCount] = useState(0)
    const [tabIndex, setTabIndex] = useState(0);
    const { _id, book_image, book_name, previous_price, running_price, author_img, author_name, rating, customer_review, review_date_time, description, long_description, SKU, category, format, total_page, language, publish_years, century } = useLoaderData()


    // ------------
    const localTime = GetCurrentDateTime()


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
            text,
            userImage: user?.photoURL,
            rating,
            description,
            review_date_time,
            localTime
        }
        axiosPublic.post('/comment', userInfo)
            .then(res => {
                console.log(res.data);
                refetch()
                document.getElementById('myForm').reset()
                if (res.data.insertedId) {
                    toast.success('Thanks For Your Feedback')

                }
            })
    }

    // add to cart
    const handleAddToCart = () => {
        if (user?.email) {
            const cartItem = {
                email: user?.email,
                bookName: book_name,
                cartId: _id,
                bookImg: book_image,
                price: running_price,

            }
            axiosPublic.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${book_name} add to the cart and saved`,
                            showConfirmButton: false,
                            timer: 2500
                        });

                    }
                })
        }
        else {
            Swal.fire({
                title: "Please Login?",
                text: "After login than add to the cart this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login !"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                    // Swal.fire({
                    //     title: "Deleted!",
                    //     text: "Your file has been deleted.",
                    //     icon: "success"
                    // });
                }
            });
        }


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
                                <div className="flex border gap-5 w- mb-2 px-8 rounded-2xl  ">
                                    <button onClick={() => setCount(count - 1)} className="text-3xl text-center">-</button>
                                    <h1 className="text-2xl">{count}</h1>
                                    <button onClick={() => setCount(count + 1)} className="text-3xl">+</button>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <Modal />
                                    {/* add to cart */}
                                    <button onClick={() => handleAddToCart(_id)} className="btn
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
                        <Tab >Description</Tab>
                        <Tab>Additional Information</Tab>
                        <Tab>Reviews({comment.length})</Tab>
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
                    <TabPanel style={{ padding: '20px' }}>
                        {/* static */}
                        <div className="flex items-center justify-between">
                            <div className="flex gap-5">
                                <img src={author_img} className=" w-20 h-20 rounded-full" alt="" />
                                <div className="">
                                    <h1 className="text-xl font-semibold">{author_name}</h1>
                                    <p className="text-gray-600 text-sm">{review_date_time}</p>
                                    <p className="text-gray-600">{description}</p>
                                </div>
                            </div>
                            <div>
                                <Rating
                                    style={{ maxWidth: 80 }}
                                    value={rating}
                                    readOnly
                                />
                            </div>
                        </div>
                        {/* dynamic comment set */}

                        {/* <p>{dateTimeObject}</p> */}
                        <div className="space-y-4 mt-3">
                            {
                                comment.map(com => (
                                    <div key={com._id} >
                                        <div className="flex items-center justify-between ">
                                            <div>
                                                <div className="flex items-center gap-4">
                                                    <img src={com.userImage ? com.userImage : userImg} className=" w-20 h-20 rounded-full" alt="" />
                                                    <div className="">
                                                        <h1 className="text-xl font-semibold">{com.name}</h1>
                                                        <p className="text-sm  text-gray-600">{com.localTime}</p>
                                                        <p className="text-gray-600">{com.text} </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Rating
                                                    style={{ maxWidth: 80 }}
                                                    value={rating}
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        {/* your comment */}
                        <div>
                            <form id="myForm" onSubmit={handleComment} className="card-body">
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
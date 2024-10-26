import Container from "../../component/common/Container";
import 'react-toastify/dist/ReactToastify.css';
import { FaPhoneVolume } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { toast } from "react-toastify";


const LiveChat = () => {

    const handleFormSubmit = e => {
        e.preventDefault()
        toast.success('Thanks for connect us')
    }



    return (
        <Container>
            <h2 className="text-xl md:text-5xl font-bold text-center font-serif text-[#052c65]  mb-3 ">Contact Us</h2>
            <div>
                {/* live chat */}
                <div className="grid md:grid-cols-6 gap-5">
                    <div className=" md:col-span-2">
                        <div className='pt-16 bg-[#052c65] text-white space-y-10 py-16 px-10 mx-auto '>
                            {/* 1 */}
                            <div className='flex items-center gap-3'>
                                <FaPhoneVolume className='text-5xl border border-dashed p-2 rounded-full' />
                                <div>
                                    <p className='md:text-lg'>Call Us 7/24</p>
                                    <h2 className='md:text-xl font-bold'>+208-555-0112</h2>
                                </div>
                            </div>

                            {/* 2 */}
                            <div className='flex items-center gap-3 space-y-6 md:space-y-0'>
                                <MdOutlineAttachEmail className=' text-5xl border border-dashed p-2 rounded-full' />
                                <div>
                                    <p className='md:text-lg'>Make a Quote</p>
                                    <h2 className='md:text-xl font-bold'>popular.library@gmail.com</h2>
                                </div>
                            </div>
                            {/* 3 */}
                            <div className='flex items-center gap-3'>
                                <IoMdTime className='text-5xl border border-dashed p-2 rounded-full' />
                                <div>
                                    <p className='md:text-lg'>Opening Hour</p>
                                    <h2 className='md:text-xl font-bold'>Sunday - Fri: 9 aM - 6 pM</h2>
                                </div>
                            </div>
                            {/* 4 */}
                            <div className='flex items-center gap-3 space-y-6 md:space-y-0'>
                                <IoLocationOutline className='text-5xl border border-dashed p-2 rounded-full' />
                                <div>
                                    <p className='md:text-lg'>Location</p>
                                    <h2 className='md:text-xl font-bold'> Dhaka, Uttara</h2>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="md:col-span-4 ">
                        <div>
                            <div className="text-center">
                                <h1 className="text-[#052c65] text-xl md:text-3xl font-bold font-serif">Ready To Get Started?</h1>
                                <p className="text-gray-500">Our Popular Library offers a wide range of books and resources for all ages.</p>
                            </div>
                            <form onSubmit={handleFormSubmit} className="card-body">
                                <div className="md:flex gap-5">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Your Name*</span>
                                        </label>
                                        <input
                                            name="name"
                                            type="text"
                                            placeholder="Your Name"
                                            className="input input-bordered " required />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Your Email*</span>
                                        </label>
                                        <input
                                            name="email"
                                            type="email" placeholder="Your Email" className="input input-bordered " required />

                                    </div>
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Write Message*</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered w-full h-[150px]" placeholder="Write Message"></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <input
                                        className="hover:bg-gray-200 btn bg-[#052c65] hover:text-black text-white"
                                        type="submit"
                                        value="Send Message" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* --------- */}
            </div>
        </Container>
    );
};

export default LiveChat;
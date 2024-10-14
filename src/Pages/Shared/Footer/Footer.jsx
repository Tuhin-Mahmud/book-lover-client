import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaPhoneVolume } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import navLogo from '../../../assets/images/logo/navLogo.jpg'




const Footer = () => {
    const handleSubsCribe = e => {
        e.preventDefault()
        toast('thanks for subsCribe our news later')
    }
    return (

        <div className='bg-[#052c65] text-white  '>
            <div className='pt-16 md:flex items-center mx-auto  justify-around'>
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
            <div className="divider divider-primary"></div>

            {/* -----main footer------ */}
            <div className=' '>
                <div className=" md:flex items-center justify-evenly  text-lg  py-8 ">
                    <div className='flex justify-around md:justify-evenly w-full '>
                        <nav className='hidden lg:block'>
                            <div className='flex items-center gap-2'>
                                <img className='w-12 h-12 rounded-full ' src={navLogo} alt="" />
                                <p className='text-xl font-bold'>Popular Library</p>
                            </div>
                            <p className='mt-2'>Welcome to the Library Corner, <br /> where knowledge meets curiosity.</p>

                        </nav>
                        <nav className='flex flex-col'>
                            <h6 className="footer-title">Customer Support</h6>
                            <a className="link link-hover">Store List</a>
                            <a className="link link-hover">Opening Hours</a>
                            <a className="link link-hover">Contact Us</a>
                            <a className="link link-hover">Return Policy</a>
                        </nav>
                        <nav className='flex flex-col'>
                            <h6 className="footer-title">Categories</h6>
                            <a className="link link-hover">History</a>
                            <a className="link link-hover">Novel</a>
                            <a className="link link-hover">Drama</a>
                            <a className="link link-hover">Thriller</a>
                        </nav>
                    </div>
                    <div className=' flex justify-center mt-5'>

                        <form onSubmit={handleSubsCribe}>
                            <h6 className="footer-title">Newsletter</h6>
                            <p>Sign up to searing <br /> weekly newsletter to get the latest updates.</p>
                            <fieldset className="form-control w-80">
                                <label className="label">
                                    <span className="label-text text-white">Enter your email address</span>
                                </label>
                                <div className="join">
                                    <input type="text" placeholder=" Email" className="input input-bordered join-item w-1/2" />

                                    <input type="submit" className="btn btn-primary join-item" value="SubsCribe " />
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
                {/* bottom footer */}


                <div className=" py-5 text-center bg-[#007aff]  dark:text-white">
                    <p>&copy; All Copyright 2024 by Popular library</p>
                </div>
            </div>
        </div >

    );
};

export default Footer;
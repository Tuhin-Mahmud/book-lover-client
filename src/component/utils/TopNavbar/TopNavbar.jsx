
import { MdOutlineMail, MdOutlinePhoneForwarded } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../../../hook/useAuth";


const TopNavbar = () => {
    const [header, setHeader] = useState(false)
    const { user, logOut } = useAuth()

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .then(error => {
                console.log(error);
            })
        console.log('click');
    }


    const scrollHeader = () => {
        if (window.scrollY >= 20) {
            setHeader(true)
        }
        else {
            setHeader(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHeader)
        // Clean up event listener on component unmount
        // return () => {
        //     window.removeEventListener('scroll', scrollHeader);
        // };
    }, [])

    return (
        <div className={header ? "fixed w-[100%]" : ""}>
            <div className="hidden lg:block">
                <div className=" flex  justify-around items-center bg-[#052c65] text-white py-4">
                    <div className="flex items-center gap-4">
                        <div className="flex gap-3 items-center"><MdOutlinePhoneForwarded />
                            +0081537847
                        </div>
                        |
                        <div className="flex gap-2 items-center ">
                            <MdOutlineMail />
                            popular.library@gmail.com

                        </div>
                        |
                        <div className="flex gap-2 items-center">
                            <IoMdTime />
                            Sunday - Fri: 9 aM - 6 pM
                        </div>
                    </div>
                    {/* ------------- */}
                    <div className="flex items-center gap-4 cursor-pointer">
                        <div className="flex gap-2 items-center">
                            <IoChatbubblesSharp />
                            Live Chat
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaRegUser />
                            {user ?
                                <button onClick={handleLogout}>Logout</button>
                                :
                                <Link to={'/login'}>Login</Link>
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNavbar;
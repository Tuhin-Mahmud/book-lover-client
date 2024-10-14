import { Link, NavLink } from 'react-router-dom';
import navLogo from '../../../assets/images/logo/nav-with-logo.jpg.jpg'
import useAuth from '../../../hook/useAuth';
import nav from '../../../assets/images/logo/user.jpg'
import { useEffect, useState } from 'react';
import './Header.css';
import useCarts from '../../../hook/useCarts';
import { FaCartShopping } from "react-icons/fa6";


const Navbar = () => {
    const { user, logOut } = useAuth()
    const [carts] = useCarts()

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error);
            })
    }

    const navItem = <div className='md:flex items-center text-xl  '>
        <li>
            <NavLink to='/' className={({ isActive }) => isActive ? 'underline text-red-400 ' : 'hover:text-blue-400'} > Home</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) => isActive ? 'underline text-red-400 ' : 'hover:text-blue-400'} to='/addBook'>Add Book</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) => isActive ? 'underline text-red-400 ' : 'hover:text-blue-400'} to='/allBook'>All Books</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) => isActive ? 'underline text-red-400 ' : 'hover:text-blue-400'} to='/borrowedBook'>Borrowed Books</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) => isActive ? 'underline text-red-400 ' : 'hover:text-blue-400'} to='/about'>About</NavLink>
        </li>
        {
            user?.email ? <button className='' onClick={handleLogOut} > LogOut</button> :
                <li><NavLink className={({ isActive }) => isActive ? 'underline text-blue-400 ' : 'hover:text-blue-400'} to='/logIn'>Login</NavLink></li>
        }

    </div>

    const [header, setHeader] = useState(false)

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

        <div className={header ? ' fixed w-[100%] z-10 bg-white duration-700 transition' : 'bg-white '}>
            <div className="navbar h-24    shadow-lg border-b-2 border-[#052c65] rounded-xl ">
                {/* navbar */}
                <div className=' w-full px-4'>
                    <div className="navbar-start ">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navItem}
                            </ul>
                        </div>
                        <Link className=' hidden lg:block mb-3' to="/">
                            <div className='flex items-center'>
                                <img className='w-[35px] h-[30px] rounded-full' src={navLogo} alt="" />
                                <h1 className=" ml-3 font-medium uppercase  text-xl">Popular <span className='text-red-500 '>Library</span></h1>
                            </div>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex ">
                        <ul className="menu menu-horizontal px-1">
                            {navItem}
                        </ul>
                    </div>
                    {/* carts data */}
                    <Link to={'/carts'}>
                        <button className='mt-3'>
                            <div className="relative w-fit">

                                <FaCartShopping className='text-2xl' />
                                <span className="absolute -right-1 -top-4 flex size-5 items-center justify-center rounded-full bg-red-500 text-center text-[10px] text-white">{carts.length}</span>
                            </div>
                        </button>
                    </Link>
                    <div className="navbar-end  flex ">
                        <div className="dropdown dropdown-end">

                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border-2 border-red-300 ">
                                <div className="w-10 rounded-full">
                                    <img className='w-12 h-12' src={user?.photoURL ? user?.photoURL : nav} alt="" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 space-y-4">
                                <span className='text-center text-sm justify-center'>
                                    {user?.displayName}

                                </span>

                                <p className='text-sm'>
                                    {user?.email}
                                </p>


                                {user?.email ? <button className='btn btn-sm' onClick={handleLogOut} > Log Out</button> :
                                    <li><NavLink className='btn btn-sm' to='/logIn'>LogIn</NavLink></li>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                {/* end navbar */}
            </div>
        </div>


    );
};

export default Navbar;
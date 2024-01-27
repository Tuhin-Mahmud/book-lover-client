import { Link, NavLink } from 'react-router-dom';
import navLogo from '../../../assets/images/logo/nav-with-logo.jpg.jpg'
import useAuth from '../../../hook/useAuth';


const Navbar = () => {
    const { user, logOut } = useAuth()

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error);
            })
    }

    const navItem = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/addBook'>Add Book</NavLink></li>
        <li><NavLink to='/allBook'>All Books</NavLink></li>
        <li><NavLink to='/borrowedBook'>Borrowed Books</NavLink></li>
        {user?.email ? <button onClick={handleLogOut} > Log Out</button> :
            <li><NavLink to='/logIn'>LogIn</NavLink></li>
        }

    </>

    return (
        <div>
            <div className="navbar border-2 rounded-xl p-3 mt-5 mb-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <Link className='flex items-center' to="/">
                        <img className='w-[65px] h-[50px] rounded-full' src={navLogo} alt="" />
                        <a className=" ml-3 font-medium text-2xl">Book <span className='text-red-500'>Lovers</span></a>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-outline btn-error">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
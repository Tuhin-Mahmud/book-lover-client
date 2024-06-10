import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import useAuth from '../../hook/useAuth';
import { FaGoogle } from "react-icons/fa";
import toast from 'react-hot-toast';


const LogIn = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { signIn, googleLogin } = useAuth()

    const from = location.state?.from?.pathname || '/'


    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        const toastId = toast.loading('loggedIn...')

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('login Successfully', { id: toastId })
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message, { id: toastId })
            })

    }

    const handleGoogle = () => {
        googleLogin()
            .then((result) => {
                console.log(result.user);
                navigate(from, { replace: true })

            })
            .catch(err => console.log(err))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src={login} alt="" />
                </div>

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mr-8">
                    <h1 className="text-5xl text-center mt-9 font-bold">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required name='password' />

                        </div>
                        <div className="form-control mt-6">
                            {/* <button className="btn btn-primary">Login</button> */}
                            <input type="submit" value="LogIn" className='btn btn-error' />
                        </div>
                    </form>
                    <div className="divider">Or Social login</div>
                    <button onClick={handleGoogle} className='btn text-xl'><FaGoogle className='text-2xl text-green-500' /> Google</button>
                    <p className=' mb-5 font-medium text-center'>New this Site <Link to="/register" className='text-orange-500 font-bold text-xl'>Register</Link></p>
                </div>
            </div>

        </div>
    );
};

export default LogIn;
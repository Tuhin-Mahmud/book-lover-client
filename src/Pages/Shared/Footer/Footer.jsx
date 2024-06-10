import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
    const handleSubsCribe = e => {
        e.preventDefault()
        toast('thanks for subsCribe our news later')
    }
    return (

        <footer className="footer p-10 bg-base-200 text-base-content">
            <div className='flex justify-around md:justify-evenly w-full gap-10'>
                <nav className='flex flex-col'>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className='flex flex-col'>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
            </div>
            <div className='flex gap-10 w-full md:justify-evenly justify-around '>
                <nav className='flex flex-col'>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form onSubmit={handleSubsCribe}>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input type="text" placeholder="Please Type your Email" className="input input-bordered join-item w-1/2" />

                            <input type="submit" className="btn btn-primary join-item" value="SubsCribe " />
                        </div>
                    </fieldset>
                </form>
            </div>
        </footer>

    );
};

export default Footer;
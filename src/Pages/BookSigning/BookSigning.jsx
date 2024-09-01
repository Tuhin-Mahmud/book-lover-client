import { Link } from "react-router-dom";
import Container from "../../component/common/Container";
import { toast } from "react-toastify";

const BookSigning = () => {
    const handleRegister = () => {
        toast.success('Register Successfully done.')
    }

    return (
        <Container>
            <div className="bg-red-100 h-[550px] md:h-[400px] p-5 rounded">
                <h2 className="text-6xl font-serif text-center mb-5">Book Signing</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center items-center">
                    <div className="border space-y-4 ">
                        <h2 className="text-5xl font-thin">When</h2>
                        <p className="font-mono text-xl">8 AM - 6 PM  :  Mon - Sat</p>
                    </div>
                    <div className="border space-y-10">
                        <h2 className="text-5xl font-thin">Next Event</h2>
                        <div className="divider">or</div>
                        <button onClick={handleRegister}>
                            <Link to={'/'} className="border border-sky-300 text-lg font-mono px-5 py-2 rounded hover:bg-sky-400 duration-500 ">Register Now</Link>
                        </button>
                    </div>
                    <div className="border space-y-4 ">
                        <h2 className="text-5xl font-thin">Where</h2>
                        <p className="font-mono ">Bookstore, CA 59246, Dhaka Uttara <br /> 4231, Bangladesh</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default BookSigning;
import { toast } from "react-toastify";
import Container from "../../component/common/Container";
import { useState } from "react";

const ContactUs = () => {
    const [inputValue, setInputValue] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
        console.log('click');

        if (inputValue) {
            toast.success('Thank You for our connect.')
            setInputValue('')
        }
    }
    return (
        <Container>
            <div className="bg-gray-50  p-6">
                <h2 className=" text-center text-lg md:text-3xl font-serif">For any communication requests, <br /> please contact our dealer</h2>
                <div className="flex flex-col lg:flex-row items-center md:justify-between px-20 py-10">
                    <div className=" text-lg text-gray-500">
                        <h4>
                            <p><b>Phone: </b>+844 123 456 78 / +844 123 456 79</p>
                        </h4>
                        <h4>
                            <p><b>Mail: </b>Contact@yoursite.com</p>
                        </h4>
                    </div>

                    <div className="md:text-center  ">
                        <h4 className="">
                            <p className="text-lg text-gray-500">
                                <b>BookStore:  </b>Bookstore, CA 59246, Dhaka Uttara <br /> 4231, Bangladesh
                            </p>
                        </h4>
                    </div>
                </div>
                {/* --- */}
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="relative text-sm md:w-1/2 mx-auto">
                            <input
                                className="peer/email block w-full rounded-md border border-blue-400 bg-inherit p-2.5 shadow-lg outline-none"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                name="email"
                                type="email"
                                placeholder=""
                                id="navigate_ui_email_33"
                                required
                            />
                            <label
                                className="absolute -top-2 left-2 rounded-md bg-blue-300 px-2 text-xs text-blue-600 duration-300 peer-placeholder-shown/email:top-3 peer-placeholder-shown/email:bg-transparent peer-placeholder-shown/email:text-sm peer-placeholder-shown/email:text-zinc-400 peer-focus/email:-top-2 peer-focus/email:bg-blue-300 peer-focus/email:text-xs peer-focus/email:text-blue-600"
                                htmlFor="navigate_ui_email_33"
                            >
                                Email
                            </label>

                        </div>
                        <div className="mx-auto mt-5 flex justify-center">
                            <input className="bg-sky-300 w-40 rounded  border px-8 py-2    " type="submit" value="Submit" />
                        </div>
                    </form>
                </div>

            </div>
        </Container>
    );
};

export default ContactUs;
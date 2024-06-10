
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Container from "../../../component/common/Container";
import HeaderText from "../../../component/common/HeaderText";

const ReadDetails = () => {
    const bookDetails = useLoaderData()
    console.log(bookDetails);

    const { _id, image, category, name, author_name, quantity, description, rating } = bookDetails;

    return (
        <Container>
            <HeaderText Heading={'Book Read more'} subHeading={'This Book information '} />
            <div className="grid grid-cols-6 gap-4">
                <div className="col-span-4">
                    <div className=" p-5 bg-slate-50   rounded-xl">
                        <div className="">
                            <img className="w-full h-[900px] rounded-xl " src={image} alt="" />
                        </div>
                        <div className="mt-5 text-gray-500 ">
                            <h1 className="text-5xl font-bold mb-5 text-center">{name}</h1>
                            <h5>
                                <p>{description}</p>
                                <p>In the vast expanse of human experience, amidst the tapestry of emotions, adventures, and discoveries, lies the essence of our stories. From the quiet corners of introspection to the thunderous clash of epic battles, literature serves as a beacon, guiding us through the labyrinth of existence. Through the written word, we traverse distant lands, inhabit the minds of countless characters, and unlock the secrets of the universe. Each page turned is a journey embarked upon, a doorway opened to new worlds and possibilities. Within these bound volumes, we find solace, inspiration, and the timeless wisdom of generations past. For in the pages of books, we discover not only the stories of others but also the echoes of our own souls.</p>
                            </h5>
                            <div className=" mt-3 ">
                                <button className="btn btn-primary tex-lg">
                                    <FaFacebook className="text-2xl text-white"></FaFacebook>
                                    Share on Facebook
                                </button>
                                <button className="btn btn-secondary mx-3 text-lg">
                                    <FaTwitter className="text-2xl text-white"></FaTwitter>
                                    Share on Twitter
                                </button>
                                <button className="btn btn-accent text-lg">
                                    <FaLinkedin className="text-2xl text-white"></FaLinkedin>
                                    Share on Linkedin
                                </button>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <div className="col-span-2">


                </div>

            </div>
        </Container>
    );
};

export default ReadDetails;
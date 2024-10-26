import Container from "../../component/common/Container";
import HeaderText from "../../component/common/HeaderText";
import animationImg from '../../assets/images/Animation - 1718107566435.json'
import Lottie from "lottie-react";
import { useState } from "react";

const About = () => {
    const [fold, setFold] = useState(true)


    return (
        <Container>
            <HeaderText Heading={'About Our Library'} subHeading={'This is Public Library'}></HeaderText>
            <div className="flex flex-col md:flex-row gap-10 p-5">
                <div className="flex-1 space-y-3">
                    <h1 className="text-2xl font-medium md:text-3xl text-sky-500 font-serif"> Well Come to Our Popular Library</h1>
                    <p><b>At Public Library Services :</b> we believe in the power of knowledge, the joy of reading, and the importance of community. Our mission is to provide a welcoming space
                        where individuals of all ages can explore, learn, and grow.
                        <br />

                    </p>
                    <p> <b>Public Library Role :</b> is more than just a place to borrow books; it&apos;s a cornerstone of our community. We strive to foster a love for reading and lifelong learning, support educational endeavors, and provide a gathering place for cultural and social activities. Our friendly and knowledgeable staff are always here to assist with your needs, whether it&apos;s finding the perfect book, helping with research, or guiding you through our digital resources.
                        Come visit popular Library and discover all that we have to offer. Whether you are a lifelong reader, a student, a researcher, or someone looking for a new hobby, you&apos;ll find a home here. Let&apos;s explore the world of books and knowledge together!</p>
                    <p><b>Our Collection</b> We pride ourselves on offering an extensive and diverse collection of materials. Our shelves are stocked with thousands of books across every genre imaginable, from gripping thrillers and heartwarming romances to profound non-fiction and enlightening self-help. Our collection also includes a robust selection of e-books and audiobooks, accessible from the comfort of your home.</p>
                    <p><b>How a Library Management System Works:  </b>

                        In a library system like Koha, librarians can perform various tasks such as adding new books to the catalogue, updating existing records, checking items in and out, and managing user accounts. Library users can search for materials using the OPAC, place holds on items, and view their borrowing history.

                        The system helps librarians keep track of the library’s collection, monitor circulation activities, and provide better services to patrons. By automating routine tasks and centralizing library operations, a library system like Koha improves efficiency and enhances the overall user experience.
                    </p>
                    <br />
                    <b className="">A library is a collection of books, and possibly other materials and media, that is accessible for use by its members and members of allied institutions. Libraries provide physical (hard copies) or...
                        {
                            fold ? (
                                <>
                                    <span onClick={() => setFold(!fold)} className="text-blue-500 cursor-pointer">Read more Please...</span>
                                </>
                            )
                                :
                                (
                                    <>
                                        <p>
                                            digital (soft copies) materials, and may be a physical location, a virtual space, or both.
                                        </p>
                                        <span onClick={() => setFold(!fold)}
                                            className="text-blue-500 cursor-pointer" >Read Lease</span>
                                    </>
                                )
                        }
                    </b>
                </div>

                <div className="flex-1">
                    <div className="">
                        <Lottie animationData={animationImg} loop={true} autoPlay={true}  ></Lottie>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default About;
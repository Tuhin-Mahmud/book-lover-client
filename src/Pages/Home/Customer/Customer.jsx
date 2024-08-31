import Container from "../../../component/common/Container";
import HeaderText from "../../../component/common/HeaderText";
import customerImg from '../../../assets/images/bookDetails/book3.jpg'
import customerImg2 from '../../../assets/images/bookDetails/book4.jpg'
import { useState } from "react";

const Customer = () => {
    const [fold, setFold] = useState(true)
    return (
        <Container>
            <HeaderText Heading={'Customer Reviews'} subHeading={'Our Customer Says'} />


            <div className="flex flex-col md:flex-row gap-10 bg-gradient-to-r from-gray-200 to-red-200 rounded-lg py-24 px-16">
                <div className="flex items-center pr-14">
                    <div className="">
                        <h1 className="text-xl font-medium"> Do you have any specific testimonials or feedback <br /> you&apos;d like to include</h1>
                        <p>Popular has been a fantastic resource for me and my family. The selection of books is impressive, ranging from the latest bestsellers to classic literature. The staff is always friendly and eager to help with any questions or recommendations. The online catalog is user-friendly, making it easy to reserve books and check their availability. I also appreciate the various events and programs they offer, which have been both educational and entertaining for my kids. Highly recommend!</p>
                    </div>
                </div>
                {/* card content */}
                <div className="relative">
                    {/* review1 */}
                    <div className="relative bg-white p-6 opacity-40 rounded-lg  space-y-2 md:w-[500px]">
                        <img className=" border-4 h-12 border-white absolute -left-4 -top-4 w-12  rounded-full" src={customerImg2} alt="" />

                        <p>The Silent Patient is a must-read, and I&apos;m so glad I found it on <b>Poplar Library</b>. The storytelling is impeccable, with a gripping narrative that keeps you hooked till the very end.!</p>
                        <h2 className="text-2xl">Jane Smith</h2>
                        <p>Web developer</p>
                    </div>
                    {/* review2 */}
                    <div className="absolute top-32 -left-10 md:-left-20  md:w-[500px] z-40 bg-white p-6 rounded-lg  space-y-2">
                        <img className=" border-4 h-12 border-white absolute -left-4 -top-4 w-12  rounded-full" src={customerImg} alt="" />

                        <p>I recently read The Silent Patient from <b>popular Library</b>, and it was absolutely captivating! The plot twists kept me on the edge of my seat, and I could&apos;nt put it down...
                            {
                                fold ? (
                                    <>

                                        <span onClick={() => setFold(
                                            !fold)} className="text-blue-600 cursor-pointer font-medium text-lg">Read more....</span>
                                    </>
                                )
                                    :
                                    (
                                        <>
                                            <p> The psychological depth of the characters, especially Alicia, was fascinating. The way the story unfolded was both thrilling and unexpected. I highly recommend this book to anyone who enjoys psychological thrillers. Thanks to Popular Library for making it so easy to find and access such a great read!</p>
                                            <span onClick={() => setFold(
                                                !fold)} className="text-blue-600 cursor-pointer font-medium text-lg">Read lease..</span>
                                        </>
                                    )
                            }

                        </p>
                        <h2 className="text-2xl">Jane Smith</h2>
                        <p>Web developer</p>
                    </div>
                    {/* review3 */}
                    <div className="relative opacity-40 top-7 bg-white p-6 rounded-lg  space-y-2 md:w-[500px]">
                        <img className=" border-4 h-12 border-white absolute -left-4 -top-4 w-12  rounded-full" src={customerImg} alt="" />

                        <p>I recently read The Silent Patient from <b>popular Library</b>, and it was absolutely captivating! The plot twists kept me on the edge of my seat, and I could&apos;nt put it down.  !</p>
                        <h2 className="text-2xl">Emily Johnson</h2>
                        <p>Frond-end Developer</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Customer;
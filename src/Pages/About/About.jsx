import Container from "../../component/common/Container";
import HeaderText from "../../component/common/HeaderText";
import animationImg from '../../assets/images/Animation - 1718107566435.json'
import Lottie from "lottie-react";

const About = () => {
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
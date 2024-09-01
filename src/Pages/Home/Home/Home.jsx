import BookSigning from "../../BookSigning/BookSigning";
import ContactUs from "../../ContactUs/ContactUs";
import Authors from "../Authors/Authors";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";
import Customer from "../Customer/Customer";
import Faq from "../Faq";
import Purchase from "../Purchase/Purchase";


const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Books />
            <Purchase />
            <BookSigning />
            <Faq></Faq>
            <ContactUs />
            <Authors />
            <Customer></Customer>
        </div>
    );
};

export default Home;
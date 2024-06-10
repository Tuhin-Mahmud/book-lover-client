import Authors from "../Authors/Authors";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";
import Faq from "../Faq";
import Purchase from "../Purchase/Purchase";


const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Books />
            <Purchase />
            <Faq></Faq>
            <Authors />

        </div>
    );
};

export default Home;
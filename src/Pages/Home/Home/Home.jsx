import Authors from "../Authors/Authors";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";
import Purchase from "../Purchase/Purchase";


const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Books />
            <Purchase />
            <Authors />

        </div>
    );
};

export default Home;
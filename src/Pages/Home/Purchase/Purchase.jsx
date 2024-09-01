import Marquee from "react-fast-marquee";
import Container from "../../../component/common/Container";

const Purchase = () => {
    return (
        <Container>
            <div>
                <div className="bg-red-300 mt-8 rounded  h-[200px] w-full flex items-center ">
                    <Marquee>
                        <h1 className="text-5xl ml-5">Get 30% Purchase <span className="text-white">On Order Over $ 299.00</span></h1>
                    </Marquee>
                </div>
            </div>
        </Container>
    );
};

export default Purchase;
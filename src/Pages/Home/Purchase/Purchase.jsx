import Marquee from "react-fast-marquee";

const Purchase = () => {
    return (
        <div>
            <div className="bg-red-400 mt-8 rounded  h-[200px] w-full flex items-center ">
                <Marquee>
                    <h1 className="text-5xl ml-5">Get 30% Purchase <span className="text-white">On Order Over $ 299.00</span></h1>
                </Marquee>
            </div>
        </div>
    );
};

export default Purchase;
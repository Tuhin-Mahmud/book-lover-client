/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const HeaderImage = ({ image, text }) => {
    return (
        <div>
            <img src={image} className="w-full h-[180px] object-cover md:h-[308px]  rounded" alt="" />
            <p className="text-center  -mt-28 uppercase text-white text-3xl ml-10">{text}</p>
            <div className="text-center   capitalize text-white text-xl ml-10">
                <Link className=" " to={'/'}>{'Home >'} Book Details</Link>
            </div>
        </div>
    );
};

export default HeaderImage;
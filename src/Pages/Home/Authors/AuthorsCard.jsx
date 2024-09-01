import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

/* eslint-disable react/prop-types */
const AuthorsCard = ({ author }) => {
    const { image, author_name } = author;
    return (


        <div className="group relative  bg-base-100 border-2 mt-5">
            <img className="w-full object-cover  rounded-xl h-[350px] p-4" src={image} />
            <div
                className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-red-400 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                <h1 className="text-2xl text-white">{author_name}</h1>
                <div className="mt-5">
                    <button className="btn mr-3 text-2xl"><AiOutlineTwitter /></button>
                    <button className="btn text-2xl"><AiFillInstagram /></button>
                </div>
            </div>
        </div>

    );
};

export default AuthorsCard;
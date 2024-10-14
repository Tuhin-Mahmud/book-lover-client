// import useTopBooks from "../../../hook/useTopBooks";


const Modal = () => {
    // const [topBooks] = useTopBooks()
    // console.log(topBooks);
    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            < button className="btn relative h-10  origin-top transform rounded-lg border-2 border-[#052c65] md:text-xl text-[#052c65] before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-sky-500" onClick={() => document.getElementById('my_modal_3').showModal()}> Read A Little</button >
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box ">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-lg btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">The Role Of Book</h3>
                    <p className="py-4">Books play a vital role in society by serving as carriers of knowledge, culture, and ideas. They are a medium for education, allowing individuals to learn about various subjects, develop new skills, and gain insights into complex topics. Books promote literacy, critical thinking, and intellectual growth, enabling readers to expand their horizons and explore different perspectives.</p>
                    <p className="py-4">Beyond education, books have a significant cultural and emotional impact. They preserve history, traditions, and stories, acting as a bridge between generations. Through fiction, books stimulate imagination and creativity, providing an escape into other worlds and experiences. They also foster empathy by allowing readers to see the world through the eyes of different characters and cultures.</p>
                    <p className="py-4">Books inspire change by challenging established ideas and encouraging readers to reflect on societal issues. They can motivate, comfort, and empower, offering guidance and support during difficult times. In essence, books are not just a source of information; they are a means of connection, inspiration, and growth, making them an indispensable part of human life.</p>
                </div>
            </dialog>
        </div>
    );
};



export default Modal;

import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Container from "../../../component/common/Container";
import HeaderText from "../../../component/common/HeaderText";

const ReadDetails = () => {
    const bookDetails = useLoaderData()
    console.log(bookDetails);

    const { image, category, name, author_name, quantity, description, rating } = bookDetails;

    const listArray = [`${category}`, `${author_name}`, `${description}`];
    return (
        <Container>
            <HeaderText Heading={'Book Read more'} subHeading={'This Book information '} />
            <div className="">
                <div className="grid md:grid-cols-6 gap-4 ">
                    <div className="md:col-span-4">
                        <div className=" p-5 bg-slate-50   rounded-xl">
                            <div className="">
                                <img className="w-full h-[900px] rounded-xl " src={image} alt="" />
                            </div>
                            <div className="mt-5 text-gray-500 ">
                                <h1 className="text-5xl font-bold mb-5 text-center">{name}</h1>
                                <h5>
                                    <p>{description}</p>
                                    <p>In the vast expanse of human experience, amidst the tapestry of emotions, adventures, and discoveries, lies the essence of our stories. From the quiet corners of introspection to the thunderous clash of epic battles, literature serves as a beacon, guiding us through the labyrinth of existence. Through the written word, we traverse distant lands, inhabit the minds of countless characters, and unlock the secrets of the universe. Each page turned is a journey embarked upon, a doorway opened to new worlds and possibilities. Within these bound volumes, we find solace, inspiration, and the timeless wisdom of generations past. For in the pages of books, we discover not only the stories of others but also the echoes of our own souls.</p>
                                </h5>
                                <div className=" mt-3 ">
                                    <button className="btn btn-primary md:tex-lg">
                                        <FaFacebook className="md:text-2xl text-white"></FaFacebook>
                                        Share on Facebook
                                    </button>
                                    <button className="btn btn-secondary mx-3 md:text-lg">
                                        <FaTwitter className="md:text-2xl text-white"></FaTwitter>
                                        Share on Twitter
                                    </button>
                                    <button className="btn mt-3 md:mt-0 btn-accent md:text-lg">
                                        <FaLinkedin className="md:text-2xl text-white"></FaLinkedin>
                                        Share on Linkedin
                                    </button>
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>

                    {/* sidebar */}
                    <div className="md:col-span-2 p-2">

                        <div className="relative space-y-8 bg-white p-8 shadow-[0px_0px_30px_2px_rgba(100,100,111,0.1)] dark:bg-[#18181B] w-full border rounded-xl">
                            {/* top part  */}
                            <div>
                                <img width={60} height={60} className="h-[60px] w-[60px] rounded-full border bg-slate-100 object-cover p-2 duration-300 hover:scale-105" src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL2pvYjk2OC1lbGVtZW50LTAxMi14LmpwZw.jpg" alt="card navigate ui" />
                                {/* Price Ribbon SVG  */}
                                <div className="absolute -right-[20px] -top-4 ">
                                    <div className="relative h-full w-full">
                                        {/* svg  */}
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="120" height="120" x="0" y="0" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve"><defs><linearGradient id="skyGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style={{ stopColor: '#0095FF', stopOpacity: 1 }} /><stop offset="100%" style={{ stopColor: '#87CEFA', stopOpacity: 1 }} /></linearGradient></defs><g><path d="M384 0H149.333c-41.237 0-74.667 33.429-74.667 74.667v426.667a10.668 10.668 0 0 0 6.592 9.856c1.291.538 2.676.813 4.075.811a10.663 10.663 0 0 0 7.552-3.115l120.448-120.619C260.48 434.795 325.44 499.2 332.416 507.136c3.261 4.906 9.882 6.24 14.788 2.979a10.67 10.67 0 0 0 3.964-4.835 6.53 6.53 0 0 0 .832-3.947v-448c0-17.673 14.327-32 32-32 5.891 0 10.667-4.776 10.667-10.667S389.891 0 384 0z" style={{ fill: 'url(#skyGradient)' }} /><path d="M394.667 0c23.564 0 42.667 19.103 42.667 42.667v32c0 5.891-4.776 10.667-10.667 10.667H352V42.667C352 19.103 371.103 0 394.667 0z" style={{ fill: '#1976d2' }} /></g></svg>
                                        {/* Price  */}
                                        <div className="absolute left-7 top-8 flex flex-col text-xl font-semibold text-white"><span><sub className="text-sm font-normal">$</sub><span>99</span></span><span className="text-xs font-normal">/month</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <p className="capitalize text-gray-500 dark:text-sky-100">most popular Book</p>
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-[#139DFE]">{name}</h3>
                                <ul className="space-y-3">
                                    {listArray?.map((each, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm font-semibold text-sky-900 dark:text-[#4BB3FF]">
                                            <svg className="fill-[#0386FF] dark:fill-[#289DFF]" width={20} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="navigateui" strokeLinecap="round" strokeLinejoin="round"></g><g id="navigateui"><g id="tick"><g id="tick_2"><path id="navigateui" fillRule="evenodd" clipRule="evenodd" d="M43.8679 21.6919C44.6935 28.8058 41.6741 35.704 36.0728 39.952C35.6328 40.2857 35.0055 40.1995 34.6718 39.7595C34.338 39.3194 34.4242 38.6921 34.8643 38.3584C39.9074 34.5338 42.6244 28.3263 41.8812 21.9225C41.671 20.1113 41.1986 18.3944 40.5065 16.8051L26.1673 31.1443C25.5822 31.7294 24.7948 32.0363 23.9994 32.0271C23.1815 32.0363 22.3941 31.7294 21.809 31.1443L14.359 23.6943C13.9685 23.3038 13.9685 22.6706 14.359 22.2801C14.7496 21.8896 15.3827 21.8896 15.7733 22.2801L23.2233 29.7301C23.4197 29.9265 23.6865 30.0305 23.9994 30.0273C24.2898 30.0305 24.5566 29.9265 24.753 29.7301L39.5542 14.9289C36.0589 8.94407 29.2496 5.2706 21.924 6.12251C12.0492 7.27066 4.97548 16.2058 6.12186 26.0817C7.06163 34.1648 13.2925 40.5543 21.232 41.7937C21.4211 41.8262 21.7587 41.8766 22.187 41.9273C22.5257 41.9674 22.8658 42.0003 23.1985 42.0236C23.7495 42.0623 24.1647 42.5402 24.1261 43.0912C24.0875 43.6421 23.6095 44.0574 23.0586 44.0187C22.6921 43.993 22.3207 43.9571 21.9519 43.9134C21.4857 43.8582 21.1145 43.8028 20.9083 43.7672C12.1017 42.3926 5.17946 35.2942 4.13522 26.3125C2.86149 15.3394 10.7211 5.4116 21.693 4.13589C29.6475 3.21084 37.0542 7.08801 41.0117 13.4715L42.279 12.2041C42.6696 11.8136 43.3027 11.8136 43.6933 12.2041C44.0838 12.5946 44.0838 13.2278 43.6933 13.6183L42.0149 15.2967C42.9621 17.2572 43.6027 19.4071 43.8679 21.6919Z"></path></g></g></g></svg>{each}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex justify-center pt-4">
                                    <button className="h-16 w-full rounded-full border-2 border-sky-300 font-black text-sky-800 duration-300 dark:text-[#6CC2FB]">Purchases</button>
                                </div>

                            </div>

                        </div>
                        {/* ---------------- */}
                        <div className="w-full mt-5 border rounded-2xl bg-white p-6 shadow-lg dark:bg-[#18181B] md:p-8">
                            <div className="flex flex-col items-center justify-center space-y-6">
                                <svg width={75} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"> <g strokeWidth="0"></g> <g id="navgateui" strokeLinecap="round" strokeLinejoin="round"></g> <g id="navgateui"><path fill="#16BAC5" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"></path></g></svg>
                                <h6 className="text-center font-medium text-slate-700 dark:text-white/80">Popular library , this library is so much spacing for you </h6>
                                <p className="">The Reading Nook is a cozy and inviting space designed for book lovers and scholars alike. Nestled in the quiet East Wing of the library, this 500 sq. ft. room offers a tranquil environment perfect for reading, studying, or quiet contemplation. With 20 comfortable seats, individual desks, and plenty of power outlets, visitors can easily settle in for extended periods of focus. The room is equipped with high-speed Wi-Fi, ensuring seamless access to online resources. Soft ambient lighting and a serene atmosphere make it an ideal retreat from the bustling areas of the library. Whether you&apos;re delving into a novel or conducting research, the Reading Nook provides the perfect setting</p>
                                <button className="rounded-full bg-[#16BAC5] px-6 py-2 text-white ">Redeem now</button>
                                <button className="text-slate-500 hover:underline dark:text-white/60">Redeem later</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </Container>
    );
};

export default ReadDetails;
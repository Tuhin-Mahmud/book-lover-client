import Container from "../../component/common/Container";
import HeaderText from "../../component/common/HeaderText";
import faqImg from '../../assets/images/bookDetails/book1.jpg'

const Faq = () => {
    return (
        <Container>
            <HeaderText Heading={'Frequently Asked Questions'} subHeading={'Here are  frequently asked '}></HeaderText>
            <div className="md:flex gap-5 ">
                <div className="flex-1">
                    <img src={faqImg} className="w-full h-[350px] rounded object-cover" alt="faq image" />
                </div>
                <div className="flex-1">
                    <div className="join join-vertical w-full">
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title text-xl font-medium">
                                How can I borrow a book from the library?
                            </div>
                            <div className="collapse-content">
                                <p> To borrow a book from the library, simply browse our catalog to find the book you want. Once you have selected a book, click the Borrow button and fill in the necessary details. If the book is available, you will receive a confirmation email with the due date and instructions for pick-up. Please make sure to bring a valid ID when collecting your book.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                What is the borrowing period for library books?
                            </div>
                            <div className="collapse-content">
                                <p> The standard borrowing period for library books is 30 days. You can check the due date on your account or on the confirmation email you received when you borrowed the book. If you need more time, you can request a renewal online or at the library, provided no other users have reserved the book.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                Can I reserve a book that is currently checked out?
                            </div>
                            <div className="collapse-content">
                                <p>  Yes, you can place a hold on a book that is currently checked out. Once the book is returned, you will be notified, and it will be held for you for 3 days.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                What should I do if the book I want is already borrowed?
                            </div>
                            <div className="collapse-content">
                                <p>if the book you want is already borrowed, you can place a reservation on it. Go to the book is page in our catalog and click the Reserve button. You will be notified via email as soon as the book is returned and available for you to borrow. In the meantime, you might find similar books in our recommended section or consult with our library staff for alternatives.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Faq;
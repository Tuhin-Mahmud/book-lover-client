import AllBookCart from "./AllBookCart";
import useCateBooks from "../../hook/useCateBooks";
import Container from "../../component/common/Container";
import HeaderText from "../../component/common/HeaderText";

const AllBooks = () => {
    const [categoriesBook] = useCateBooks()


    return (
        <Container>
            <div>
                <HeaderText Heading={'All Books Here'} subHeading={'All Books Here'}></HeaderText>
                <h1 className="text-xl pl-6 font-serif text-gray-400"> Total Books: {categoriesBook.length}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        categoriesBook.map(book => <AllBookCart
                            key={book._id}
                            book={book}
                        ></AllBookCart>)
                    }
                </div>
            </div>
        </Container>
    );
};

export default AllBooks;
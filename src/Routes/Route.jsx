import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import AddBook from "../Pages/AddBook/AddBook";
import AllBooks from "../Pages/AllBooks/AllBooks";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import BookCategory from "../Pages/Home/Books/BookCategory";
import BookDetails from "../Pages/Home/Books/BookDetails";
import PrivetRout from "./PrivetRout";
import ReadDetails from "../Pages/Home/Books/ReadDetails";
import UpdateBook from "../Pages/AllBooks/UpdateBook";
import About from "../Pages/About/About";



const router = createBrowserRouter([

    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },

            {
                path: '/addBook',
                element: <AddBook></AddBook>,

            },

            {
                path: '/bookCategories/:category',
                element: <BookCategory></BookCategory>,


            },
            {
                path: '/categoryBookDetails/:id',
                element: <PrivetRout><BookDetails></BookDetails></PrivetRout>,
                loader: ({ params }) => fetch(`http://localhost:5000/books/${params.id}`)
            },
            {
                path: '/readDetails/:id',
                element: <ReadDetails></ReadDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/books/${params.id}`)

            },

            {
                path: '/allBook',
                element: <PrivetRout><AllBooks /></PrivetRout>
            },
            {
                path: 'updateAllBook/:id',
                element: <PrivetRout><UpdateBook></UpdateBook></PrivetRout>,
                loader: ({ params }) => fetch(`http://localhost:5000/books/${params.id}`)

            },
            {
                path: '/borrowedBook',
                element: <PrivetRout><BorrowedBooks /></PrivetRout>,

            },
            {
                path: '/about',
                element: <About />,

            },
        ]
    },
    {
        path: '/login',
        element: <LogIn />
    },
    {
        path: '/register',
        element: <Register />
    }
])

export default router;
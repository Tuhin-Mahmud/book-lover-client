import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import AddBook from "../Pages/AddBook/AddBook";
import AllBooks from "../Pages/AllBooks/AllBooks";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";

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
                path: '/addBook/:id',
                element: <AddBook></AddBook>,
                loader: ({ params }) => fetch(`http://localhost:5000/books/read/${params.id}`)
            },
            {
                path: '/allBook',
                element: <AllBooks />
            },
            {
                path: '/borrowedBook',
                element: <BorrowedBooks />
            }
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
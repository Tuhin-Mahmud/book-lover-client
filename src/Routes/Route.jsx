import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import AddBook from "../Pages/AddBook/AddBook";
import AllBooks from "../Pages/AllBooks/AllBooks";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import LogIn from "../Pages/LogIn/LogIn";

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
                element: <AddBook />
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
    }
])

export default router;
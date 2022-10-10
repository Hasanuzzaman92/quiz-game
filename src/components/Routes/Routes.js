import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Main from "../Layouts/Main";
import Quiz from "../Quiz/Quiz ";
import Statistics from "../Statistics/Statistics";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/quiz',
                element: <Quiz />
            },
            {
                path: '/statistics',
                element: <Statistics />
            },
            {
                path: '/Blog',
                element: <Blog />
            }
        ]
    }
])



export default router;
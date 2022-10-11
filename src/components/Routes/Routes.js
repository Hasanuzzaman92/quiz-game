import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Main from "../Layouts/Main";
import QuizDetails from "../QuizDetails/QuizDetails";
import Quizs from "../Quizs/Quizs ";
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
                path: '/quizs',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Quizs />
            },
            {
                path: '/quiz/:id',
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
                element: <QuizDetails />
            },
            {
                path: '/statistics',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
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
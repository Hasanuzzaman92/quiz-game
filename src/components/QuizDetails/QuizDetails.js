
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

const QuizDetails = () => {
    const loaderData = useLoaderData();
    const quizData = loaderData.data;
    const quizDetails = quizData.questions
    console.log(quizDetails);
    return (
        <div>
            <h3 className='bg-sky-300 p-4 w-[90%] mx-auto text-center text-2xl font-semibold'>Quiz of <span className='text-yellow-500 uppercase font-bold '>{quizData.name}</span></h3>
            <div className='w-[80%] mx-auto border-2 p-4 bg-sky-100'>
                {
                    quizDetails.map(quizDetail => <QuizQuestion key={quizDetail.id} quizDetail={quizDetail}></QuizQuestion>)
                }

            </div>
        </div>
    );
};

export default QuizDetails;
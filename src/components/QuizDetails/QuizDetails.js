
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizDetails = () => {
    const quizData = useLoaderData();
    console.log(quizData);
    return (
        <div>
            This is quiz details page
        </div>
    );
};

export default QuizDetails;
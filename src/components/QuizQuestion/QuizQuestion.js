import React, { useState } from 'react';
import QuizOption from '../QuizOption/QuizOption';




const QuizQuestion = ({quizDetail}) => {
    const {id, options, question, correctAnswer} = quizDetail;

    const handleShowAnswer = (id) =>{
        alert(` Correct Answer is :--- ${correctAnswer}`)
    }

    console.log(quizDetail)
    return (
        <div className='border-2 p-4 my-7 bg-white '>
            <div className='flex justify-between items-center  bg-slate-200  p-4 mb-4'> 
                <h3 className='text-xl font-semibold bg-slate-200 '>{question}</h3>
                <svg onClick={() => handleShowAnswer(id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </div>

            <ul className='grid md:grid-cols-1 lg:grid-cols-2 gap-4'>
                {
                    options.map((option, index) => <QuizOption key={index} option ={option} correctAnswer={correctAnswer}></QuizOption>)
                }
            </ul>
        </div>
    );
};

export default QuizQuestion;
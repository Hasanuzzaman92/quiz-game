import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingelQuiz from '../SingelQuiz/SingelQuiz';

const Quizs  = () => {
    
    const loaderData = useLoaderData();
    const topics = loaderData.data;
    return (
        <div>
            <h1 className='text-center text-blue-500 text-4xl font-semibold mt-12'>Topics of Quiz</h1>
            <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2'>
                    {
                        topics.map(topic => <SingelQuiz key={topic.id} topic={topic} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Quizs ;
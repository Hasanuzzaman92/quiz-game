import React from 'react';
import Lottie from 'lottie-react';
import quizProgram from '../../assest/quizProgram.json';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24'>
        <div className='flex flex-col items-center justify-between lg:flex-row'>
        <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
          <div className='max-w-xl mb-6 lg:mt-8'>
            <div>
              <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-yellow-400'>
                On going!
              </p>
            </div>
            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
             Visit our website <br className='hidden md:block' /> And start {' '}
              <span className='inline-block text-blue-400'>quiz compitition</span>
            </h2>
            <p className='text-base text-gray-700 justify md:text-lg'>
            A quiz is a form of game or mind sport in which players attempt to answer questions correctly about a certain or variety of subjects. Quizzes can be used as a brief assessment in education and similar fields to measure growth in knowledge, abilities, or skills.
            </p>
          </div>
          
          <div className='flex flex-col items-center md:flex-row'>
            <Link
              to='/quiz'
              className='flex items-center justify-center lg:w-full h-12 px-6 mb-3 font-medium text-white transition duration-200 rounded shadow-md md:w-auto md:mb-0 bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none'
            >
              <span className='mr-3'>Start quiz</span>
              
            </Link>
          </div>
        </div>
        <div className='relative lg:w-1/2 '>
          <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
            <Lottie animationData={quizProgram} loop={true} />
          </div>
        </div>
      </div>
    </div>
    );
};

export default Home;
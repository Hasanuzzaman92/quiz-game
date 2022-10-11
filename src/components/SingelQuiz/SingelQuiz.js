import React from 'react';
import { Link } from 'react-router-dom';

const SingelQuiz = ({topic}) => {
    const {id, name, logo, total} = topic;
    return (
        <div>
          <div className=" border transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src={logo ? logo : '../../../public/not-found-imag.jpg'}
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border border-t-0">
            <h2 className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              {name}
            </h2>
            <p className="mb-2 text-gray-700">
              Total quizs : {total}
            </p>
            <Link
            to={`../quiz/${id}`}
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              <span className='btn text-white bg-blue-500 px-3 py-2 rounded-lg hover:bg-blue-700'> Start Quiz</span>
            </Link>
          </div>
        </div>
        </div>
    );
};

export default SingelQuiz;
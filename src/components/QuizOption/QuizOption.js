import React from 'react';

const QuizOption = ({option}) => {
    console.log(option)
    return (
        <div>
            <li className='p-2'><input type="radio" value={option} name='name'/> {option} </li>
        </div>
    );
};

export default QuizOption;
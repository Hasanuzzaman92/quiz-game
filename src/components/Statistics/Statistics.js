import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const loaderData = useLoaderData();
    const totalQuiz = loaderData.data;
    const total =  totalQuiz.map(total => total.total)
    return (
        <div>
            <h3>This is statistics page</h3>
        </div>
    );
};

export default Statistics;
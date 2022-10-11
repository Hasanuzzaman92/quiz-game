import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const loaderData = useLoaderData();
    const totalQuizs = loaderData.data;
    const data =  totalQuizs.map(total => total);
    return (
        <div>
            <h2 className='text-2xl font-semibold text-center text-blue-500 py-8'>Quiz topics and total number of quiz</h2>
            <br/>
            <div className='flex justify-center mt-20 lg:my-5'>
            <LineChart height={400} width={500} data={data}>
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <CartesianGrid strokeDasharray="3 3" />
            </LineChart>
            </div>
        </div>
    );
};

export default Statistics;
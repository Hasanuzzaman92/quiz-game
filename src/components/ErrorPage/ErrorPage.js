import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <div className='flex flex-col min-h-[700px] justify-center items-center'>
                <h1 className='text-4xl'>Ops! An Error Ocurred!</h1>
                <br/>
                    {
                    error && (
                        <div>
                            <p className='text-red-500 text-xl'>{error.status} {error.statusText || error.message}</p>
                        </div>
                    )
                    }
            </div>
        </div>
    );
};

export default ErrorPage;
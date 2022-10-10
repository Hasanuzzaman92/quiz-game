import React from 'react';

const ErrorPage = () => {
    return (
        <div>
            <div className='flex flex-col min-h-[700px] justify-center items-center'>
                <h1 className='text-4xl'>Ops! An Error Ocurred!</h1>
                <br/>
                    {
                    error && (
                        <div>
                            <p className='text-red-500'>{error.status} {error.statusText || error.message}</p>
                        </div>
                    )
                    }
            </div>
        </div>
    );
};

export default ErrorPage;
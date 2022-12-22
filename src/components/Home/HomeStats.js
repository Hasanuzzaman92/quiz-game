import React from 'react';

const HomeStats = () => {
    return (
        <div class="my-20 bg-slate-500 text-white px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="grid gap-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">12.9K</h6>
          <p class="text-sm font-medium tracking-widest text-blue-400 uppercase lg:text-base">
            Subscribers
          </p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">48.3K</h6>
          <p class="text-sm font-medium tracking-widest text-blue-400 uppercase lg:text-base">
            Users
          </p>
        </div>
        <div class="text-center">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">24.5K</h6>
          <p class="text-sm font-medium tracking-widest text-blue-400 uppercase lg:text-base">
            Cookies
          </p>
        </div>
      </div>
    </div>
    );
};

export default HomeStats;
import React from 'react';

const Banner = () => {
    return (
        <div>
            {/* banner section here */}
            <section className="bg-[#1313130D] rounded-2xl lg:my-14  text-gray-800">
                <div className="container flex flex-col  justify-center lg:p-32 mx-auto p-8 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center space-y-12 p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Books to freshen up your bookshelf</h1>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a rel="noopener noreferrer" href="#" className="px-7 py-5 text-lg font-bold  text-white  bg-[#23BE0A] rounded-lg">View the list</a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="https://i.ibb.co/YkZQkZ8/banner-image-of-book-1.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;
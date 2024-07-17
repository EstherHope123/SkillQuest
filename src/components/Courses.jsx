import React from 'react';

const Courses = () => {
    return (
        <section id="courses" className="mt-27 h-screen bg-gray-50  w-full flex flex-col items-center font-poppins ">
            <div className=" w-full px-4 mt-[100px]">
                <h4 className="text-black text-xl mb-8 text-center">Popular courses</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-11">
                    <div className="p-8 bg-white rounded-lg shadow-lg transform transition-transform hover:translate-y-5 duration-700">
                        <img src="/images/Pi () Day Poster - Custom Posters - Design Your Own Wall Art - Create Personalized Prints.jpeg" alt="Math" className="h-24 w-32 mx-auto mb-6" />
                        <h4 className="text-2xl font-semibold text-center">Math <span className="block text-gray-500">Sciences</span></h4>
                        <p className="text-center text-lg">2 courses</p>
                    </div>
                    <div className="p-8 bg-white rounded-lg shadow-lg transform transition-transform hover:translate-y-5 duration-700">
                        <img src="/images/Technology - concept business logo template vector image on VectorStock.jpeg" alt="Computer Science" className="h-28 w-36 mx-auto mb-6" />
                        <h5 className="text-2xl font-semibold text-center">Computer <span className="block text-gray-500">Science</span></h5>
                        <p className="text-center text-lg">5 courses</p>
                    </div>
                    <div className="p-8 bg-white rounded-lg shadow-lg transform transition-transform hover:translate-y-5 duration-700">
                        <img src="/images/Finance Logo Template.jpeg" alt="Business Management" className="h-24 w-32 mx-auto mb-6" />
                        <h6 className="text-2xl font-semibold text-center">Business <br /><span className="block text-gray-500">Management</span></h6>
                        <p className="text-center text-lg">3 courses</p>
                    </div>
                    <div className="p-8 bg-white rounded-lg shadow-lg transform transition-transform hover:translate-y-5 duration-700">
                        <img src="/images/Download Dynamic Atom Molecule Science Symbol vector icon for free.jpeg" alt="Engineering Architecture" className="h-24 w-32 mx-auto mb-6" />
                        <h6 className="text-2xl font-semibold text-center">Engineering<br /><span className="block text-gray-500">Architecture</span></h6>
                        <p className="text-center text-lg">4 courses</p>
                    </div>
                </div>
                <div className=" hidden lg:flex lg:justify-center lg:mt-12">
                    <button className="bg-blue-900 text-white py-3 px-6 rounded-md hover:bg-blue-700 flex items-center">
                        Browse all categories
                        <i className="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Courses;

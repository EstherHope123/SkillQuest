import React from 'react';

const About = () => {
    return (
      <section id="about" className="mt-24 h-screen bg-gray-800 lg:rounded-tl-[30%] lg:rounded-tr-[50%] md:rounded-none grid lg:grid-cols-2 gap-6">
        <div className="absolute left-[20%] lg:absolute lg:top-[98%] lg:left-[50%] text-white p-8">
          <div className="mb-8">
            <p className="text-lg font-semibold">GET TO KNOW US</p>
            <h3 className="text-3xl font-bold">
              Grow your skills learn <br />
              <span className="text-4xl text-blue-300">with us anywhere</span>
            </h3>
            <p className="max-w-lg mt-4">
              SkillQuest offers a wide range of courses to help
              you enhance your skills and knowledge. And no matter
              where you go, you can access our program.
              Join us to learn, grow, succeed!
            </p>
          </div>
          <ul className="list-disc list-inside mb-8">
            <li className="mb-2">Expert teachers</li>
            <li className="mb-2">Online Learning</li>
            <li className="mb-2">Lifetime access</li>
            <li className="mb-2">Great results</li>
          </ul>
          <img
            src="/images/about image.jpeg"
            alt="About Us"
            className="hidden lg:block rounded-lg lg:mb-8 lg:w-[500px] lg:h-[600] lg:absolute lg:right-[80vh] lg:bottom-[10vh]"
          />
          <button className="px-6 py-3 bg-blue-800 text-white rounded-md hover:bg-blue-700">
            Discover more
          </button>
        </div>
      </section>
  
    );
};

export default About;

import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
 

const Home = () => {
  const navigate = useNavigate();

  const handleCourseClick = (e) => {
    e.preventDefault();
    navigate('/register');
  };
  return (
    <div>
      <section id="home">
        <div className='max-w-[500px] md:mt-[130px] md:ml-[180px] text-1xl p-4 mt-[100px] ml-[80px]'>
          <div>
            <h2 className='font-bold text-2xl mb-4'>Best Learning Education platform in the world</h2>
            <p className='mb-4'>
              Unlock your full learning potential with our intuitive education platform.
              Seamlessly blending technology and education,
              we provide an immersive learning environment that combines interactive lessons,
              virtual classrooms, and intelligent feedback.
            </p>
          </div>
          <div className='lg:absolute top-[5%] left-[60%] bottom-[10%] lg:grid grid-cols-2 lg:place-content-center sm:hidden md:hidden'>
            <img src="/images/image 1.png" alt="Educational platform" className='mb-4 translate-y-20 rounded-lg' width={250} height={220} />
            <img src="/images/image 2.png" alt="Educational platform" className='mb-4 translate-y--50 rounded-lg' width={250} height={220} />
          </div>

          <form>
            <input
              type="text"
              placeholder='What do you want to learn'
              className='border p-4 mb-2 shadow-custom-xy'
            />
            <input
              type="submit"
              value='Search course'
              onClick={handleCourseClick}
              className='bg-blue-900 text-white p-4 cursor-pointer shadow-custom-xy hover:bg-blue-700'
            />
          </form>
        </div>
      </section>

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

      <section id="courses" className="mt-27 h-screen bg-gray-50 w-full flex flex-col items-center font-poppins">
        <div className="w-full px-4 mt-[100px]">
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
          <div className="hidden lg:flex lg:justify-center lg:mt-12">
            <button className="bg-blue-900 text-white py-3 px-6 rounded-md hover:bg-blue-700 flex items-center" onClick={handleCourseClick}>
              Browse all categories
              <i className="fa-solid fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-black text-white py-14">
        <div className="container mx-auto flex flex-wrap justify-center space-y-8 md:space-y-0 md:space-x-8">

          <div className="w-full md:w-1/4 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-3xl font-bold">Skill <span className="text-teal-500">Quest</span></h1>
            <p className="mt-2">Get best online courses from us</p>
            <div className="flex mt-4 space-x-4">
              <FaTwitter className="text-2xl" />
              <FaFacebook className="text-2xl" />
              <FaInstagram className="text-2xl" />
            </div>
          </div>

          <div className="w-full md:w-1/4">
            <h2 className="text-2xl font-semibold">Links</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>

          <div className="w-full md:w-1/4">
            <h3 className="text-2xl font-semibold">Contacts</h3>
            <ul className="mt-4 space-y-2">
              <li><FaPhone className="inline-block mr-2 text-teal-500" /> +250 789654321</li>
              <li><FaEnvelope className="inline-block mr-2 text-teal-500" /> Skillquest@gmail.com</li>
              <li><FaMapMarkerAlt className="inline-block mr-2 text-teal-500" /> KK270st Kigali Rwanda</li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 text-center md:text-left">
            <h4 className="text-xl font-semibold">WWW.SkillQuest.com</h4>
            <p className="mt-2">© Copyright 2022 by SkillQuest.com</p>
          </div>
        </div>
      </section> 
 
   </div>
   );
  }

export default Home;

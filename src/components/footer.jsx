import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <section id="contacts" className="bg-black  text-white py-14 ">
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
            <li>Home</li>
            <li>About</li>
            <li>Community</li>
            <li>Courses</li>
            <li>Blog</li>
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
  );
}

export default Footer;

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bg from "../assets/bg.png";
import bg1 from "../assets/bg1.png";
import sch from "../assets/sch.png";
import dm from "../assets/dm.jpg";
import sch2 from "../assets/sch2.jpg";
import { LoremIpsum } from 'lorem-ipsum';
import AOS from 'aos';
import 'aos/dist/aos.css';  // AOS styles
import { BookOpenIcon, UsersIcon, TrophyIcon, BeakerIcon } from 'lucide-react';
import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon, MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react';

const lorem = new LoremIpsum();

const Home = () => {
  const navigate = useNavigate();
  const loremText = lorem.generateParagraphs(1);

  useEffect(() => {
    AOS.init({
      duration: 1000,  // Customize the duration of the animation
      easing: 'ease-in-out',  // Customize the easing
      once: true,  // Make animations run only once
    });

    // Re-initialize AOS on page load (important if navigating via React Router)
    window.addEventListener('load', () => AOS.refresh());
  }, []);

  const handleLoginClick = () => {
    navigate('/choose-user'); // Simulates the navigation to 'choose-user' page
  };

  return (
    <>
      <nav className="flex items-center justify-between bg-white shadow-md p-4">
        <img src={dm} alt="Logo" className="h-12" />
        <div className="flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-600">About Us</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Products</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Contact Us</a>
        </div>
        <div className="flex space-x-4">
          <button onClick={handleLoginClick} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Sign In</button>
          <button onClick={handleLoginClick} className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-green-500">Guest Mode</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full bg-blue-700 text-white">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/60 z-10"></div>
          <img
            src={sch2} // Use the correct image source
            alt="Students in classroom"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-4xl font-bold mb-4" data-aos="fade-right"> 
                  Student Management System
                </h1>
                <p className="text-lg md:text-xl mb-8">
                  Providing a nurturing environment where students develop the
                  knowledge, skills, and character to achieve their potential.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium">
                    Learn More
                  </button>
                  <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium">
                    Schedule a Visit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Why Choose Excellence School
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We're committed to providing a comprehensive education that prepares
              students for success in college and beyond.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                data-aos="fade-up" // Apply animation on scroll
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-6">
        <div
          className="md:w-1/2 text-center md:text-left space-y-4"
          data-aos="fade-up" // Animation effect when scrolling
        >
          <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
          <p className="text-gray-600">At Excellence School, we believe in empowering education through technology. Our Student Management System (SMS) is designed to streamline student records, academic tracking, and communication for a seamless learning experience. Whether you're a student, teacher, or parent, our system ensures efficient management of all educational activities.</p>
        </div>
        <img
          src={sch}
          alt="pupils"
          className="md:w-1/2 rounded-lg shadow-md"
          data-aos="fade-left" // Animation effect when scrolling
        />
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold mb-4 flex items-center">
                <div className="bg-blue-700 text-white p-1 mr-2 rounded-md text-sm">
                  ES
                </div>
                Excellence School
              </div>
              <p className="text-gray-300 mb-4">
                Providing quality education and fostering a community of lifelong
                learners since 1985.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <FacebookIcon size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <TwitterIcon size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <InstagramIcon size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <YoutubeIcon size={20} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Academics
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Admissions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Student Life
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    News & Events
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Parent Portal
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Student Portal
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Library
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Career Opportunities
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Alumni
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <MapPinIcon className="mr-2" />
                  123 Education Lane, City, Country
                </li>
                <li className="flex items-center text-gray-300">
                  <PhoneIcon className="mr-2" />
                  +1 234 567 890
                </li>
                <li className="flex items-center text-gray-300">
                  <MailIcon className="mr-2" />
                  info@excellenceschool.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

// Feature data
const features = [
  {
    icon: <BookOpenIcon size={48} className="text-blue-500" />,
    title: 'Curriculum Excellence',
    description: 'Our curriculum is designed to meet international standards, ensuring a comprehensive education for every student.',
  },
  {
    icon: <UsersIcon size={48} className="text-blue-500" />,
    title: 'Experienced Staff',
    description: 'Our teachers are highly qualified and dedicated to providing the best education to our students.',
  },
  {
    icon: <TrophyIcon size={48} className="text-blue-500" />,
    title: 'Awards & Recognition',
    description: 'We have received numerous awards for excellence in teaching, student achievements, and overall school performance.',
  },
  {
    icon: <BeakerIcon size={48} className="text-blue-500" />,
    title: 'State-of-the-Art Facilities',
    description: 'Our modern facilities include advanced labs, sports grounds, and interactive classrooms to enhance the learning experience.',
  },
];

export default Home;

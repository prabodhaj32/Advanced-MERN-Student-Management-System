import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bg from "../assets/bg.png";
import bg1 from "../assets/bg1.png";
import sch from "../assets/sch.png";
import dm from "../assets/dm.jpg";
import sch2 from "../assets/sch2.jpg";
import { LoremIpsum } from 'lorem-ipsum';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BookOpenIcon, UsersIcon, TrophyIcon, BeakerIcon } from 'lucide-react';
import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon, MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react';

const lorem = new LoremIpsum();

const Modal = ({ isOpen, onClose, title, children, actions }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 transition-opacity duration-300">
            <div 
                className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-2xl w-full transform transition-all duration-500"
                data-aos="zoom-in"
                data-aos-duration="800"
            >
                {title && (
                    <div className="px-8 py-6 border-b bg-gradient-to-r from-blue-50 to-white">
                        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                    </div>
                )}
                <div className="p-8">
                    {children}
                </div>
                {actions && actions.length > 0 && (
                    <div className="px-8 py-4 bg-gray-50 text-right border-t">
                        {actions.map((action, index) => (
                            <button
                                key={index}
                                className={`${action.primary
                                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800'
                                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                                    } font-semibold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-4 transition-all duration-300 transform hover:scale-105`}
                                onClick={action.onClick}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                {action.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const Home = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: 'ease-in-out-back',
            once: false,
            mirror: true,
            offset: 100,
        });

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLoginClick = () => navigate('/choose-user');

    const openAboutUsModal = () => {
        setModalContent(
            <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900" data-aos="fade-right">About Excellence School</h3>
                <p className="text-gray-700 leading-relaxed" data-aos="fade-up">
                    Excellence School is dedicated to providing a nurturing and challenging educational environment.
                    We believe in fostering a love of learning and empowering students to reach their full potential.
                </p>
                <p className="text-gray-700 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                    Our mission is to empower students with the knowledge, skills, and character necessary to succeed in a
                    rapidly changing world. We strive to create a supportive and inclusive community.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700" data-aos="fade-up" data-aos-delay="200">
                    <li data-aos="fade-right" data-aos-delay="300">Small class sizes for personalized attention</li>
                    <li data-aos="fade-right" data-aos-delay="400">Experienced and dedicated faculty</li>
                    <li data-aos="fade-right" data-aos-delay="500">State-of-the-art facilities and resources</li>
                    <li data-aos="fade-right" data-aos-delay="600">A wide range of extracurricular activities</li>
                    <li data-aos="fade-right" data-aos-delay="700">Focus on holistic development</li>
                </ul>
            </div>
        );
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent('');
    };

    return (
        <div className="min-h-screen bg-gray-50 overflow-hidden">
            {/* Navigation */}
            <nav className={`fixed w-full ${isScrolled ? 'bg-white shadow-xl py-3' : 'bg-white py-4'} backdrop-blur-md transition-all duration-500 z-40 px-6`}>
                <div className="container mx-auto flex items-center justify-between">
                    <img 
                        src={dm} 
                        alt="Logo" 
                        className={`h-14 transform hover:scale-110 transition-transform duration-300 ${isScrolled ? 'h-12' : 'h-14'}`}
                        data-aos="fade-right"
                    />
                    <div className="flex space-x-8 ">
                        {['About Us', 'Products', 'Contact Us'].map((item, idx) => (
                            <button 
                                key={idx}
                                onClick={item === 'About Us' ? openAboutUsModal : undefined}
                                className={`text-gray-700 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 font-medium ${isScrolled ? 'text-sm' : 'text-base'}`}
                                data-aos="fade-down"
                                data-aos-delay={idx * 100}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                    <div className="flex space-x-4">
                        <button 
                            onClick={handleLoginClick} 
                            className={`bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-md ${isScrolled ? 'px-5 py-1.5 text-sm' : 'px-6 py-2'}`}
                            data-aos="fade-left"
                        >
                            Sign In
                        </button>
                        <button 
                            onClick={handleLoginClick} 
                            className={`bg-gradient-to-r from-gray-400 to-gray-500 text-white px-6 py-2 rounded-full hover:from-green-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-md ${isScrolled ? 'px-5 py-1.5 text-sm' : 'px-6 py-2'}`}
                            data-aos="fade-left"
                            data-aos-delay="100"
                        >
                            Guest Mode
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">
                <img 
                    src={sch2} 
                    alt="Classroom" 
                    className="absolute inset-0 w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/60 z-10"></div>
                <div className="relative z-20 container mx-auto px-6 text-white">
                    <h1 
                        className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
                        data-aos="fade-right"
                        data-aos-easing="ease-out-cubic"
                    >
                        Student Management System
                    </h1>
                    <p 
                        className="text-xl md:text-2xl mb-10 max-w-2xl"
                        data-aos="fade-right"
                        data-aos-delay="200"
                        data-aos-easing="ease-out-cubic"
                    >
                        Providing a nurturing environment where students develop the knowledge, skills, and character to achieve their potential.
                    </p>
                    <div className="flex flex-wrap gap-6">
                        <button 
                            className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay="400"
                            data-aos-anchor-placement="top-bottom"
                        >
                            Learn More
                        </button>
                        <button 
                            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                            data-aos="fade-up"
                            data-aos-delay="500"
                            data-aos-anchor-placement="top-bottom"
                        >
                            Schedule a Visit
                        </button>
                    </div>
                </div>
                
                {/* Animated floating elements */}
                <div 
                    className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm"
                    data-aos="fade"
                    data-aos-delay="800"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out"
                    data-aos-anchor-placement="top-bottom"
                ></div>
                <div 
                    className="absolute bottom-1/3 right-1/3 w-24 h-24 rounded-full bg-white/15 backdrop-blur-sm"
                    data-aos="fade"
                    data-aos-delay="1000"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out"
                ></div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 
                            className="text-4xl font-extrabold text-gray-800 mb-6"
                            data-aos="zoom-in"
                            data-aos-easing="ease-out-back"
                        >
                            Why Choose Excellence School
                        </h2>
                        <p 
                            className="text-gray-600 max-w-3xl mx-auto text-lg"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            We're committed to providing a comprehensive education that prepares students for success in college and beyond.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
                                data-aos="flip-up"
                                data-aos-delay={index * 200}
                                data-aos-easing="ease-out-cubic"
                            >
                                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                                    {React.cloneElement(feature.icon, { 
                                        className: "text-blue-500 group-hover:text-blue-600 transition-colors duration-500"
                                    })}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{feature.title}</h3>
                                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section className="py-20 bg-gray-100 overflow-hidden">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
                    <div 
                        className="md:w-1/2 space-y-6"
                        data-aos="fade-right"
                        data-aos-easing="ease-out-cubic"
                    >
                        <h1 className="text-4xl font-extrabold text-gray-900">About Us</h1>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            At Excellence School, we believe in empowering education through technology. Our Student
                            Management System is designed to streamline student records, academic tracking, and
                            communication for a seamless learning experience.
                        </p>
                        <div className="flex gap-4">
                            <button 
                                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
                                onClick={openAboutUsModal}
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                Learn More
                            </button>
                            <button 
                                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                Watch Video
                            </button>
                        </div>
                    </div>
                    <div 
                        className="md:w-1/2 relative"
                        data-aos="fade-left"
                        data-aos-easing="ease-out-cubic"
                    >
                        <img 
                            src={sch} 
                            alt="pupils" 
                            className="rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-500 z-10 relative" 
                        />
                        <div className="absolute -bottom-6 -right-6 w-full h-full bg-blue-500/20 rounded-2xl -z-10"></div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <div 
                                key={index}
                                className="p-8"
                                data-aos="zoom-in"
                                data-aos-delay={index * 150}
                                data-aos-easing="ease-out-back"
                            >
                                <div className="text-5xl font-bold mb-4">{stat.value}</div>
                                <div className="text-xl">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <h2 
                        className="text-4xl font-extrabold text-gray-800 mb-16 text-center"
                        data-aos="fade-up"
                    >
                        What Our Community Says
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div 
                                key={index}
                                className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                                data-aos="fade-up"
                                data-aos-delay={index * 200}
                            >
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 text-2xl font-bold mr-4">
                                        {testimonial.initials}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                                <div className="mt-4 flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <svg 
                                            key={i} 
                                            className={`w-5 h-5 ${i < testimonial.rating ? 'fill-current' : 'fill-none stroke-current'}`} 
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-50 to-gray-50 overflow-hidden">
                <div className="container mx-auto px-6 text-center">
                    <h2 
                        className="text-4xl font-extrabold text-gray-800 mb-6"
                        data-aos="fade-up"
                    >
                        Ready to Join Our Community?
                    </h2>
                    <p 
                        className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Take the first step towards an exceptional educational experience for your child.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <button 
                            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Apply Now
                        </button>
                        <button 
                            className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            Contact Admissions
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div data-aos="fade-up">
                            <div className="text-2xl font-bold mb-6 flex items-center">
                                <div className="bg-blue-700 text-white p-2 mr-3 rounded-lg text-sm">ES</div>
                                Excellence School
                            </div>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Providing quality education and fostering a community of lifelong learners since 1985.
                            </p>
                            <div className="flex space-x-6">
                                {[FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon].map((Icon, idx) => (
                                    <a 
                                        key={idx}
                                        href="#" 
                                        className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-125"
                                        data-aos="zoom-in"
                                        data-aos-delay={idx * 100}
                                    >
                                        <Icon size={28} />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="100">
                            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
                            <ul className="space-y-4">
                                {['About Us', 'Academics', 'Admissions', 'Student Life', 'News & Events'].map((item, idx) => (
                                    <li key={idx} data-aos="fade-right" data-aos-delay={100 + idx * 50}>
                                        <button 
                                            onClick={item === 'About Us' ? openAboutUsModal : undefined}
                                            className="text-gray-300 hover:text-white transition-all duration-300 transform hover:translate-x-2 block"
                                        >
                                            {item}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="200">
                            <h3 className="text-xl font-semibold mb-6">Resources</h3>
                            <ul className="space-y-4">
                                {['Parent Portal', 'Student Portal', 'Library', 'Career Opportunities', 'Alumni'].map((item, idx) => (
                                    <li key={idx} data-aos="fade-right" data-aos-delay={200 + idx * 50}>
                                        <a 
                                            href="#" 
                                            className="text-gray-300 hover:text-white transition-all duration-300 transform hover:translate-x-2 block"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="300">
                            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center text-gray-300" data-aos="fade-right" data-aos-delay="300">
                                    <MapPinIcon className="mr-3" size={24} />
                                    <span className="leading-relaxed">123 Education Lane, City, Country</span>
                                </li>
                                <li className="flex items-center text-gray-300" data-aos="fade-right" data-aos-delay="350">
                                    <PhoneIcon className="mr-3" size={24} />
                                    <span className="leading-relaxed">+1 234 567 890</span>
                                </li>
                                <li className="flex items-center text-gray-300" data-aos="fade-right" data-aos-delay="400">
                                    <MailIcon className="mr-3" size={24} />
                                    <span className="leading-relaxed">info@excellenceschool.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-16 pt-8 text-center text-gray-400" data-aos="fade-up">
                        <p>© {new Date().getFullYear()} Excellence School. All rights reserved.</p>
                    </div>
                </div>
            </footer>

            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title="About Us"
                actions={[
                    { label: 'Close', onClick: closeModal, primary: true },
                ]}
            >
                {modalContent}
            </Modal>
        </div>
    );
};

const features = [
    {
        icon: <BookOpenIcon size={48} />,
        title: 'Curriculum Excellence',
        description: 'Our curriculum is designed to meet international standards, ensuring a comprehensive education for every student.',
    },
    {
        icon: <UsersIcon size={48} />,
        title: 'Experienced Staff',
        description: 'Our teachers are highly qualified and dedicated to providing the best education to our students.',
    },
    {
        icon: <TrophyIcon size={48} />,
        title: 'Awards & Recognition',
        description: 'We have received numerous awards for excellence in teaching, student achievements, and overall school performance.',
    },
    {
        icon: <BeakerIcon size={48} />,
        title: 'State-of-the-Art Facilities',
        description: 'Our modern facilities include advanced labs, sports grounds, and interactive classrooms to enhance the learning experience.',
    },
];

const stats = [
    { value: "100+", label: "Qualified Teachers" },
    { value: "2,500+", label: "Happy Students" },
    { value: "98%", label: "College Acceptance" },
    { value: "35+", label: "Years of Excellence" }
];

const testimonials = [
    {
        initials: "JD",
        name: "John Doe",
        role: "Parent of 10th Grader",
        quote: "The teachers at Excellence School go above and beyond to ensure each student's success. My child has flourished here.",
        rating: 5
    },
    {
        initials: "AS",
        name: "Alice Smith",
        role: "Alumni (Class of 2020)",
        quote: "The education I received prepared me perfectly for university. The support system here is unmatched.",
        rating: 5
    },
    {
        initials: "RB",
        name: "Robert Brown",
        role: "Community Partner",
        quote: "Working with Excellence School has been a pleasure. Their commitment to community engagement is inspiring.",
        rating: 4
    }
];

export default Home;
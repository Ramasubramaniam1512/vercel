import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from 'axios';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";


const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <div className="space-x-6">
          <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">About Me</Link>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">Projects</Link>
          <Link to="experience" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">Experience</Link>
          <Link to="achievements" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">Achievements</Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center bg-gray-800 text-white">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className="text-5xl font-bold">
        Hello, I'm a Cybersecurity Engineer
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="text-xl mt-4">
        Passionate about security and ethical hacking
      </motion.p>
      <Link to="contact" smooth={true} duration={500} className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg cursor-pointer">
        Contact Me
      </Link>
    </section>
  );
};

const AboutMe = () => {
  return (
    <section id="about" className="flex items-center justify-center h-screen px-6 text-center bg-gray-900 text-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.5 }} 
        className="max-w-2xl"
      >
        <h2 className="text-4xl font-bold text-blue-400">About Me</h2>
        <p className="mt-4 text-lg">
          👋 Hey there! I'm <span className="text-blue-300">Ramasubramaniam Gv</span>, a passionate Cybersecurity Professional with a strong background in penetration testing, vulnerability assessment, and network security.
        </p>
        <p className="mt-4 text-lg">
          With a Master’s degree in Cybersecurity, I thrive on securing digital landscapes and uncovering potential security risks before they become real threats. I specialize in web application security, enterprise security, and network security.
        </p>
        <p className="mt-4 text-lg">
          I’ve worked with tools like <span className="text-green-300">Nmap, Burp Suite, DirB, FeroxBuster, John the Ripper, and Hashcat</span>, and I love tackling CTF challenges to sharpen my skills.
        </p>
        <p className="mt-4 text-lg">
          Beyond security, I’m an advocate for continuous learning and knowledge sharing. I’m currently working on a <span className="text-yellow-300">cybersecurity blog</span> to help beginners and professionals stay ahead in the field. 🚀
        </p>
        <p className="mt-4 text-lg">
          My goal? To contribute to organizations by enhancing their security posture while continuously evolving as a cybersecurity expert.
        </p>
        <p className="mt-4 text-lg font-semibold text-purple-400">
          Let’s connect and make the digital world a safer place! 🔐
        </p>
      </motion.div>
    </section>
  );
};


const Projects = () => {
  const [showMore, setShowMore] = useState({ project1: false, project2: false });

  return (
    <section id="projects" className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gray-900 text-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.5 }} 
        className="max-w-3xl space-y-10"
      >
        {/* Project 1: Anomaly Intrusion Detection using CNN */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Anomaly Intrusion Detection using CNN</h2>
          <p>🚀 <strong>Project Overview:</strong></p>
          <p>
            This project develops an Anomaly-Based Intrusion Detection System (IDS) using CNNs to detect cyber threats in IoT networks. The model is trained on the <strong>Bot-IoT 2023 dataset</strong>, which contains real-world IoT-based attack scenarios.
          </p>

          {!showMore.project1 ? (
            <button 
              onClick={() => setShowMore({ ...showMore, project1: true })} 
              className="mt-2 text-blue-500 hover:underline"
            >
              Click me for more information
            </button>
          ) : (
            <div>
              <p>
                By leveraging deep learning, this system enhances cybersecurity defenses by identifying suspicious activities and distinguishing between normal and malicious network behavior.
              </p>
              <ul className="list-disc ml-6">
                <li>Detects abnormal patterns in network traffic.</li>
                <li>Reduces false positives compared to traditional IDS methods.</li>
                <li>Uses CNN architectures to extract complex patterns for high accuracy.</li>
              </ul>
              <button 
                onClick={() => setShowMore({ ...showMore, project1: false })} 
                className="mt-2 text-red-500 hover:underline"
              >
                Show less
              </button>
            </div>
          )}
        </div>

        {/* Project 2: Enhancing Security of Autonomous Vehicles using SHA-256 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Enhancing Security of Autonomous Vehicles using SHA-256</h2>
          <p>🚀 <strong>Project Overview:</strong></p>
          <p>
            This project focuses on securing autonomous vehicles by integrating SHA-256 cryptographic hashing to ensure data integrity and prevent unauthorized access to vehicle control systems.
          </p>

          {!showMore.project2 ? (
            <button 
              onClick={() => setShowMore({ ...showMore, project2: true })} 
              className="mt-2 text-blue-500 hover:underline"
            >
              Click me for more information
            </button>
          ) : (
            <div>
              <p>
                The system enhances vehicle security by preventing unauthorized modifications to firmware and network communications. The project involves:
              </p>
              <ul className="list-disc ml-6">
                <li>Applying SHA-256 hashing to secure communication between vehicle components.</li>
                <li>Ensuring data integrity to prevent cyber threats such as replay attacks.</li>
                <li>Enhancing authentication mechanisms for self-driving car networks.</li>
              </ul>
              <button 
                onClick={() => setShowMore({ ...showMore, project2: false })} 
                className="mt-2 text-red-500 hover:underline"
              >
                Show less
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="flex items-center justify-center h-screen px-6 bg-gray-900 text-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.5 }} 
        className="max-w-5xl w-full grid grid-cols-2 gap-8"
      >
        {/* Left Side - TTK Prestige Experience */}
        <div className="text-left">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold">TTK Prestige (May 2022 - July 2022)</h3>
            <ul className="list-disc ml-6 mt-2">
              <li>Initially was taught about how a company drafts its policies and later was told to draft a policy for a company.</li>
              <li>Learned about the basics of security like CIA, how an attack takes place.</li>
              <li>Collaborated with officials to perform penetration testing on the company’s websites.</li>
              <li>Used tools like Wireshark, Metasploit, and Burp Suite.</li>
            </ul>
          </div>
        </div>

        {/* Right Side - Placeholder for Another Experience */}
        <div className="text-left">
          <h3 className="text-2xl font-semibold">Titan Company (August 2022 - September 2022)</h3>
          <ul className="list-disc ml-6 mt-2">
            <li>Developed a dynamic and responsive web application with the help of colleagues using Vue.js for the frontend and Express.js for the backend. The website provides a seamless user experience with efficient client-server communication.</li>
            <li>For Both HTTP and HTTPS it was useful for the organizations website</li>
          </ul>
        </div>

      </motion.div>
    </section>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="flex items-center justify-center h-screen px-6 text-center bg-gray-900 text-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.5 }} 
        className="max-w-3xl"
      >
        <h2 className="text-3xl font-bold mb-4">Achievements & Certifications</h2>
        <ul className="list-disc text-lg inline-block text-left">
          <li>📜 <strong>Google Cybersecurity Certification</strong> – Coursera [<a href="https://coursera.org/share/92c18f5931db7bb50b52e1ca952c8b77" target="_blank" className="text-blue-400 underline">View Certificate</a>]</li>
          <li>📜 <strong>Cyber Security Workshop</strong> – HKCS Foundations [<a href="https://drive.google.com/drive/folders/1hw6i70-Ex6nVCAfzhUihlsyg0FmWIdrD?usp=sharing" target="_blank" className="text-blue-400 underline">  View Certificate </a>]</li>
          <li>📜 <strong>Ethical Hacking</strong> – INFOQUEST 2020, GCT CSEA</li>
          <li>📜 <strong>10-day Bug Bounty Program</strong> – Prompt InfoTech</li><a href="https://drive.google.com/drive/folders/1hw6i70-Ex6nVCAfzhUihlsyg0FmWIdrD?usp=sharing" target="_blank" className="text-blue-400 underline">  View Certificate </a>
          <li>🏆 <strong>Hands-on Capture the Flag (CTF) Challenges:</strong> Titanic, Underpass [<a href="https://www.linkedin.com/posts/ramasubramaniam-gv-563931213_hackthebox-cybersecurity-ethicalhacking-activity-7280955734811447297-hFRN?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYQmNsBsPhXVFuysDMnqX02a3v1hRNj4rQ"target="_blank" className="text-blue-400 underline">View Certificate</a>], and Linkvortex </li>
          <li>🔍 <strong>Discovered a Bug in</strong> Queen Mary University of London</li>
          <li>🔍 <strong>Discovered a Bug in</strong> The International Journal of Indian Psychology</li>
        </ul>
      </motion.div>
    </section>
  );
};


const Contact = () => {
  return (
    <section id="contact" className="flex flex-col items-center justify-center h-screen px-6 text-center bg-gray-900 text-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.5 }} 
        className="max-w-3xl w-full"
      >
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg mb-6">Feel free to reach out for collaborations or just a friendly chat!</p>
      
        <div className="flex justify-center items-center">
  <img src="/IMG_20241128_182515.jpg" alt="Profile" className="profile-pic" />
        </div>
      <br></br>
        {/* Contact Details */}
        <div className="space-y-4">
          <p className="text-lg">
            <a 
              href="https://www.linkedin.com/in/ramasubramaniam-gv-563931213/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              LinkedIn Profile
            </a>
          </p>
          <p className="text-lg">
            <a 
              href="mailto:gvpranav747gmail.com" 
              className="text-blue-400 hover:underline"
            >
              Ramasubramaniam Gv
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  );
};


const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
    </div>
  );
};

export default App;

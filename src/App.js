import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 shadow-lg z-50"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1
          className="text-xl sm:text-2xl font-bold"
          whileHover={{ scale: 1.1, color: "#60A5FA", rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          My Portfolio
        </motion.h1>
        <button className="sm:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "☰"}
        </button>
        <div
          className={`sm:flex space-x-6 ${
            isOpen ? "block" : "hidden"
          } sm:block absolute sm:static top-16 left-0 w-full sm:w-auto bg-gray-900 sm:bg-transparent p-4 sm:p-0`}
        >
          {["about", "projects", "experience", "achievements", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="block sm:inline cursor-pointer hover:text-gray-400 py-2 sm:py-0"
              onClick={() => setIsOpen(false)}
            >
              <motion.span
                whileHover={{ scale: 1.2, color: "#60A5FA", textShadow: "0 0 8px rgba(96, 165, 250, 0.8)" }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1).replace(/s$/, "s")}
              </motion.span>
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

const HeroSection = () => {
  const buttonVariants = {
    hover: { scale: 1.15, backgroundColor: "#2563EB", boxShadow: "0 0 15px rgba(37, 99, 235, 0.7)" },
    tap: { scale: 0.9 },
  };

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center bg-gray-800 text-white relative overflow-hidden"
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          fullScreen: { enable: false },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 80, duration: 0.4 } },
          },
          particles: {
            color: { value: "#60A5FA" },
            links: { color: "#60A5FA", distance: 80, enable: true, opacity: 0.5 },
            move: { direction: "none", enable: true, speed: 1 },
            number: { density: { enable: true, area: 600 }, value: 30 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 w-full h-full"
      />
      <div className="w-full max-w-md px-4 z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", type: "spring", stiffness: 80 }}
          className="text-3xl sm:text-5xl font-bold"
        >
          Hello, I'm a Cybersecurity Engineer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="text-lg sm:text-xl mt-4"
        >
          Passionate about security and ethical hacking
        </motion.p>
        <Link to="contact" smooth={true} duration={500}>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg cursor-pointer text-base sm:text-lg"
          >
            Contact Me
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -20 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="about" className="flex items-center justify-center min-h-screen px-4 sm:px-6 text-center bg-gray-900 text-white relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-md z-10"
      >
        <motion.h2 variants={itemVariants} className="text-2xl sm:text-4xl font-bold text-blue-400">
          About Me
        </motion.h2>
        {[
          "👋 Hey there! I'm <span className='text-blue-300'>Ramasubramaniam Gv</span>, a passionate Cybersecurity Professional with a strong background in penetration testing, vulnerability assessment, and network security.",
          "With a Master’s degree in Cybersecurity, I thrive on securing digital landscapes and uncovering potential security risks before they become real threats. I specialize in web application security, enterprise security, and network security.",
          "I’ve worked with tools like <span className='text-green-300'>Nmap, Burp Suite, DirB, FeroxBuster, John the Ripper, and Hashcat</span>, and I love tackling CTF challenges to sharpen my skills.",
          "Beyond security, I’m an advocate for continuous learning and knowledge sharing. I’m currently working on a <span className='text-yellow-300'>cybersecurity blog</span> to help beginners and professionals stay ahead in the field. 🚀",
          "My goal? To contribute to organizations by enhancing their security posture while continuously evolving as a cybersecurity expert.",
          "Let’s connect and make the digital world a safer place! 🔐",
        ].map((text, index) => (
          <motion.p
            key={index}
            variants={itemVariants}
            className="mt-4 text-base sm:text-lg"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        ))}
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-900 to-blue-900 opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
      />
    </section>
  );
};

const Projects = () => {
  const [showMore, setShowMore] = useState({ project1: false, project2: false });

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, type: "spring", stiffness: 100 } },
  };

  const detailVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <section id="projects" className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 text-center bg-gray-900 text-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-md space-y-10"
      >
        <motion.div variants={projectVariants} className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg">
          <motion.h2
            whileHover={{ scale: 1.05, color: "#60A5FA" }}
            className="text-xl sm:text-2xl font-bold mb-2"
          >
            Anomaly Intrusion Detection using CNN
          </motion.h2>
          <p className="text-base sm:text-lg">🚀 <strong>Project Overview:</strong></p>
          <p className="text-base sm:text-lg">
            This project develops an Anomaly-Based Intrusion Detection System (IDS) using CNNs to detect cyber threats in IoT networks. The model is trained on the <strong>Bot-IoT 2023 dataset</strong>.
          </p>
          {!showMore.project1 ? (
            <motion.button
              onClick={() => setShowMore({ ...showMore, project1: true })}
              className="mt-2 text-blue-500 hover:underline"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              Click me for more information
            </motion.button>
          ) : (
            <motion.div variants={detailVariants} initial="hidden" animate="visible">
              <p className="text-base sm:text-lg">
                By leveraging deep learning, this system enhances cybersecurity defenses by identifying suspicious activities and distinguishing between normal and malicious network behavior.
              </p>
              <ul className="list-disc ml-6 text-base sm:text-lg">
                <li>Detects abnormal patterns in network traffic.</li>
                <li>Reduces false positives compared to traditional IDS methods.</li>
                <li>Uses CNN architectures to extract complex patterns for high accuracy.</li>
              </ul>
              <motion.button
                onClick={() => setShowMore({ ...showMore, project1: false })}
                className="mt-2 text-red-500 hover:underline"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                Show less
              </motion.button>
            </motion.div>
          )}
        </motion.div>

        <motion.div variants={projectVariants} className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg">
          <motion.h2
            whileHover={{ scale: 1.05, color: "#60A5FA" }}
            className="text-xl sm:text-2xl font-bold mb-2"
          >
            Enhancing Security of Autonomous Vehicles using SHA-256
          </motion.h2>
          <p className="text-base sm:text-lg">🚀 <strong>Project Overview:</strong></p>
          <p className="text-base sm:text-lg">
            This project focuses on securing autonomous vehicles by integrating SHA-256 cryptographic hashing to ensure data integrity and prevent unauthorized access.
          </p>
          {!showMore.project2 ? (
            <motion.button
              onClick={() => setShowMore({ ...showMore, project2: true })}
              className="mt-2 text-blue-500 hover:underline"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              Click me for more information
            </motion.button>
          ) : (
            <motion.div variants={detailVariants} initial="hidden" animate="visible">
              <p className="text-base sm:text-lg">
                The system enhances vehicle security by preventing unauthorized modifications to firmware and network communications. The project involves:
              </p>
              <ul className="list-disc ml-6 text-base sm:text-lg">
                <li>Applying SHA-256 hashing to secure communication between vehicle components.</li>
                <li>Ensuring data integrity to prevent cyber threats such as replay attacks.</li>
                <li>Enhancing authentication mechanisms for self-driving car networks.</li>
              </ul>
              <motion.button
                onClick={() => setShowMore({ ...showMore, project2: false })}
                className="mt-2 text-red-500 hover:underline"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                Show less
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

const Experience = () => {
  const cardVariants = {
    hidden: { opacity: 0, x: -100, rotateY: -15 },
    visible: { opacity: 1, x: 0, rotateY: 0, transition: { duration: 1, type: "spring", stiffness: 80 } },
  };

  return (
    <section id="experience" className="flex items-center justify-center min-h-screen px-4 sm:px-6 bg-gray-900 text-white relative">
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-blue-900 opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-md grid grid-cols-1 sm:grid-cols-2 gap-8 z-10"
      >
        <motion.div variants={cardVariants} className="text-left">
          <motion.h2
            whileHover={{ scale: 1.05, color: "#60A5FA" }}
            className="text-2xl sm:text-4xl font-bold mb-4"
          >
            Experience
          </motion.h2>
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-semibold">TTK Prestige (May 2022 - July 2022)</h3>
            <ul className="list-disc ml-6 mt-2 text-base sm:text-lg">
              <li>Initially was taught about how a company drafts its policies and later was told to draft a policy for a company.</li>
              <li>Learned about the basics of security like CIA, how an attack takes place.</li>
              <li>Collaborated with officials to perform penetration testing on the company’s websites.</li>
              <li>Used tools like Wireshark, Metasploit, and Burp Suite.</li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          variants={{ ...cardVariants, hidden: { opacity: 0, x: 100, rotateY: 15 } }}
          className="text-left"
        >
          <h3 className="text-xl sm:text-2xl font-semibold">Titan Company (August 2022 - September 2022)</h3>
          <ul className="list-disc ml-6 mt-2 text-base sm:text-lg">
            <li>Developed a dynamic and responsive web application with the help of colleagues using Vue.js for the frontend and Express.js for the backend.</li>
            <li>For both HTTP and HTTPS, it was useful for the organization's website.</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

const Achievements = () => {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="achievements" className="flex items-center justify-center min-h-screen px-4 sm:px-6 text-center bg-gray-900 text-white relative">
      <motion.div
        className="absolute inset-0 bg-gradient-to-bl from-gray-900 to-blue-900 opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={listVariants}
        className="w-full max-w-md z-10"
      >
        <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl font-bold mb-4">
          Achievements & Certifications
        </motion.h2>
        <motion.ul variants={listVariants} className="list-disc text-base sm:text-lg inline-block text-left">
          {[
            { text: "📜 <strong>Google Cybersecurity Certification</strong> – Coursera", link: "https://coursera.org/share/92c18f5931db7bb50b52e1ca952c8b77" },
            { text: "📜 <strong>Cyber Security Workshop</strong> – HKCS Foundations", link: "https://drive.google.com/drive/folders/1hw6i70-Ex6nVCAfzhUihlsyg0FmWIdrD?usp=sharing" },
            { text: "📜 <strong>Ethical Hacking</strong> – INFOQUEST 2020, GCT CSEA" },
            { text: "📜 <strong>10-day Bug Bounty Program</strong> – Prompt InfoTech", link: "https://drive.google.com/drive/folders/1hw6i70-Ex6nVCAfzhUihlsyg0FmWIdrD?usp=sharing" },
            { text: "🏆 <strong>Hands-on Capture the Flag (CTF) Challenges:</strong> Titanic, Underpass", link: "https://www.linkedin.com/posts/ramasubramaniam-gv-563931213_hackthebox-cybersecurity-ethicalhacking-activity-7280955734811447297-hFRN" },
            { text: "🔍 <strong>Discovered a Bug in</strong> Queen Mary University of London" },
            { text: "🔍 <strong>Discovered a Bug in</strong> The International Journal of Indian Psychology" },
          ].map((item, index) => (
            <motion.li key={index} variants={itemVariants}>
              <span dangerouslySetInnerHTML={{ __html: item.text }} />
              {item.link && (
                <> [<a href={item.link} target="_blank" className="text-blue-400 underline">View Certificate</a>]</>
              )}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
};

const Contact = () => {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: 180 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 1.2, type: "spring", stiffness: 100 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="contact" className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 text-center bg-gray-900 text-white relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900 opacity-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2 }}
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
        className="w-full max-w-md z-10"
      >
        <motion.h2 variants={textVariants} className="text-2xl sm:text-3xl font-bold mb-4">
          Contact Me
        </motion.h2>
        <motion.p variants={textVariants} className="text-base sm:text-lg mb-6">
          Feel free to reach out for collaborations or just a friendly chat!
        </motion.p>
        <motion.div variants={imageVariants} className="flex justify-center items-center">
          <img
            src="/IMG_20241128_182515.jpg"
            alt="Profile"
            className="w-24 sm:w-32 h-24 sm:h-32 rounded-full border-4 border-blue-500"
          />
        </motion.div>
        <br />
        <motion.div variants={textVariants} className="space-y-4">
          <p className="text-base sm:text-lg">
            <motion.a
              href="https://www.linkedin.com/in/ramasubramaniam-gv-563931213/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
              whileHover={{ scale: 1.1, color: "#93C5FD" }}
              transition={{ duration: 0.3 }}
            >
              LinkedIn Profile
            </motion.a>
          </p>
          <p className="text-base sm:text-lg">
            <motion.a
              href="mailto:gvpranav747@gmail.com"
              className="text-blue-400 hover:underline"
              whileHover={{ scale: 1.1, color: "#93C5FD" }}
              transition={{ duration: 0.3 }}
            >
              Ramasubramaniam Gv
            </motion.a>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

const App = () => {
  return (
    <div className="relative">
      <Analytics />
      <SpeedInsights />
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
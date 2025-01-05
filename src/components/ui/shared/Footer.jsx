import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>
      <footer className="border-t border-t-gray-200 py-8 text-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md-flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">IQ Jobs</h2>
              <p className="text-sm mb-2">© {year} IQ Jobs. All rights reserved.</p>
            </div>
            <div className="flex space-x-4 ,t-4 md:mt-0">
              <a
                href="https://github.com/ArhamImranQureshi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-400 transition duration-200"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="www.linkedin.com/in/arham-qureshi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-400 transition duration-200"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://www.hackerrank.com/profile/arhamimranqures1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-400 transition duration-200"
              >
                <SiHackerrank size={30} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

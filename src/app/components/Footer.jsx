import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#043873] text-white py-12">
      {/* Footer Container */}
      <div className="w-full max-w-7xl mx-auto px-2 flex flex-wrap justify-between items-start gap-12">
        {/* Left Content: Logo and Description */}
        <div className="flex flex-col items-start gap-4 w-full sm:w-auto">
          {/* Logo */}
          <div className="flex items-center mb-4">
            <Image
              src="/assets/Logo.png"
              alt="Whitepace Logo"
              width={180} // Adjust width as needed
              height={90} // Adjust height as needed
            />
          </div>
          {/* Description */}
          <p className="text-[14px] leading-6 max-w-[300px] break-words px-2">
            Whitepace was created for the new ways we live and work. We make a better workspace around the world.
          </p>
        </div>

        {/* Links Sections */}
        <div className="flex gap-52 w-full sm:w-auto">
          {/* Product Links */}
          <div>
            <h3 className="font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[14px] hover:underline">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] hover:underline">
                  Customer stories
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[14px] hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] hover:underline">
                  Guides & Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] hover:underline">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[14px] hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] hover:underline">
                  Media Kit
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Copyright Section */}
      <div className="border-t border-[#1F497D] mt-8 pt-4 text-center">
        <p className="text-[14px]">
          ©2024 Whitepace LLC. Developed by Abdul Waheed Sunday Class 2 PM to 5 PM
        </p>
      </div>
    </footer>
  );
};

export default Footer;

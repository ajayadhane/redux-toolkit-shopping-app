import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-950 text-white">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-bold">MyStore</h2>
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} MyStore. All rights reserved.
          </p>
        </div>

        {/* Center / Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#home" className="hover:text-blue-300 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-blue-300 transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-blue-300 transition-colors">
            Contact
          </a>
        </div>

        {/* Right Section / Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-300 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.59-2.46.7a4.3 4.3 0 001.88-2.38 8.59 8.59 0 01-2.73 1.04 4.28 4.28 0 00-7.3 3.9A12.15 12.15 0 013 4.8a4.28 4.28 0 001.33 5.7 4.25 4.25 0 01-1.94-.53v.05a4.28 4.28 0 003.44 4.19 4.28 4.28 0 01-1.93.07 4.28 4.28 0 003.99 2.97A8.58 8.58 0 012 19.54a12.1 12.1 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.72 8.72 0 0024 5.3a8.57 8.57 0 01-2.54.7z" />
            </svg>
          </a>
          <a href="#" className="hover:text-blue-300 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.2c-5.44 0-9.8 4.36-9.8 9.8 0 5.44 4.36 9.8 9.8 9.8s9.8-4.36 9.8-9.8c0-5.44-4.36-9.8-9.8-9.8zm3.23 14.34c-.08.18-.17.36-.27.53-.09.16-.19.31-.3.46-.22.28-.48.55-.77.8-.3.25-.61.48-.93.69-.32.21-.66.39-1.02.54-.36.15-.73.27-1.11.36-.38.09-.77.14-1.17.14-.4 0-.79-.05-1.17-.14-.38-.09-.75-.21-1.11-.36-.36-.15-.7-.33-1.02-.54-.32-.21-.63-.44-.93-.69-.29-.25-.55-.52-.77-.8-.11-.15-.21-.31-.3-.46-.1-.17-.19-.35-.27-.53-.17-.34-.31-.69-.41-1.05-.1-.36-.18-.72-.23-1.09-.05-.37-.08-.74-.08-1.12 0-.38.03-.75.08-1.12.05-.37.13-.73.23-1.09.1-.36.24-.71.41-1.05.08-.18.17-.36.27-.53.09-.16.19-.31.3-.46.22-.28.48-.55.77-.8.3-.25.61-.48.93-.69.32-.21.66-.39 1.02-.54.36-.15.73-.27 1.11-.36.38-.09.77-.14 1.17-.14.4 0 .79.05 1.17.14.38.09.75.21 1.11.36.36.15.7.33 1.02.54.32.21.63.44.93.69.29.25.55.52.77.8.11.15.21.31.3.46.1.17.19.35.27.53.17.34.31.69.41 1.05.1.36.18.72.23 1.09.05.37.08.74.08 1.12 0 .38-.03.75-.08 1.12-.05.37-.13.73-.23 1.09-.1.36-.24.71-.41 1.05z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

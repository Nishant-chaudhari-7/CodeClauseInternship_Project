import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <div className="flex items-center space-x-4"> {/* Opening div tag was missing here */}
          <img src="/images/hero-image.png" alt="Logo" className="h-8 w-8" />
          <p className="text-white font-semibold cursor-pointer">Nishant Chaudhari</p>
        </div>
        <p className="text-slate-600">All rights reserved.</p> {/* Moved inside the flex container */}
      </div>
    </footer>
  );
};

export default Footer;



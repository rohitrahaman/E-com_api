import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 py-6 text-center text-gray-600">
      <p>&copy; {new Date().getFullYear()} MyMart. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

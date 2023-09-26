import React from "react";

const Footer = () => {
    return(
        <footer className=" text-white py-6 mt-10">
        <div className="container mx-auto text-center">
            <p className="mb-4">© 2023 Nevada Hoop Culture. All rights reserved.</p>
            <div className="space-x-4">
            <a href="/terms" className="text-yellow-400 hover:underline">Terms of Service</a>
            <a href="/privacy" className="text-yellow-400 hover:underline">Privacy Policy</a>
            <a href="/contact" className="text-yellow-400 hover:underline">Contact Us</a>
            </div>
        </div>
        </footer>
    );
}

export default Footer;
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div className="bg-gradient-to-r from-gray-800 to-black min-h-screen text-gray-200 p-4">
            {/* Header */}
            <Header />

            {/* Content */}
            <div className="mt-8">
                <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>

                {/* Contact Information Section */}
                <div className="bg-gray-900 rounded-lg p-6 shadow-lg mb-8">
                    <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                    <div className="mb-4">
                        <span className="block text-yellow-400 font-semibold">Phone:</span>
                        <span className="block">(123) 456-7890</span>
                    </div>
                    <div className="mb-4">
                        <span className="block text-yellow-400 font-semibold">Email:</span>
                        <span className="block">info@example.com</span>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name:</label>
                            <input type="text" id="name" name="name" className="w-full px-3 py-2 rounded bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:border-yellow-400" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address:</label>
                            <input type="email" id="email" name="email" className="w-full px-3 py-2 rounded bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:border-yellow-400" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Message:</label>
                            <textarea id="message" name="message" rows="5" className="w-full px-3 py-2 rounded bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:border-yellow-400"></textarea>
                        </div>

                        <div className="text-center">
                            <button type="submit" className="bg-yellow-400 text-gray-800 px-6 py-2 rounded hover:bg-yellow-300">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
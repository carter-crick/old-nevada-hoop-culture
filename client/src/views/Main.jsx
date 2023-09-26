import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Cta from "../components/Cta";

const Main = () => {
    return (
        <div className="bg-gray-900 text-gray-200">
            {/* Header */}
            <div className="bg-black">
                <Header />
            </div>
            
            {/* Hero section*/}
            <div className="bg-gradient-to-r from-gray-800 to-black">
                <Hero />
            </div>

            {/* Features */}
            <div className="bg-gray-800 py-8">
                <Features />
            </div>
            
            {/* Benefits */}
            <div className="bg-gradient-to-r from-gray-800 to-black py-8">
                <div className="container mx-auto px-4">
                    <Benefits />
                </div>
            </div>

            {/* Testimonials */}
            <div className="bg-gray-800 py-8">
                <Testimonials />
            </div>
            
            {/* FAQs */}
            <div className="bg-gradient-to-r from-gray-800 to-black py-8">
                <Faq />
            </div>

            {/* CTA */}
            <div className="bg-yellow-400 py-8">
                <Cta />
            </div>

            {/* Footer */}
            <div className="bg-gray-800 text-white py-8">
                <Footer />
            </div>
        </div>
    )
}

export default Main;
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Schedule = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-200 p-10 space-y-10">
            <Header/>

            {/* Header */}
            <h1 className="text-5xl font-bold mb-8">Schedule</h1>

            {/* Practice Schedule */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md mb-8">
                <h2 className="text-3xl font-semibold mb-4">Wednesdays and Fridays (Practice)</h2>
                <p className="text-yellow-400 mb-6">Reno Convention Center Lot #20</p>
                <div className="space-y-3">
                    <p>K-2nd: 5pm</p>
                    <p>3rd-5th: 6pm</p>
                    <p>6-8th: 7pm</p>
                </div>
            </div>

            {/* Game Schedule */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-semibold mb-4">Sundays (Games)</h2>
                <p className="text-yellow-400 mb-6">Reed HS</p>
                <div className="space-y-3">
                    <p>K-2nd: 11am</p>
                    <p>3rd-5th: 12pm</p>
                    <p>6-8th: 1pm</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Schedule;
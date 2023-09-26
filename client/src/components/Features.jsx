import React from "react";

const Features = () => {
  return(
    <div className="py-12 bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 px-4">Empower Your Young Athlete</h2>

        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10">
            {/* Feature 1 */}
            <div className="flex-1 px-4">
              <div className="mb-6">
                <img src="../src/assets/personal-growth.svg" alt="Personal Growth Icon" className="w-16 h-16 mx-auto bg-yellow-400 rounded-full p-4" />
                <h3 className="text-xl mt-4 font-semibold">Personal Growth</h3>
              </div>
              <p>Our program isn't just about skills; it's about shaping character. Your child will cultivate discipline, teamwork, and perseverance — qualities that last a lifetime.</p>
            </div>
  
            {/* Feature 2 */}
            <div className="flex-1 px-4">
              <div className="mb-6">
                <img src="../src/assets/safety-first.svg" alt="Safety First Icon" className="w-16 h-16 mx-auto" />
                <h3 className="text-xl mt-4 font-semibold">Safety & Guidance</h3>
              </div>
              <p>Rest easy knowing your child is in safe hands. Our certified coaches prioritize safety, ensuring a nurturing environment for young athletes to thrive in.</p>
            </div>
  
            {/* Feature 3 */}
            <div className="flex-1 px-4">
              <div className="mb-6">
                <img src="../src/assets/future-ready.svg" alt="Future Ready Icon" className="w-16 h-16 mx-auto" />
                <h3 className="text-xl mt-4 font-semibold">Future-Proofing Success</h3>
              </div>
              <p>Equip your child for future success, both on and off the court. Our holistic approach prepares young athletes for collegiate opportunities and life beyond basketball.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Features;
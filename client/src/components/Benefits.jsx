import React from 'react';

const Benefits = () => {
  return (
    <div className="py-12 bg-gradient-to-r from-gray-800 to-black text-gray-200">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row mb-10">
          <div className="w-full md:w-1/2 p-5">
            <h3 className="text-2xl font-bold mb-4">Building Strong Foundations</h3>
            <p className="mb-4">Our program prioritizes the holistic development of your child, ensuring they grow as individuals, not just as athletes.</p>
            <ul>
              <li>Instills discipline and dedication</li>
              <li>Cultivates teamwork and leadership skills</li>
              <li>Enhances critical thinking on and off the court</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 p-5">
            <img src="../src/assets/Huddle.jpeg" alt="Children in a group huddle" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Second Section: Image Left, Content Right */}
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/2 p-5">
            <img src="../src/assets/Practice.jpeg" alt="Child practicing with a coach" className="w-full rounded-lg shadow-lg" />
          </div>
          <div className="w-full md:w-1/2 p-5">
            <h3 className="text-2xl font-bold mb-4">A Safe Space to Thrive</h3>
            <p className="mb-4">Safety and well-being are at the forefront of our training. We offer a nurturing environment where your child can excel with confidence.</p>
            <ul className="list-disc pl-5">
              <li>Certified coaches with a child-first approach</li>
              <li>Structured programs tailored to each age group</li>
              <li>Progress tracking to celebrate every milestone</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
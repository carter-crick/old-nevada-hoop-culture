import React from 'react';

const Testimonials = () => {
  return (
    <div className="py-12 bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">What Parents Are Saying</h2>

        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
          {/* Testimonial 1 */}
          <div className="flex-1 p-4 bg-white rounded-lg shadow-lg text-gray-900">
            <p className="mb-6 italic">"Since joining the program, I've seen a remarkable change in my son's discipline and teamwork both on and off the court."</p>
            <div>
              <strong>Jane D.</strong>
              <div className="text-sm text-gray-500">Mother of Sam, 14</div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="flex-1 p-4 bg-white rounded-lg shadow-lg text-gray-900">
            <p className="mb-6 italic">"The coaches are caring and professional. My daughter always looks forward to her training sessions."</p>
            <div>
              <strong>Carlos V.</strong>
              <div className="text-sm text-gray-500">Father of Sophia, 12</div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="flex-1 p-4 bg-white rounded-lg shadow-lg text-gray-900">
            <p className="mb-6 italic">"It's more than just basketball. The life skills my children are learning are invaluable. Highly recommend!"</p>
            <div>
              <strong>Amelia L.</strong>
              <div className="text-sm text-gray-500">Mother of twins, 13</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
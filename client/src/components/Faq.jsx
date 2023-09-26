import React, { useState } from 'react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questionsAnswers = [
    {
      question: "Is there an age requirement for the program?",
      answer: "Yes, our program is tailored for young athletes between the ages of 8 to 18. We structure our training based on age groups to ensure appropriate skill development."
    },
    {
      question: "Are your coaches certified?",
      answer: "Absolutely! All of our coaches are certified and have undergone rigorous training, ensuring they provide top-notch guidance to your child."
    },
    {
      question: "What safety measures are in place?",
      answer: "Safety is our utmost priority. We conduct regular equipment checks, maintain a strict coach-to-student ratio, and ensure all sessions are supervised."
    },
    {
      question: "How often are the training sessions?",
      answer: "Training sessions are held thrice a week. However, we do offer flexibility for parents who wish to opt for weekend-only sessions."
    },
  ];

  return (
    <div className="py-12 bg-gradient-to-r from-gray-800 to-black text-yellow-400">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Frequently Asked Questions</h2>
        
        {questionsAnswers.map((qa, index) => (
          <div key={index} className="mb-4">
            <button 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-center p-4 bg-gray-800 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900"
            >
              {qa.question}
            </button>
            {openIndex === index && (
              <div className="p-4 border-2 border-t-0 bg-gray-800 text-gray-200">
                {qa.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
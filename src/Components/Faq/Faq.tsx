import React from "react";
import './Faq.scss';

const faqArray = [
  {
    question: "Why shouldn't we trust atoms?",
    answer: "They make up everything.",
  },
  {
    question: "Why shouldn't we trust atoms?",
    answer: "They make up everything.",
  },
  {
    question: "Why shouldn't we trust atoms?",
    answer: "They make up everything.",
  },
  {
    question: "Why shouldn't we trust atoms?",
    answer: "They make up everything.",
  },
  {
    question: "Why shouldn't we trust atoms?",
    answer: "They make up everything.",
  },
];

const FaqsContainer = () => {
  return (
    <section className="faq">
      <div className="faq__heading-container">
        <h3 className="faq__heading">Frequently Asked Questions</h3>
      </div>
      <div className="faq__list">
        {faqArray.map((qanda, index) => (
          <details
              className="faq__list-item"
              key={index}
          >
            <summary className="faq__list-question">
              {qanda.question}
            </summary>
            {qanda.answer}
          </details>
        ))}
      </div>
    </section>
  );
};

export default FaqsContainer;

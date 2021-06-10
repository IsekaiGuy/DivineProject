import React from "react";
import arrow from "../images/down-arrow.svg";

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

const parentNodeToggler = (e) => {
  e.target.parentNode.classList.toggle("active");
};

const FaqsContainer = () => {
  return (
    <div className="faq__section">
      <div className="heading3-container">
        <h3 className="heading3">Frequently Asked Questions</h3>
      </div>
      <div className="faqs-container">
        {faqArray.map((qanda, index) => (
          <div
            key={index}
            className="faq"
            onClick={(e) => {
              e.target.classList.toggle("active");
            }}
          >
            <h4
              className="faq-title"
              onClick={(e) => {
                parentNodeToggler(e);
              }}
            >
              {qanda.question}
            </h4>
            <p
              className="faq-text"
              onClick={(e) => {
                parentNodeToggler(e);
              }}
            >
              {qanda.answer}
            </p>
            <img
              src={arrow}
              alt="arrow"
              className="arrow"
              onClick={(e) => {
                parentNodeToggler(e);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqsContainer;

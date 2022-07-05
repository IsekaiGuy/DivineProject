import React from "react";
// @ts-ignore
import bemClassName from 'bem-classnames-maker';
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
  const bem = bemClassName('Faq')
  return (
    <section className={bem('container')}>
      <div className={bem('heading-wrapper')}>
        <h3>
          Frequently Asked Questions
        </h3>
      </div>
      <div className={bem('list')}>
        {faqArray.map((qanda, index) => (
          <details
              className={bem('list-item')}
              key={index}
          >
            <summary>
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

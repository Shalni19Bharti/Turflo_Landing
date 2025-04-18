import React, { useState } from 'react';
import { Open, Close } from '../icons/index';

interface QuestionProps {
  question: string | React.ReactNode;
  answer: string | React.ReactNode;
  className?: string;
}

function Question({ question, answer, className }: QuestionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`border-b-1 border-[#FF7018] text-center mx-[25px] sm:mx-[25px] md:mx-[75px] lg:mx-[69px] xl:mx-[222px] 2xl:mx-[222px] ${className || ''}`}
    >
      <div className={`flex justify-between items-center h-[90px] ${isOpen ? '' : ''}`}>
        <p className="font-bold text-[18px] text-left leading-[125%] md:text-[22px] md:leading-[100%] lg:text-[24px] lg:leading-[100%] text-[#FFFFFF]">
          {typeof question === 'string' ? question : question}
        </p>
        <button
          onClick={toggleAnswer}
          className="bg-none border-none cursor-pointer focus:outline-none"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Collapse answer' : 'Expand answer'}
        >
          {isOpen ? <Close className="text-[#FFF]" /> : <Open className="text-[#FFF]" />}
        </button>
      </div>
      {isOpen && (
        <div className="pb-[25px]">
          <div className="text-[14px] text-left font-semibold leading-[27px] md:text-[14px] lg:text-[18px] text-[#FFF]">
            {typeof answer === 'string' ? <p>{answer}</p> : answer}
          </div>
        </div>
      )}
    </div>
  );
}

export default Question;
import { useEffect, useState, useRef } from 'react';
import FeedbackSection from "../../components/ui/Feedback";
import FeedbackData from '../../../src/data/feedback.json';

const Feedback = () => {
  const [position, setPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const itemWidth = 316;
  const gap = 24;
  const containerRef = useRef<HTMLDivElement>(null);

  const firstRowItems = FeedbackData.slice(0, 5);
  const secondRowItems = FeedbackData.slice(5, 10);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        const nextPosition = prevPosition + 1;

        if (nextPosition >= 5) {
          return 0;
        }
        return nextPosition;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const leftTransform = `translateX(-${position * (itemWidth + gap)}px)`;
  const rightTransform = `translateX(${position * (itemWidth + gap)}px)`;

  return (
    <div
      className="bg-[#1C1C1C] pb-[88px] px-6 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="pt-[79px] md:pt-[109px] lg:pt-[109px] pb-[86px] md:pb-[110px] lg:pb-[125px] xl:pb-[98px] text-center">
        <h1 className="text-white font-bold text-[28px] md:text-[30px] lg:text-[32px]">
          Real Moments, Real Players.
        </h1>
      </div>

      <div ref={containerRef} className="w-full overflow-hidden">
        <div className="overflow-hidden mb-6">
          <div
            className="flex gap-x-[24px] transition-transform duration-1000 ease-linear"
            style={{
              transform: leftTransform,
              width: `${5 * (itemWidth + gap) - gap}px`
            }}
          >
            {firstRowItems.map((feedback, index) => (
              <div key={`feedback-1-${index}`} style={{ width: `${itemWidth}px`, flexShrink: 0 }}>
                <FeedbackSection
                  name={feedback.name}
                  age={feedback.age}
                  sport={feedback.sport}
                  description={feedback.description}
                  rating={feedback.rating}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-x-[24px] transition-transform duration-1000 ease-linear"
            style={{
              transform: rightTransform,
              width: `${5 * (itemWidth + gap) - gap}px`
            }}
          >
            {secondRowItems.map((feedback, index) => (
              <div key={`feedback-2-${index}`} style={{ width: `${itemWidth}px`, flexShrink: 0 }}>
                <FeedbackSection
                  name={feedback.name}
                  age={feedback.age}
                  sport={feedback.sport}
                  description={feedback.description}
                  rating={feedback.rating}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
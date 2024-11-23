import { useState } from "react";
import { aboutMarqueeItems } from "../../utils/aboutCarouselItems";
import Marquee from "react-fast-marquee";

const AboutMarquee = () => {
  const [marqueeDirection, setMarqueeDirection] = useState("left");

  const handleCycleComplete = () => {
    // Change direction after completing a cycle
    setMarqueeDirection((prevDirection) =>
      prevDirection === "left" ? "right" : "left"
    );
  };
  return (
    <div className="bg-cf-yellow">
      <Marquee
        direction={marqueeDirection}
        onCycleComplete={handleCycleComplete}
      >
        <div className="flex gap-4 items-center py-6 pr-4">
          {aboutMarqueeItems.map((item) => (
            <>
              <img src="/marquee-icon.svg" alt="marquee icon" />
              <p
                className="font-nunito text-cf-coffee text-xl tracking-tight font-semibold"
                key={item.id}
              >
                {item.text}
              </p>
            </>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default AboutMarquee;
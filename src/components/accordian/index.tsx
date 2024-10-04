import { useState } from "react";
import { accordianData } from "../../data/accordianData";
import '../accordian/index.css'

const Accordian = () => {
  const data = accordianData;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if the same accordion is clicked again
    } else {
      setActiveIndex(index); // Open the clicked accordion
    }
  };

  return (
    <div>
      <div className="accordion">
        {data.map(({ title, content }, index) => (
          <div key={index} className="accordion-item">
            <div className="accordion-title" onClick={() => toggleAccordion(index)}>
              <div>{title}</div>
              <div className="symbol">{activeIndex === index ? "-" : "^"}</div>
            </div>
            {activeIndex === index && <div className="accordion-content">{content}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordian;

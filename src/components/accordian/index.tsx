import { useState } from "react";
import { accordianData } from "../../data/accordianData";
import '../accordian/index.css'
import { FaChevronCircleDown } from "react-icons/fa";
import { FaChevronCircleUp } from "react-icons/fa";
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
      <div className="accordion bg-white rounded-3xl">

        {data.map(({ title, content }, index) => (
          <div key={index} className="accordion-item border-b py-8">
            <div className="accordion-title" onClick={() => toggleAccordion(index)}>
              <div>{title}</div>
              <div className="symbol ">{activeIndex === index ? <FaChevronCircleUp className="text-4xl text-violet-200" />

                : <FaChevronCircleDown className="text-4xl text-violet-200" />
              }</div>
            </div>
            {activeIndex === index && <div className="accordion-content">{content}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordian;

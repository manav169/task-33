import { cardDataType1, cardDataType2 } from "../../data/cardData";

const MyCard = ({ type }: { type: string}) => {
  const cardData = type === "type1" ? cardDataType1 : cardDataType2;

  return (
    <div>
      {
        type === "type1" ? (
          <div className="flex flex-wrap justify-center gap-5 p-5">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`w-[400px] text-center bg-white border border-gray-300 rounded-lg p-6 shadow-md ${
            type === "type1" ? "bg-white text-black" : "bg-[#f1f1ff] text-black"
          }`}
        >
          <a className="flex justify-center items-center mb-5" href={card.link}>
            <figure className="w-12 m-0">
              <img alt={card.alt} src={card.imgSrc} className="w-full h-auto" />
            </figure>
          </a>
          <div className="text-center">
            <h2 className="text-lg font-bold mb-3">{card.title}</h2>
            <div className="mb-5">
              <p>{card.description}</p>
            </div>
            <div className="flex justify-center items-center">
              <a
                href={card.buttonLink}
                className="bg-black text-white py-2 px-6 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-gray-800"
              >
                <span>{card.buttonText}</span>
                <span className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M 21.1875 9.28125 L 19.78125 10.71875 L 24.0625 15 L 4 15 L 4 17 L 24.0625 17 L 19.78125 21.28125 L 21.1875 22.71875 L 27.90625 16 Z"></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
        ) : (
          <div className="grid grid-cols-3 gap-5 p-5">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`w-[400px]  bg-white border border-gray-300 rounded-lg p-6 shadow-md ${
            type === "type1" ? "bg-white text-black" : "bg-[#f1f1ff] text-black"
          }`}
        >
          <a className="mb-5" href={card.link}>
            <figure className="w-12 m-0">
              <img alt={card.alt} src={card.imgSrc} className="w-full h-auto" />
            </figure>
          </a>
          <div >
            <h2 className="text-lg font-bold mb-3">{card.title}</h2>
            <div className="mb-5">
              <p>{card.description}</p>
            </div>
            <div >
              <a
                href={card.buttonLink}
                className="underline hover:text-red-500 text-base"
              >
                <span>{card.buttonText}</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
        )
      }
    </div>
    
  );
};

export default MyCard;

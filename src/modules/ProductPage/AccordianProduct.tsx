import React, { useState } from 'react';

interface AccordionItemProps {
    question: string;
    answer: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b">
            <div
                className="cursor-pointer p-4 font-semibold text-lg bg-gray-100 hover:bg-gray-200"
                onClick={toggleAccordion}
            >
                {question}
            </div>
            {isOpen && <div className="p-4 text-gray-700">{answer}</div>}
        </div>
    );
};

const AccordionProduct: React.FC = () => {
    const questionsAndAnswers = [
        {
            question: 'Description',
            answer: 'Our women’s leather handbag is the perfect blend of timeless elegance and modern functionality. Crafted from premium quality leather, it features a sleek design that complements any outfit, whether for casual outings or formal events. The spacious interior is thoughtfully organized to keep your essentials secure, while the durable straps ensure comfort throughout the day. A versatile piece that combines style, sophistication, and practicality, this leather bag is a must-have for any wardrobe.',
        },
        {
            question: 'Fit',
            answer: 'Our women’s leather handbag is designed to provide both style and functionality. The fit is carefully crafted to complement your natural silhouette, with adjustable straps for versatile carrying options. Whether worn on the shoulder or across the body, this bag sits comfortably and securely, offering ample space without feeling bulky. Ideal for daily use, it effortlessly combines elegance with practicality, making it the perfect accessory for any occasion.',
        },
        {
            question: 'Care Instructions',
            answer: 'To maintain the beauty and longevity of your leather handbag, avoid prolonged exposure to direct sunlight and moisture. Gently wipe the surface with a soft, dry cloth to remove dirt or dust. For deeper cleaning, use a leather conditioner specifically designed for handbags. Store your bag in a cool, dry place and keep it inside a dust bag when not in use. Avoid contact with sharp objects to prevent scratches. With proper care, your leather handbag will retain its elegance and durability for years to come.',
        },
        {
            question: 'Shipping and Returns',
            answer: "We offer fast and reliable shipping for all our women’s leather bags. Orders are typically processed within 1-2 business days, with delivery times varying based on your location. Free standard shipping is available for orders over [X amount].If you’re not completely satisfied with your purchase, we accept returns within 30 days of receipt. The item must be unused, in its original packaging, and accompanied by a receipt or proof of purchase. Please note that return shipping costs may apply. For more details, refer to our full shipping and returns policy."
        }
    ];

    return (
        <div className=" mt-10 border rounded-lg shadow-md">
            {questionsAndAnswers.map((item, index) => (
                <AccordionItem key={index} question={item.question} answer={item.answer} />
            ))}
        </div>
    );
};

export default AccordionProduct;

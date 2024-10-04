export interface CardDataType1 {
  title: string;
  description: string;
  imgSrc: string;
  alt: string;
  buttonText: string;
  buttonLink: string;
  link: string;
}

export interface CardDataType2 {
  title: string;
  description: string;
  imgSrc: string; 
  alt: string;    
  buttonText: string; 
  buttonLink: string; 
  link: string;       
}


export const cardDataType1: CardDataType1[] = [
  {
    title: "Order Tracking",
    description: "Log in to check the status of your order",
    imgSrc: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-Te8cHLsQU8icon-hc-1.png?v=1724405573",
    alt: "Order Tracking Icon",
    buttonText: "Track your order",
    buttonLink: "#",
    link: "#",
  },
  {
    title: "Return & Exchange",
    description: "We make it easy to return and exchange styles.",
    imgSrc: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-Cbwk5YMW5Dicon-hc-2.png?v=1724405681",
    alt: "Return & Exchange Icon",
    buttonText: "Start a return",
    buttonLink: "#",
    link: "#",
  },
];

export const cardDataType2: CardDataType2[] = 
[
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-TSKqG0pC2uic-hp-1.png?v=1724407135",
    alt: "Size Guide Image",
    link: "#",
    title: "Size Guide",
    description: "Ensure your customers get the right fit",
    buttonText: "View More",
    buttonLink: "#"
  },
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-ry1vhOiRg8ic-hp-2.png?v=1724407185",
    alt: "Loyalty Program Image",
    link: "#",
    title: "Loyalty Program",
    description: "Offer exclusive rewards",
    buttonText: "View More",
    buttonLink: "#"
  },
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-1hx43OngFRic-hp-3.png?v=1724407203",
    alt: "Order and Shipping Image",
    link: "#",
    title: "Order & Shipping",
    description: "Looking for your order status",
    buttonText: "View More",
    buttonLink: "#"
  },
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-JYbi3Qpv20ic-hp-4.png?v=1724634293",
    alt: "Payment and Gift Cards Image",
    link: "#",
    title: "Payment & Gift cards",
    description: "Wonder what payment we accept?",
    buttonText: "View More",
    buttonLink: "#"
  },
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-NcXYj3LOv3ic-hp-5.png?v=1724634338",
    alt: "Discount Codes Image",
    link: "#",
    title: "Discount Codes",
    description: "Have a discount you like to use?",
    buttonText: "View More",
    buttonLink: "#"
  },
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-zO0BfEcTlSic-hp-6.png?v=1724634383",
    alt: "Store Location Image",
    link: "#",
    title: "Store Location",
    description: "Want to find a store near you?",
    buttonText: "View More",
    buttonLink: "#"
  }
];

// productData.tsx

export interface Flavor {
    name: string;
    imageUrl: string; // URL to the image of the flavor
}

export interface SubscriptionOption {
    oneTimePurchasePrice: string;
    subscriptionPrice: string;
    deliveryFrequency: string;
}

export interface RelatedProduct {
    name: string;
    price: string;
}

export interface Product {
    id: number;
    name: string;
    price: string;
    ratings: string;
    stars: number;
    bestSeller: boolean;
    flavors: Flavor[];
    subscription: SubscriptionOption;
    relatedProducts: RelatedProduct[];
}

const products: Product[] = [
    {
        id: 1,
        name: "CHIPS SNACk",
        price: "$24.99",
        ratings: "100+ ratings",
        stars: 5,
        bestSeller: true,
        flavors: [
            { name: "Nacho Vibes", imageUrl: "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/main-p-sn1.jpg?v=1724148400&amp;width=1946" },
            { name: "Bohemian Barbecue", imageUrl: "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/main-p-sn2.jpg?v=1724148400" },
            { name: "Puff Variety Pack", imageUrl: "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/main-p-sn4.jpg?v=1724148401" },
            { name: "Churro", imageUrl: "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/main-p-sn5.jpg?v=1724148400" },
            { name: "Mexican Street Corn", imageUrl: "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/main-p-sn4_681e9f24-60cd-4e0e-bc01-aed8641d4c75.jpg?v=1724210266" }
        ],
        subscription: {
            oneTimePurchasePrice: "$24.99",
            subscriptionPrice: "$21.99", // Strikethrough of original price
            deliveryFrequency: "Every 2 weeks"
        },
        relatedProducts: [
            { name: "Cheese Variety Pack", price: "$24.99" }
        ]
    }
];

export default products;


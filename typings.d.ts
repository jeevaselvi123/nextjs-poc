export type Item = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

export type Product = {
    [x: string]: any;
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock:number;
    brand: string;
    category: string;
    thumbnail: string;
    images: Array
};
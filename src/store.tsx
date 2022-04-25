import { type } from '@testing-library/user-event/dist/type';
import { log } from 'console';
import { atom } from 'jotai';

const URL = 'https://fakestoreapi.com/products';

//interface
interface Cart {
    id: number;
    userID: number;
    name: string;
    price: number;
    quantity: number;
}
interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
}
//atoms

export const Loading = atom(false);
export const Error = atom(false);
export const Products = atom<[]>([]);


//fn
export const getProducts = () => {
    return fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
}


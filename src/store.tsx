import { atom, useAtom } from 'jotai';
import { atomWithQuery } from 'jotai/query'
import * as api from './api/api';

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


export const getProducts = atomWithQuery((get) => ({
    queryKey: ['products'],
    queryFn: () => {
        const res = api.getProducts();
        return res;
    },
}))

export const useToggle = () => {
    const [pro, setPro] = useAtom(getProducts);
}
import React from 'react'
import * as api from "./api/api";
import { useQuery } from "react-query";
import { atomWithQuery } from 'jotai/query'
import { useAtom, atom } from 'jotai';

export interface CartItemType {
    id: number,
    title: string,
    price: number,
    category: string,
    image: string,
    description: string,
    amount: number
}

// const products = atomWithQuery((get) => ({
//     queryKey: ["products"],
//     queryFn: async () => {
//         const res = await api.getProducts()
//         return res;
//     },
// }))

const useProducts = (): { data: {} | undefined, isLoading: boolean, error: any } => {

    return useQuery<CartItemType[]>("products", api.getProducts)
}

//hook for get single product
const useProduct = (): {} => {
    return {}
}

//hook for delete product   
const useDeleteProduct = (): {} => {
    return {}
}
//hook for update product
const useUpdateProduct = (): {} => {
    return {}
}
export { useProducts, useProduct, useDeleteProduct, useUpdateProduct }
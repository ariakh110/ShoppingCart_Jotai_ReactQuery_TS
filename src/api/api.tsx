import axios from "axios";

const server = axios.create({
    baseURL: 'https://fakestoreapi.com/products',
})

//get all products asynchronously
const getProducts = async () => {
    const { data } = await server.get('/')
    return data
}

//get one product asynchronously
const getProduct = async (id: number) => {
    const { data } = await server.get(`/${id}`)
    return data
}

//create a new product asynchronously
const createProduct = async (product: {}) => {
    const { data } = await server.post('/', product)
    return data
}
//update a product asynchronously
const updateProduct = async (id: number, product: {}) => {
    const { data } = await server.put(`/${id}`, product)
    return data
}
//delete a product asynchronously  
const deleteProduct = async (id: number) => {
    const { data } = await server.delete(`/${id}`)
    return data
}

export { getProducts, getProduct, createProduct, updateProduct, deleteProduct } 
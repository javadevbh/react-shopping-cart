import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';


export const getProducts = async () => {
    const response = await axios.get(`${BASE_URL}/products`)
    .catch(error => alert(`${error.message} : Please check your connection or try again later`));
    return response.data;
}
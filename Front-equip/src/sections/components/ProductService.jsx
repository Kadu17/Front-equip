import axios from 'axios';

const API_URL = 'https://api.mercadolibre.com/';

const ProductService = {
  getProducts: (search, offset) => {
    return axios.get(`${API_URL}sites/MLB/search?q=${search}&offset=${offset}&limit=20`);
  },
  getDesc: (itemId) => {
    return axios.get(`${API_URL}items/${itemId}/description`);
  },
  getCategory: (categId) => {
    return axios.get(`${API_URL}categories/${categId}`);
  },
  getProduct: (id) => {
    return axios.get(`${API_URL}items/${id}`);
  },
  getProductsByBrand: (param, category_id) => {
    return axios.get(`${API_URL}sites/MLB/search?q=${param}?BRAND=${category_id}`);
  },
};

export default ProductService;

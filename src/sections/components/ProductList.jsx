import React, { useState, useEffect } from 'react';
import ProductService from './ProductService';
import fetchProducts from '../../Api/fetchProducts';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const search = 'https://api.mercadolibre.com/sites/MLB/search?seller_id=204455380'; // Defina o termo de busca desejado
  const offset = 0;  // Defina o offset desejado

  useEffect(() => {
    setLoading(true);
    fetchProducts()
      .then((response) => {
        setProducts(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar produtos:', error);
        setLoading(false);
      });
  }, [search, offset]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.thumbnail} alt={product.title} />
            <p>Preço: {product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

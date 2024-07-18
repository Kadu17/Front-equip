import { useState, useEffect } from 'react';
import fetchProducts from '../../Api/fetchProducts';
import "./ProductList.css"
import Pagination from './Pagination';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 50
  const totalPages =  Math.ceil(1000 / productsPerPage)
  useEffect(() => {
    setLoading(true);
    const offSet = (currentPage - 1) * productsPerPage
    fetchProducts(offSet, productsPerPage)
      .then((response) => {
        setProducts(response.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar produtos:', error);
        setLoading(false);
      });
  }, [currentPage]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul className='products-container'>
        {products.map((product) => (
          <li key={product.id} className='product-item'>
            <h2>{product.title}</h2>
            <div>
            <img src={product.thumbnail} alt={product.title} />
            </div>
           
            <div className='product-price-container'>
              <span className='product-price'>R${product.price}</span>
              <button className="View-product">
                  Ver produto
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className='pagination-container'> 
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} products={products}/>
      </div>
      
    </div>
  );
};

export default ProductList;

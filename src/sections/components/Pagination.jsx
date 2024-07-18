import "./Pagination.css"

const Pagination = ({ totalPages, currentPage, onPageChange, products }) => {

    return (
      <nav className="pagination">
        <ul>
          {currentPage > 1 && (
            <li>
              <button onClick={() => onPageChange(currentPage - 1)}>Voltar</button>
            </li>
          )}
         
          {products.length > 1 && (
            <li>
              <button onClick={() => onPageChange(currentPage + 1)}>Próximo</button>
            </li>
          ) }
        </ul>
      </nav>
    );
  };
  
  export default Pagination;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../components/PesquisaStyles.module.css';
import lupa from '../../assets/lupa.png';

function Pesquisa() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/produtos?q=${encodeURIComponent(query)}`);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={styles.pesquisa}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          name="pesquisa"
          id="buscar"
          placeholder="Pesquise aqui..."
          className={styles.buscar}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <img
          src={lupa}
          alt="lupa"
          className={styles.lupa}
          onClick={handleSearch}
        />
      </div>
    </div>
  );
}

export default Pesquisa;

// Função assíncrona que realiza uma requisição para obter produtos com base em uma consulta
const fetchProducts = async (offset, limit) => {
    // Faz uma requisição para a API do Mercado Livre passando a consulta como parâmetro
    if(offset && limit) {
      const response = await fetch(
        `https://api.mercadolibre.com/sites/MLB/search?seller_id=204455380&offset=${offset}&limit=${limit}`
      );

      const data = await response.json();
      return data;
    }

    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLB/search?seller_id=204455380`
    );

    const data = await response.json();
    return data;
   
  
    // Extrai os dados da resposta da requisição
   
  
    // Retorna os resultados dos produtos obtidos
    
  };
  
  export default fetchProducts;
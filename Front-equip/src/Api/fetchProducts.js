const fetchProducts = async (offset = 0, limit = 50, query = '') => {
  // Cria a URL base para a requisição
  let url = `https://api.mercadolibre.com/sites/MLB/search?seller_id=204455380&offset=${offset}&limit=${limit}`;
  
  // Adiciona o parâmetro de busca se houver consulta
  if (query) {
      url += `&q=${encodeURIComponent(query)}`;
  }

  // Faz a requisição à API
  const response = await fetch(url);
  const data = await response.json();

  // Retorna os dados da API
  return data;
};

export default fetchProducts;

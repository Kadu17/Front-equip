import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './Carousel.css';
import fetchProducts from '../../Api/fetchProducts';

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  useEffect(() => {
    setLoading(true);
    fetchProducts()
      .then((response) => {
        console.log(response)
        setProducts(response.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar produtos:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <div className='carousel-wrapper'>
     <button className="embla__button embla__button--prev" onClick={scrollPrev}>
        &larr;
      </button>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {products.slice(0, 10).map((product) => (
            <div className="embla__slide" key={product.id}>
              <div className="product-card">
                <div className='image-block'>
                  <img src={product.thumbnail} alt='imagem' className="product-image" />
                </div>
                <div className="product-info">
                  <h2>{product.title}</h2>
                  <p>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                  <p>{product.description}</p>
                </div>
                <button className="View-product">
                  Ver produto
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
     
      <button className="embla__button embla__button--next" onClick={scrollNext}>
        &rarr;
      </button>

    </div>
  );
}

export default EmblaCarousel;

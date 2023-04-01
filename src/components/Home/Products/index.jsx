import React, { useEffect, useState } from 'react';
import { API_URL } from '../../../constants/urls';
import * as S from './index.styled';
import ProductCard from './ProductCard';
import LoadingIndicator from '../../defaultStyles/LoadingIndicator';
import Search from './Search';

function ProductsDisplayed() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getProducts(url, search = '') {
      try {
        setIsLoading(true);
        const response = await fetch(`${url}?search=${search}`);
        const results = await response.json();
        setProducts(results);
        setFilteredProducts(results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getProducts(API_URL);
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    return <div>There was an error.</div>;
  }

  if (products.length <= 0) {
    return <div>No products to show.</div>;
  }

  return (
    <>
      <Search onSearch={handleSearch} minLength={3} />
      <S.productsContainer>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </S.productsContainer>
    </>
  );
}

export default ProductsDisplayed;

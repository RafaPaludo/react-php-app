import React, { useEffect, useState } from 'react';
import TableProducts from "./TableProducts";
import AddProduct from "./AddProduct";
import { Container, Flex, Skeleton } from "@radix-ui/themes";
import './style.css';
import axios from 'axios';

function PageHome () {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get('http://localhost/php-server/api.php?table=products');
      setTimeout(() => {
        setProducts(data);
        setLoading(false);
      }, 400);
    } catch (error) {
      setError('Erro ao buscar os produtos');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <>
      <Container size="4" maxWidth="none" align="center" p="5">
        {
          loading ?
          <>
            <Skeleton width="160px" height="31px" mb="2"></Skeleton>
            <Skeleton width="100%" height="100%" minHeight="500px" mb="2"></Skeleton>
          </>
          :
          <>
            <Flex mb="4">
              <AddProduct onAdd={fetchProducts} />
            </Flex>
            
            <TableProducts products={products} onAdd={fetchProducts} />
          </>
        }
      </Container>
    </>
  );
}

export default PageHome;
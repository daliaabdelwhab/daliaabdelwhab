import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Spinner, Form } from 'react-bootstrap';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchProducts = () => {
      setLoading(true);
      axios.get(`https://dummyjson.com/products/search?q=${searchQuery}`)
        .then(response => {
          setProducts(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.log(error);
          setLoading(false);
        });
    };

    fetchProducts();
  }, [searchQuery]);

  const handleSearch = e => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="container">
      <h1>Products List</h1>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Search for products"
          value={searchQuery}
          onChange={handleSearch}
        />
      </Form.Group>
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <div className="row">
          {products.map(product => (
            <div className="col-md-4 mb-4" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <Card>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
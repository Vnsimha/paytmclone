import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }}>
          <h1>Welcome to Paytm Clone</h1>
          <p>A simple MERN stack application.</p>
          <Button variant="primary" href="/login">Login</Button>
          <Button variant="secondary" href="/register">Register</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
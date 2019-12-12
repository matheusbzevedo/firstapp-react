import React from 'react';
import NavBar from './components/NavBar';
import CarouselHome from './components/CarouselHome';
import CardsProducts from './components/CardsProducts';
import CardsDigimon from './components/CardsDigimon';
import { Row, Container, Col } from 'react-bootstrap';

function App() {
    return (
        <>
            <NavBar/>
            <CarouselHome/>
            <br></br>
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <h1 class="center">Produtos</h1>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <CardsProducts/>
                </Row>
                <br></br>
                <Row>
                    <CardsDigimon/>
                </Row>
            </Container>
        </>
    );
}

export default App;
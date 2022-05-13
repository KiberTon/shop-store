import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import bigStar from '../assets/bigStar.png'

const DevicePage = () => {
    const device = { id: 1, name: 'Iphone 12 pro', price: 24000, rating: 5, img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png' }
    const description = [
        { id: 1, title: 'Оперативная память', description: '5 гб' },
        { id: 2, title: 'Камера', description: '12 mp' },
        { id: 3, title: 'Процессор', description: 'Pentium 3' },
        { id: 4, title: 'Кол-во ядер', description: '2' },
        { id: 5, title: 'Аккумулятор', description: '4000 mA' }
    ]
    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image height={300} width={300} src={device.img} />
                </Col>
                <Col md={4}>
                    <Row className='align-items-center'>
                        <h2>{device.name}</h2>
                        <div
                            className='d-flex align-items-center justify-content-center'
                            style={{ background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64 }}>
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className='d-flex align-items-center justify-content-around'
                        style={{ height: 300, width: 300, fontSize: 35, border: '5px solid lightgray' }}>
                        <h3>От: {device.price} руб.</h3>
                        <Button variant={'outline-dark'}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='m-3'>
                <h1>Характеристики</h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding:10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;
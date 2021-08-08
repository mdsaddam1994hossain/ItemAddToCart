import React from 'react';
import { Row, Col } from 'antd';
import Header from './Components/Header';
import Main from './Components/Main';
import data from '../data';




const Home = () => {

   const {products}  = data;

 

    return (
        <div>
            <Row>

                <Col xs={{offset:2,span:20}}>
                    <Header />
                    <Main products={products}  />
                </Col>

            </Row>




        </div>
    );
};

export default Home;
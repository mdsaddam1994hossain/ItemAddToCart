import React, { useState } from 'react';
import { Row, Col } from 'antd';
import Header from './Components/Header';
import Main from './Components/Main';
import data from '../data';
import Basket from './Components/Basket';
import Test from './Components/Test';
// import { Link } from 'react-router-dom'




const Home = () => {

    const [cartItems, setCartItems] = useState([]);

    const { products } = data;

    const onAdd = (product) => {

        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }

    };

    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
          } else {
            setCartItems(
              cartItems.map((x) =>
                x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
              )
            );
          }
    };



    return (
        <div>
            <Row>

                <Col xs={{ offset: 2, span: 20 }}>
                    <Header countCartItems={cartItems.length} />


                    <Main products={products} onAdd={onAdd} />

                    <Basket
                        cartItems={cartItems}
                        onAdd={onAdd}
                        onRemove={onRemove}
                    >
                        
                    </Basket>

                    <Test  />
                </Col>



            </Row>




        </div>
    );
};

export default Home;
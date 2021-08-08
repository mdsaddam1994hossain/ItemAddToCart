import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const Product = (props) => {
    const {product} = props
    return (
        <div>

            <Card
                hoverable
                style={{ width: 240,height:"300px",margin:"20px" }}
                cover={<img alt="example" src={product.image} height="200px" />}
            >
                <Meta title={product.name} description={product.price} />
                
            </Card>
            <div style={{background:"tomato",margin:"20px",textAlign:"center"}}>ADD TO CART</div>

        </div>
    );
};

export default Product;
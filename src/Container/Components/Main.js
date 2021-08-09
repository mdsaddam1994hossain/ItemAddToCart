import React from 'react';

import Product from './Product';



const Main = (props) => {
  const {products,onAdd} = props;
  
    return (
        <div>

            <h2>Products</h2>

           <div style={{display:"flex"}}>
           {
             products.map((product,index)=>{
                 return(
                     <Product product={product} key={index} onAdd={onAdd} />
                 )
             })  
           }
           </div>




        </div>
    );
};

export default Main;
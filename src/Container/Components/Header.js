import React from 'react';

const Header = (props) => {
    return (
        <div className="header">
            <div>
                <a href="#/">
                    <h1 className="h1">Small Shopping Cart</h1>
                </a>
            </div>
            <div>
               
                <a href="#" className="a">Cart-{props.countCartItems}</a>
                <a href="#/signin" className="a"> SignIn</a>
            </div>
        </div>
    );
};

export default Header;
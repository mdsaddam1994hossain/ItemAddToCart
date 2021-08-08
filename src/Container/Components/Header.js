import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div>
                <a href="#/">
                    <h1 className="h1">Small Shopping Cart</h1>
                </a>
            </div>
            <div>
                {/* <a href="#/cart">
                    Cart{' '}
                    {props.countCartItems ? (
                        <button className="badge">{props.countCartItems}</button>
                    ) : (
                        ''
                    )}
                </a>{' '} */}
                <a href="#" className="a">Cart</a>
                <a href="#/signin" className="a"> SignIn</a>
            </div>
        </div>
    );
};

export default Header;
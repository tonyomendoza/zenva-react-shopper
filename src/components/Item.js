import React from 'react';
import PropTypes from 'prop-types';

import '../css/Item.css';

const Item = ( { item, children, page } ) => {
    let dollarUSLocale = Intl.NumberFormat('en-US');

    function render() {
        return (
            <div className="Item">
                <div className="Item-left">
                    <div className="Item-image"/>
                    <div className="Item-title">
                        {item.name}
                    </div>
                    <div className="Item-description">
                        {item.descriptions}
                    </div>
                </div>
                <div className="Item-right">
                    <div className="Item-price">
                        ${item.price} 
                    </div>
                    {children}
                </div>
            </div>
        )
    }
    
    function cart_render() {
        return (
            <div className="Item">
                <div className="Item-left">
                    <div className="Item-image"/>
                    <div className="Item-title">
                        {item.name}
                    </div>
                    <div className="Item-description">
                        {item.descriptions}
                    </div>
                </div>
                <div className="Item-right">
                    <div className="Item-price">
                        ${item.price}
                    </div>
                    <div className="Item-price">
                        x {item.count}
                    </div>
                    <div className="Item-price">
                        = ${dollarUSLocale.format(item.price * item.count)}
                    </div>
                    {children}
                </div>
            </div>
        )
    }

    if(page === "cart")
        return cart_render();
    else
        return render();
};

Item.propTypes = {
    item: PropTypes.object.isRequired,
    onAddToCart: PropTypes.func.isRequired
};

export default Item;
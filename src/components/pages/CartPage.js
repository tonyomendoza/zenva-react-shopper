import React from 'react';
import PropTypes from 'prop-types';
import Item from '../../components/Item';
import '../../css/CartPage.css';

function CartPage({ items, onAddOne, onRemoveOne, page }) {
    let dollarUSLocale = Intl.NumberFormat('en-US');

    if (items.length === 0) {
        return (
            <div>
                No items in cart.
            </div>
        )
    }

    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i].price * items[i].count;
    }

    return (
        <div>
            <ul className="CartPage-items">
                {items.map(item =>
                    <li key={item.id} className="CartPage-item">
                        <Item item={item} page={page}>
                            <div className="CartItem-Controls">
                                <button className="CartItem-removeOne" onClick={() => onRemoveOne(item)}>
                                    &ndash;
                                </button>
                                <span className="CartItem-count">{item.count}</span>
                                <button className="CartItem-addOne" onClick={() => onAddOne(item)}>
                                    +
                                </button>
                            </div>
                        </Item>
                    </li>
                )}
            </ul>
            <h3 className='mt-5'>
                Subtotal = ${dollarUSLocale.format(total)}
            </h3>
        </div>
    );
}

CartPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddOne: PropTypes.func.isRequired,
    onRemoveOne: PropTypes.func.isRequired
};

export default CartPage;
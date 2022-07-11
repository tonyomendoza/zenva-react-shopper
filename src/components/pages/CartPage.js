import React from 'react';
import PropTypes from 'prop-types';
import Item from '../../components/Item';
import '../../css/CartPage.css';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

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
                                <Button className="CartItem-removeOne secondary" onClick={() => onRemoveOne(item)}>
                                    <i class="fa-solid fa-minus"></i>
                                </Button>
                                <span className="CartItem-count">{item.count}</span>
                                <Button className="CartItem-addOne secondary" onClick={() => onAddOne(item)}>
                                    {/* + */}
                                    <i class="fa-solid fa-plus"></i>
                                </Button>
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
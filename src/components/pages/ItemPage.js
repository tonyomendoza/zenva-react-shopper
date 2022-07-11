import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import '../../css/ItemPage.css';

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

function ItemPage({items, onAddToCart}) {
    return (
      <ul className="ItemPage-items">
          {items.map(item=>
                <li key={item.id} className="ItemPage-item">
                    <Item item={item} onAddToCart={() => onAddToCart(item)}>
                        <Button className="Item-addToCart primary"  onClick={() => onAddToCart(item)}>
                            Add to cart
                        </Button>
                    </Item>
                </li>
            )}
      </ul>
    );
}

ItemPage.propTypes = {
    items: PropTypes.array.isRequired
};

export default ItemPage;
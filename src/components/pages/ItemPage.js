import React from 'react';
import PropTypes from 'prop-types';
import Item from '../../components/Item';
import '../../css/ItemPage.css';

function ItemPage({items, onAddToCart}) {
    return (
      <ul className="ItemPage-items">
          {items.map(item=>
                <li key={item.id} className="ItemPage-item">
                    <Item item={item} onAddToCart={() => onAddToCart(item)} />
                </li>
            )}
      </ul>
    );
}

ItemPage.propTypes = {
    items: PropTypes.array.isRequired
};

export default ItemPage;
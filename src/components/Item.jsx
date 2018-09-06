import React, { Component } from 'react';

class Item extends Component {
    render() {
        const { itemProduct } = this.props
        return (
            <div>
                <p>{itemProduct.product}</p>
                <p>{itemProduct.qty}</p>
                <p>{itemProduct.price}</p>
                <p><strong>Total:</strong> {(itemProduct.qty * itemProduct.price).toFixed(2)}</p>
            </div>
        );
    }
}

export default Item;
import React, { Component } from 'react'

class Item extends Component {
    render() {
        const { itemProduct } = this.props
        return (
            <tr>
                <td>{itemProduct.product}</td>
                <td>{itemProduct.qty}</td>
                <td>{itemProduct.price}</td>
                <td className="text-right"> {(itemProduct.qty * itemProduct.price).toFixed(2)}</td>
            </tr>
        );
    }
}

export default Item
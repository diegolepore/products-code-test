import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item'
import GrandTotal from './GrandTotal'
import { Table} from 'reactstrap';

class List extends Component {
    render() {
        const { products, productsList } = this.props
        return (
            <div>
                <h2>Items</h2>
                <Table>
                    <thead>
                        <tr>
                            <th><strong>Product</strong></th>
                            <th><strong>Quantity</strong></th>
                            <th><strong>Price</strong></th>
                            <th className="text-right"><strong>Total</strong></th>
                        </tr>
                    </thead>
                    <tbody>      
                        {(products.map((item) => (
                            <Item itemProduct={productsList[item]} key={item} />
                        )))}

                    
                        <GrandTotal />
                        

                    </tbody>
                </Table>
            </div>
        )
    }
}

function mapStateToProps ({ productsList }) {
  return {
    productsList,
    products: Object.keys(productsList),
  }
}

export default connect(mapStateToProps)(List)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/list.css'
import Item from './Item'
import GrandTotal from './GrandTotal'
import { Table } from 'reactstrap';

class List extends Component {
    render() {
        const { products, productsList } = this.props
        return (
            <div className="List">
                <h2>Items</h2>
                <div className="outerList">
                    <Table> 
                        <thead>
                            <tr>
                                <th>Product name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th className="text-right">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(products.map((item) => {
                                return (
                                    <Item itemProduct={productsList[item]} key={item} />
                                )
                                }
                            ))}
                            <GrandTotal />
                        </tbody>   
                    </Table>
                </div>
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
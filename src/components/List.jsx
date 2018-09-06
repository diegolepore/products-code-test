import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item'
import GrandTotal from './GrandTotal'

class List extends Component {
    
    render() {
        const { products, productsList } = this.props
        return (
            <div>
                List component
                <ul>               
                    {(products.map((item) => (
                            <li className='product-item' key={item}>
                                <Item itemProduct={productsList[item]} />
                            </li>      
                        )))
                    }
                </ul>

                <GrandTotal />

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
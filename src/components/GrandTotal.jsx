import React, { Component } from 'react'
import { connect } from 'react-redux'

class GrandTotal extends Component {
    calculateGrandTotal = () => {
        const { productsList, products } = this.props
        let totalsArr = []
        products.map((item) => totalsArr.push( parseInt((productsList[item].qty * productsList[item].price).toFixed(2), 10)))
        return(
            <div>
                {totalsArr.reduce((a,b) => a + b)}
            </div>
        ) 
    }
    render() {
        return (
            <tr>
                <td colSpan="4" className="text-right">{this.calculateGrandTotal()}</td>
            </tr>
        );
    }
}

function mapStateToProps ({ productsList }) {
  return {
    productsList,
    products: Object.keys(productsList),
  }
}

export default connect(mapStateToProps)(GrandTotal)
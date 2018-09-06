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
            <div>
                Grand Total
                {this.calculateGrandTotal()}
            </div>
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
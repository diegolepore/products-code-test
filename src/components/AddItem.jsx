import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addProduct } from '../actions/list'
import idGenerator from 'react-id-generator'

class AddItem extends Component {

    state = {
        product: "",
        qty: "",
        price: ""
    }

    

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const htmlId = idGenerator()
        const { dispatch } = this.props
        const { product, qty, price } = this.state

        dispatch(addProduct({htmlId, product, qty, price}))   

        this.setState(() => ({
            product: "",
            qty: "",
            price: "",
        }))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                        type="text" 
                        value={this.state.product}
                        name="product" 
                        placeholder="Product name" 
                        required
                        onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <input 
                        type="text" 
                        value={this.state.qty}
                        name="qty" 
                        placeholder="quantity" 
                        required
                        onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <input 
                        type="text" 
                        value={this.state.price}
                        name="price" 
                        placeholder="price" 
                        required
                        onChange={this.handleChange}
                        />
                    </div>
                    
                    <div>
                        <button type="submit">Add</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect()(AddItem)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addProduct } from '../actions/list'
import idGenerator from 'react-id-generator'
import { Button, Form, FormGroup, Input } from 'reactstrap';

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
                <h2>Add new item</h2>
                <Form inline onSubmit={this.handleSubmit}>

                    <FormGroup>
                        <Input 
                            type="text" 
                            value={this.state.product}
                            name="product" 
                            placeholder="Product name" 
                            required
                            onChange={this.handleChange}
                            />
                    </FormGroup>

                    <FormGroup>
                        <Input 
                        type="text" 
                        value={this.state.qty}
                        name="qty" 
                        placeholder="quantity" 
                        required
                        onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Input 
                        type="text" 
                        value={this.state.price}
                        name="price" 
                        placeholder="price" 
                        required
                        onChange={this.handleChange}
                        />
                    </FormGroup>
                    
                    <Button type="submit">Add</Button>
                </Form>
            </div>
        )
    }
}

export default connect()(AddItem)
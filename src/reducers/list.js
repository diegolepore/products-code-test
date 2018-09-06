import { ADD_PRODUCT } from '../actions/list'

let initialState = {
    "1": {
        "product": "Widget1",
        "qty": 10,
        "price": 11.23
    },
    "2": {
        "product": "Widget1",
        "qty": 2,
        "price": 21.23
    },
    "3": {
        "product": "Widget1",
        "qty": 3,
        "price": 31.23
    },
    "4": {
        "product": "Widget1",
        "qty": 4,
        "price": 41.23
    },
    "5": {
        "product": "Widget1",
        "qty": 5,
        "price": 51.23
    }
}

export default function productsList(state = initialState, action) {
    switch(action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                [action.product.htmlId] : {
                    product: action.product.product,
                    qty: action.product.qty,
                    price: action.product.price,
                }
            }
        default :
            return state
    }
}
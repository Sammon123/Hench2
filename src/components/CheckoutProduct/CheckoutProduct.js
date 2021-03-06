import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from '../StateProvider'


const CheckoutProduct = ({ id, title, image, price, hideButton }) => {

    const [{ cart }, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct-image" src={image} alt="" />
            <div className="checkoutProduct-info">
                <p>{title}</p>
                <p className="checkoutProduct-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                {!hideButton && (
                    <button onClick={removeFromCart}>Remove From Cart</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct

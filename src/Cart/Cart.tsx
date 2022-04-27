import React from 'react'
import CartItem from '../CartItem/CartItem'
import _ from 'lodash'
//types
import { CartItemType } from '../hooks'
//style
import { Wrapper } from './Cart.style';

interface Props {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}
const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {

    const calculateTotal = (cartItems: CartItemType[]) =>
        cartItems.reduce((acc: number, item) => acc + item.amount * item.price, 0).toFixed(2);


    return (
        <Wrapper>
            <h2> your shopping cart</h2>
            {cartItems.length === 0 ? <p>your cart is empty</p> : null}
            {_.map(cartItems, (item) => <CartItem key={item.id}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart} />
            )}
            <p>total: ${calculateTotal(cartItems)}</p>
        </Wrapper>
    )
}

export default Cart
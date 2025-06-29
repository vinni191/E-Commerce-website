import React, { useContext } from "react";
import "./CartItem.css";

import removeIcon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";

const CartItems = () => {
  const { cartItems, all_product, removeFromCart,getTotalCartAmount } = useContext(ShopContext);
  console.log(cartItems);
  return (
    <div className="cart-items">
      <div className="added-items">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p className="title">Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          console.log(e.id);
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img className="cartitems-image" src={e.image} alt="" />
                <p className="cartitems-name">{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="removeItem"
                  src={removeIcon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      </div>
      <div className="cartCheckOut">
        <div className="checkout-left">
          <div className="subtotal">
            <p>Cart Total</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="shipping">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <p>Total ${getTotalCartAmount()}</p>
          <Link to='/payment'><button className="checkout-button">Proceed To Checkout</button></Link>
        </div>
        <div className="checkout-right">
          <p>If you have a promo code, Enter here</p>
          <div className="promocode">
            <input type="text" />
            <button>PROMO</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

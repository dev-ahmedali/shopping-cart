import { Component } from 'react';
import { connect } from 'react-redux';
import { addItemQty, removeFromCart, removeItemQty } from '../actions';
import CartItem from './CartItem';

class Cart extends Component {
  render() {
    const { cartItems, removeFromCart, addItemQty, removeItemQty } = this.props;
    console.log(cartItems);
    return (
      <div>
        <div>
          {cartItems.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              cartItem={cartItem}
              removeFromCart={removeFromCart}
              addItemQty={addItemQty}
              removeItemQty={removeItemQty}
            />
          ))}
        </div>
        <div className="flex justify-center items-center text-center">
          <div className="text-xl font-semibold">
            <p>Total Item</p>
            <p className="text-5xl">{cartItems.length} Items</p>
          </div>
        </div>
        <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
          <div className="flex justify-between items-center text-center">
            <div className="text-xl font-semibold">
              <p>Temporary Amount</p>
              <p className="text-5xl">
                ${cartItems.reduce((acc, { price, quantity }) => {
                  let qty = parseInt(quantity);
                  let item = parseFloat(price).toFixed(2);
                  let accumulator = parseFloat(acc).toFixed(2);
                  let result = parseFloat(item) * qty + parseFloat(accumulator);
                  return parseFloat(result).toFixed(2);
                }, 0)}
              </p>
            </div>
            <div className="text-xl font-semibold">
              <p>Total Price (including VAT)</p>
              <p className="text-5xl">
                ${cartItems.length > 0
                  ? parseFloat(
                      cartItems.reduce(
                        (acc, { price, quantity }) => {
                          let qty = parseInt(quantity);
                          let item = parseFloat(price).toFixed(2);
                          let accumulator = parseFloat(acc).toFixed(2);
                          let result =
                            parseFloat(item) * qty + parseFloat(accumulator);
                          return parseFloat(result).toFixed(2);
                        },
                        0
                      )
                    ) + 2
                  : 0}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    removeFromCart: (product) => dispatch(removeFromCart(product)),
    addItemQty: (product) => dispatch(addItemQty(product)),
    removeItemQty: (product) => dispatch(removeItemQty(product)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

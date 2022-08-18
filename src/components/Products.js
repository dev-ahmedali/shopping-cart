import { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import CartProduct from '../components/CartProduct';

class Products extends Component {
  render() {
    const { products, addToCart } = this.props;
    return (
        <div>
          {products.length > 0 ? (
            products.map((product) => (
                <CartProduct
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                />
            ))
          ) : (
            <p className="text-center">No Product Available</p>
          )}
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);

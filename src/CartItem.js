import React from 'react';

class CartItem extends React.Component {
  constructor () {
    super();
    this.state = {
      price: 999,
      title: 'Mobile Phone',
      qty: 1,
      img: ''
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    this.testing();
  }


  testing () {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('done');
      }, 5000);
    })

    promise.then(() => {
      // setState acts like a synchronus call
      this.setState({ qty: this.state.qty + 10 });

      this.setState({ qty: this.state.qty + 10 });

      this.setState({ qty: this.state.qty + 10 });

      console.log('state', this.state);
    });
  }


  increaseQuantity = () => {
    // this.state.qty += 1;   // This will increase the value but not update the data in component
    // console.log('this', this.state);

    // If setState() is called, then component is rerendered after updating values
            // setState form 1  -- Use if previous state data is not required eg. title
    // this.setState({
    //   qty: this.state.qty + 1
    // }, () => {
    //   console.log('this.state', this.state);
    // });

            // setState form 2 - if prevState required use this
    this.setState((prevState) => {
        return {
          qty: prevState.qty + 1
        }
      }, () => {
        console.log('this.state', this.state);
      });
  }

  decreaseQuantity = () => {
    const { qty } = this.state;

    if (qty === 0) {
      return;
    }
    // setState form 2 - if prevState required use this
    this.setState((prevState) => {
      return {
        qty: prevState.qty - 1
      }
    });
  }


  render () {
    const { price, title, qty } = this.state;
    console.log('render');
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price} </div>
          <div style={ { color: '#777' } }>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/992/992651.svg"
              onClick={this.increaseQuantity}

            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/1665/1665612.svg"
              onClick={this.decreaseQuantity}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;
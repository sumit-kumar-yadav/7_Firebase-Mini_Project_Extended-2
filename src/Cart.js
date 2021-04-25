import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
  constructor () {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: '',
          id: 1
        },
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 10,
          img: '',
          id: 2
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 4,
          img: '',
          id: 3
        }
      ]
    }
  }
  render () {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
        //   <CartItem qty={1} price={99} title={"watch"} img={''} />
        
            <CartItem
              product={product}
              key={product.id}
        //   fun={() => console.log('Even pass function, jsx, component, etc')}
        //   isLoggedIn={false}
        //   jsx={<h1>Pass jsx</h1>}
        //   comp={<CartItem />}
            />
          )
        })}
      </div>
    );
  }
}

export default Cart;
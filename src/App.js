import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase';

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      products: [],
      loading: true
    }
    this.db = firebase.firestore();
  }

  // Reading data from firebase when component is mounted (Updates automatically)
  componentDidMount() {
    this.db
      .collection("products")
      // .where('price', '==', 999)
      // .where('title', '==', 'Mug')
      .orderBy('price', 'desc')  // Sort in desc order. asc -->> in asc order
      .onSnapshot(snapshot => {  // onSnapshot func is called whenever data changes in firebase
        const products = snapshot.docs.map(doc => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({ products: products, loading: false });
      });
  }



  handleIncreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    // products[index].qty += 1;

    // this.setState({
    //     products
    // })

    const docRef = this.db.collection("products").doc(products[index].id);

    docRef
      .update({qty: products[index].qty + 1})
      .then(() => {
        console.log("Updated sucessfully");
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleDecreaseQuantity = (product) => {
    console.log('Heyy please dec the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    // products[index].qty -= 1;

    // this.setState({
    //   products
    // })

    const docRef = this.db.collection("products").doc(products[index].id);

    docRef
      .update({qty: products[index].qty - 1})
      .then(() => {
        console.log("Updated sucessfully");
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleDeleteProduct = (id) => {
    const { products } = this.state;

    // const items = products.filter((item) => item.id !== id); // It will return the array whose item.id !== id

    // this.setState({
    //   products: items
    // })

    const docRef = this.db.collection("products").doc(id);

    docRef
      .delete()
      .then(() => {
        console.log("Deleted sucessfully");
      })
      .catch(err => {
        console.log(err);
      });

  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })
           // OR
    // for(let product of products){
    //   count += product.qty;
    // }

    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price
      return '';
    })

    return cartTotal;
  }

  addProduct = () => {
    this.db
      .collection("products")
      .add({
        img: "",
        price: 900,
        qty: 3,
        title: "Washing Machine"
      })
      .then(docRef => {
        console.log("Product has been added, docRef is: ", docRef);

        docRef.get().then(snapshot => {
          console.log("Product has been added", snapshot.data());
        });

      })
      .catch(error => {
        console.log('Error: ', error);
      });
  };


  render () {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <button onClick={this.addProduct} style={{ padding: 20, fontSize: 20 }}>
          Add a Product
        </button>
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products...</h1>}
        <div style={ {padding: 10, fontSize: 20} }>TOTAL: {this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;

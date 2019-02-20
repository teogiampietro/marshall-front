import React, { Component } from 'react';
import './style.css';

class ProductList extends Component {

  constructor(props) {
    super(props);
    this.state = { name: '', price: 0 }
    this.nameInput = React.createRef();
    this.priceInput = React.createRef();
  }

  componentWillMount() {
    this.props.getProducts();
  }

  changeName = evt => {
    this.setState({ name: evt.target.value })
  }

  changePrice = evt => {
    this.setState({ price: evt.target.value })
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const { addProduct } = this.props
    const { name, price } = this.state
    addProduct({ name, price })
  }

  getProductList = () => {
    const { products } = this.props
    return products.map(item => (
      <div key={item.id}>
        {item.name + ' $' + item.price}
      </div>
    ))
  }

  render() {
    return (
      <div>
        <h1>Showing Products</h1>
        {this.getProductList()}
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" ref={this.nameInput} onChange={this.changeName} />
          </label>
          <label>
            Price:
            <input type="number" ref={this.priceInput} onChange={this.changePrice} />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

export default ProductList;

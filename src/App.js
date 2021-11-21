
import React, { Component } from 'react';
import { Container,Row,Col,Button } from 'react-bootstrap';
import { Route,Routes } from 'react-router-dom';


import Categories from './components/Categories';
import Products from './components/Products';
import Navi from './components/Navi';
import Notfound from './components/NotFound';
import Cartlist from './components/CartList';
class App extends Component {
  
  state = {
    currentCategory : "",
    products : [],
    cart : []
  }

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if(categoryId){
      url += "?categoryId="+categoryId
    }

    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({products : data}))
  }

  componentDidMount(){
      this.getProducts()
  }

  changeCategory = (category) => {
    this.setState({currentCategory : category.categoryName})
    this.getProducts(category.id)
  }
  addCart = (newProduct) => {
    let newCart = this.state.cart;
    let hasProduct = newCart.find(product => product.info.id == newProduct.id)
    if(hasProduct){
      hasProduct.quantity += 1;
    }else{
      newCart.push({info:newProduct,quantity:1});
    }
    this.setState({cart : newCart});
  }
  removeFromCart = (product) => {

  }
  render() {
    return (
      <Container >
        <Navi cart={this.state.cart}/>
        <Row className="mt-2">
          <Col xs={3}>
            <Categories changeCategory={this.changeCategory} currentCategory={this.state.currentCategory}/>
          </Col>
          <Col xs="8">
            <Routes>
              <Route 
                exact
                path="/" 
                element={
                  <Products 
                    currentCategory={this.state.currentCategory} 
                    products={this.state.products} 
                    addCart={this.addCart}
                    />
                }

              />
              <Route 
                  exact 
                  path="/cart"
                  element={
                    <Cartlist cart={this.state.cart}/>
                  }
                />
              <Route exact path="*" element={<Notfound/>} />
            </Routes>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

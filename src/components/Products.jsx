import React, { Component } from 'react';
import Producttable from './ProductTable';
class Products extends Component {
    render() {
        return (
            <>
                <h3>Ürünler - {this.props.currentCategory}</h3>
                <Producttable 
                        products={this.props.products}
                        addCart={this.props.addCart}
                    />
            </>
        );
    }
}

export default Products;

import React, { Component } from 'react';
import {Badge, NavDropdown} from 'react-bootstrap';

class CartDropdownItem extends Component {
    render() {
        return (
            <NavDropdown.Item>
                {this.props.product.info.productName}  
                <Badge className="justify-content-end" >{this.props.product.quantity}</Badge>
            </NavDropdown.Item>
        );
    }
}

export default CartDropdownItem;

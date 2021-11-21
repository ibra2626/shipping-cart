import React, { Component } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import CartDropdownItem from './CartDropdownItem';
class CartDropdown extends Component {
    renderDropdown = () => {
        return (
            <NavDropdown title={"Sepetim " + this.props.cart.length} id="basic-nav-dropdown">
                {
                    this.props.cart.length > 0
                        ?
                        this.props.cart.map(product => (
                            <CartDropdownItem product={product} key={product.info.id} />
                        ))
                        :
                        <div className="text-center m-4">
                            Sepetiniz boş
                        </div>
                }
                <NavDropdown.Item>
                    <h6>
                        <Link to="/cart">Sepeti Görüntüle</Link>
                    </h6>
                </NavDropdown.Item>
            </NavDropdown>
        );
    }
    render() {
        return (
            this.renderDropdown()
        );
    }
}

export default CartDropdown;

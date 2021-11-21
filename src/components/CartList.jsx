import React, { Component } from 'react';
import {Table} from 'react-bootstrap';

class Cartlist extends Component {
    render() {
        return (
            <div>
            <h3>Sepetim</h3>
            <Table>
                <thead>
                    <tr>
                        <th>Ürün ID</th>
                        <th>Ürün Adı</th>
                        <th>Ürün Fiyatı</th>
                        <th>Stoktaki Ürün</th>
                        <th>Adet</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.cart.map(product => (
                            <tr>
                                <td>{product.info.id}</td>                    
                                <td>{product.info.productName}</td>                    
                                <td>{product.info.unitPrice}</td>                    
                                <td>{product.info.unitsInStock}</td>                    
                                <td>{product.quantity}</td>                    
                            </tr>
                        ))
                    }
                    
                </tbody>
            </Table>
                
            </div>
        );
    }
}

export default Cartlist;

import React, { Component } from 'react';
import {Table,Button} from 'react-bootstrap';
class Producttable extends Component {

    render() {
        return (
            
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Ürün ID</th>
                        <th>Ürün Adı</th>
                        <th>Ürün Fiyatı</th>
                        <th>Stoktaki Ürün</th>
                        <th>İşlemler</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.products.map(product => {
                            return (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.productName}</td>
                                    <td>{product.unitPrice}</td>
                                    <td>{product.unitsInStock}</td>
                                    <td><Button size="sm" onClick={() => this.props.addCart(product)}>Ekle</Button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        );
    }
}

export default Producttable;

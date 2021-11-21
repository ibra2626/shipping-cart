import React, { Component } from 'react';
import {ListGroup,ListGroupItem} from 'react-bootstrap';
class Categories extends Component {
    state = {
        categories : []
    }
    getCategories = () => {
        fetch("http://localhost:3000/categories")
        .then(response => response.json())
        .then(data => this.setState({categories : data}))
    }

    componentDidMount(){
        this.getCategories();
    }
    render() {
        return (
            <>
                <h3 className="text-center">Kategoriler</h3>
                <ListGroup>
                    {
                        this.state.categories.map(category => {
                            return ( 
                                <ListGroupItem 
                                    onClick={() => this.props.changeCategory(category)} 
                                    key={category.id}
                                    active={category.categoryName === this.props.currentCategory ? true : false}
                                >
                                    {category.categoryName}
                                </ListGroupItem>
                            )
                        })
                    }
                </ListGroup>
            </>
        );
    }
}

export default Categories;

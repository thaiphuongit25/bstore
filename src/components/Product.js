import React, { Component } from 'react';
import '../assets/products.css';
import b86_den from '../assets/images/86-Den-1.jpg'
import b86s_hong from '../assets/images/86s-Hong-1.jpg'

class Product extends Component {
    constructor(props) {
        super(props)
    }

    handleOrder = (e) => {
        this.props.history.push(`order/${e}`)
    }

    render() {
        return (
            <div className="products">
                <div className="b86">
                    <img src={ b86_den } className="b86-den"/>
                    <p>Bphone B86</p>
                    <p>Giá bán: <span className="price">8.990.000 VNĐ</span></p>
                    <button className="order" onClick={() => this.handleOrder('b86_den')}>Order</button>
                </div>
                <div className="b86s">
                    <img src={ b86s_hong } className="b86-hong"/>
                    <p>Bphone B86</p>
                    <p>Giá bán: <span className="price">9.990.000 VNĐ</span></p>
                    <button className="order" onClick={() => this.handleOrder('b86s_hong')}>Order</button>
                </div>
            </div>
        );
    }
}

export default Product;
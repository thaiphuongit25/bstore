import React, { Component } from 'react';
import '../assets/body.css'
import image1 from '../assets/images/product1.png'

const style = {
    backgroundImage: `url(${image1})`
}

class Home extends Component {
    render() {
        return (
            <div className="body">
                <div className="b86" style={ style }>
                    <h1>Bphone 86</h1>
                    <h2>Tiên phong nhiếp ảnh điện toán</h2>
                </div>
            </div>
        );
    }
}

export default Home;
import React, { Component } from 'react';
import b86_den from '../assets/images/86-Den-1.jpg'
import b86s_hong from '../assets/images/86s-Hong-1.jpg'
import '../assets/order.css';

class Order extends Component {
    constructor(props) {
        super(props)
        this.state = {
            typePhone: '',
            name: '',
            fixPrice: 8900000,
            numberPhone: 1
        }
    }

    componentDidMount() {
        let phone
        let name
        switch (this.props.match.params.id) {
            case 'b86_den':
                phone = b86_den
                name = 'b86'
                break;
            case 'b86s_hong':
                phone = b86s_hong
                name = 'b86s'
            default:
                break;
        }
        this.setState({
            typePhone:  phone,
            name: name
        });
    }

    handleChange = (e) => {
        const numberOfPhone = e.target.value
        this.setState({
            numberPhone: numberOfPhone
        });
    }

    formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    changeBphone = (e) => {
        const bphone = e.target.value
        let tmp = null
        switch (bphone) {
            case 'den':
                tmp = b86_den
                break;
            case 'hong':
                tmp = b86s_hong
            default:
                break;
        }
        this.setState({
            typePhone: tmp
        });
    }

    handleBack = (e) => {
        this.props.history.goBack()
    }

    render() {
        return (
            <div className="orderDetail">
                <div className="b86_order">
                    <img src={ this.state.typePhone } className="b86_order_image"/>
                    <button  className="back" onClick={this.handleBack}>Back</button>
                </div>
                <div className="informationOrder">
                    <h1>{ `Bphone ${this.state.name} Đen huyền bí` }</h1>
                    <table>
                        <tr>
                            <td>8.990.000 VNĐ</td>
                            <td>(Giá đã bao gồm VAT)
Giao hàng tận nơi trên toàn quốc, miễn phí vận chuyển. Bảo hành 12 tháng, 1 đổi 1 trong vòng 30 ngày
Tặng tai nghe JBL 1.090.000 VNĐ</td>
                        </tr>
                        <tr>
                            <td>Số lượng đặt mua:</td>
                            <td>
                                <select onChange={this.handleChange}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Loai Bphone:</td>
                            <td>
                                <select onChange={this.changeBphone}>
                                    <option value="den">Den</option>
                                    <option value="hong">Hong</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Giá niêm yết:</td>
                            <td>8.990.000 x { this.state.numberPhone } = { this.formatNumber(this.state.numberPhone*this.state.fixPrice) }</td>
                        </tr>
                        <tr>
                            <td>Thành tiền:</td>
                            <td> { this.formatNumber(this.state.numberPhone*this.state.fixPrice) } VNĐ</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default Order

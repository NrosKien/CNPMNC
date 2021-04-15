import React from 'react'
import loginImg from '../image/userLR.svg';
import './style.css'

class Register extends React.Component {
    render() {
        return (
            <div className="container" ref={this.props.containerRef}>
                <div className="header">Đăng ký</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg}></img>
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" placeholder="Enter your Username"></input>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Enter your Email"></input>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" placeholder="Enter your Password"></input>
                        </div>
                    </div>
                    <div className="footer">
                        <button type="button" className="btn">Đăng ký</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register
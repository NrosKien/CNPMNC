import React from 'react';
import loginImg from '../image/userLR.svg';
import './style.css'

class Login extends React.Component {
    render() {
        return (
            <div className="container" ref={this.props.containerRef}>
                <div className="header">Đăng nhập</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg}></img>
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Điền Email vào đây"></input>
                        </div>
                        <div className="form-group">
                            <label>Mật khẩu</label>
                            <input type="password" placeholder="Điền Mật khẩu vào đây"></input>
                        </div>
                    </div>
                    <div className="footer">
                        <button type="button" className="btn">Đăng nhập</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;


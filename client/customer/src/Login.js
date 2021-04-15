import React from 'react'
import './Login.css'

import {useForm} from 'react-hook-form';
import axios from 'axios';

export default function Login() {
    const {register, formState:{errors}, handleSubmit} = useForm();

    // get Data from Login and travel it to Server(NodeJS)
    const onSubmit = async (data)=>{
        try{
            const response = await axios.post('http://localhost:8080/customer',data);
            console.log(`response`,response);
        }
        catch (error){
            console.log(`error.response.data.message`,error.response.data.message);
        }
    };
    return (
        <div>
            <form className='box' action="/" method='post' onSubmit ={handleSubmit(onSubmit)}>
                <h2>Traveloka</h2>
                <div className="box-login">
                    <label>Email</label>
                        <input type='email' placeholder="Enter your email here" {...register("email", {required: true})}></input>
                            <span style={{color: 'red'}}>{errors.email && 'Email is required'}</span>
                    <label>Password</label>
                        <input type='password' placeholder="Enter your password here" {...register("password", {required: true})}></input>
                            <span style={{color: 'red'}}>{errors.password && 'Password is required'}</span>
                    <p><a href="/">Forget your password</a></p>
                </div>
                <input type='submit' name='' value='Login'></input>
                <p>Không có tài khoản? <a href="/Register">Đăng ký ngay</a></p>              
            </form>
        </div>
    )
}

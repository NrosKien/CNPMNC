import React from 'react';
//

import {useForm} from 'react-hook-form';
import axios from 'axios';
//

export default function Login() {

    /*
    const [email, setEmail] = useState ('');
    const [password, setPassword]= useState ('');

    const emailChange = (e) => {
      setEmail(e.target.value);  
    };

    const passwordChange = (e) =>{
        setPassword(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email, password);
    }
    return (
        <div>
                <form className='box' action="/" method='post' onSubmit={(e)=> {
                e.preventDefault(); 
                console.log (email,password);
                }}>
                    <h2>traveloka</h2>
                    <div className="box-login">
                        <span>Email</span>
                            <input type='email' name='email' value={email} onChange={emailChange} placeholder="Enter your email here"></input>
                        <span>Password</span>
                            <input type='password' name='password' value={password} onChange={passwordChange} placeholder="Enter your password"></input>
                        <span><a href="/">Forget your password</a></span>
                    </div>                  
                    <input type='submit' name='' value='Login'></input>
                </form>
        </div>   
    )
    */
    const {register, formState:{errors}, handleSubmit} = useForm();

    // get Data from Login and travel it to Server(NodeJS)
    const onSubmit = async (data)=>{
        try{
            const response = await axios.post('http://localhost:8080/admin',data);
            console.log(`response`,response);
        }
        catch (error){
            console.log(`error.response.data.message`,error.response.data.message);
        }
    };
    return (
        <div>
            <form className='box' action="/" method='post' onSubmit ={handleSubmit(onSubmit)}>
                <h2>trAveloka</h2>
                <div className="box-login">
                    <span>Email</span>
                        <input type='email' placeholder="Enter your email here" {...register("email", {required: true})}></input>
                            <span style={{color: 'red'}}>{errors.email && 'Email is required'}</span>
                    <span>Password</span>
                        <input type='password' placeholder="Enter your password here" {...register("password", {required: true})}></input>
                            <span style={{color: 'red'}}>{errors.password && 'Password is required'}</span>
                    <span><a href="/">Forget your password</a></span>
                </div>
                <input type='submit' name='' value='Login'></input>
            </form>
        </div>
    )
}

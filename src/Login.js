
import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { auth } from './firebase';
import './Login.css'


function Login() {
    
    const history = useHistory(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
    
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert (error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) { //if the auth comes back with not empty
                    history.push('/')//redirect to home page
                } 
            
            }) //.then(auth): it successfully created a new user with email and password
            .catch(error => alert(error.message)) // in case of any error, alert the error message
    }
 
    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                    alt=''
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/> 

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e=> setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login

// <input type='text' value={email} onChange={e => setEmail(e.target.value)}/> 
// map the value={email} to the state [email] and connect the two things. everytime the user type in something, it triggers a onChange, and gives us
// an event(e), and set the email (setEmail) to whatever the user put in (e.target.value).
// what happends later is the email gets map to value={email}

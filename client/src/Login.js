import React, { useState } from 'react';
import { loginUser } from './action/auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Login =  ({ loginUser, isLoggedIn}) => {

  

    let [data, setData] = useState({
        email: '',
        password: ''
      });
    
      let { email, password } = data;
      if(isLoggedIn) return <Redirect to="/"/>;
    
      const onChange = (e) => {
        setData({...data, [e.target.name] : e.target.value});
      }
      const submitData = () => {
        loginUser(email, password);
      }
  return (
    <div>
        <h1>Login Page</h1>
        <br/>
    <label>Email</label> <br/>
        <input type="email" onChange={(e) => onChange(e)} value={email} name="email"></input><br/>
    <label>Password</label><br/>
        <input type="password" onChange={(e) => onChange(e)} value={password} name="password"></input><br/>
        <button type="submit" onClick = {() => submitData()}>Submit</button>
</div>
  )
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps, {loginUser})(Login);
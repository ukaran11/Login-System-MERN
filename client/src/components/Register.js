import React, { useState } from 'react';
import { registerUser } from '../action/auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './Register.css';
const Register = ({ isLoggedIn, registerUser}) => {
    console.log(isLoggedIn);

    let [data, setData] = useState({
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      age: '',
      phone: '',
      address: ''
    });
  
      let { email, password, firstName, lastName, age, phone, address } = data;
    
      if(isLoggedIn) return <Redirect to="/"/>;
      const onChange = (e) => {
        setData({...data, [e.target.name] : e.target.value});
      }
      const submitData = () => {
        if(email==='' && password ==='') return alert("Empty values")
        else registerUser(email, password, firstName, lastName, age, phone, address);
      }
    return (
      <div className="wrapper fadeInDown">
      <div id="formContent">
    
        <div className="fadeIn first">
          <img src="../../public/login.png" id="icon" alt="User Icon" />
        </div>
    
        <h1>Register Page</h1>
                <br/>
                <label>Email</label> <br/>
                    <input type="email" onChange={(e) => onChange(e)}
                     className="fadeIn second"
                     value={email} 
                     name="email"></input><br/>
                <label>Password</label><br/>
                    <input type="password" onChange={(e) => onChange(e)}
                     className="fadeIn third"
                     value={password} 
                     name="password"></input><br/>
                  
                <label>First Name</label> <br/>
                  <input type="text" onChange={(e) => onChange(e)}
                    className="fadeIn fourth"
                    value={firstName} 
                    name="firstName"></input><br/>
                <label>Last Name</label> <br/>
                  <input type="text" onChange={(e) => onChange(e)}
                    className="fadeIn fifth"
                    value={lastName} 
                    name="lastName"></input><br/>
                <label>Age</label> <br/>
                  <input type="text" onChange={(e) => onChange(e)}
                    className="fadeIn sixth"
                    value={age} 
                    name="age"></input><br/>
                <label>Phone Number</label> <br/>
                  <input type="text" onChange={(e) => onChange(e)}
                    className="fadeIn seventh"
                    value={phone} 
                    name="phone"></input><br/>
                <label>Address</label> <br/>
                  <input type="text" onChange={(e) => onChange(e)}
                    className="fadeIn eigth"
                    value={address} 
                    name="address"></input><br/>
                <button type="submit" 
                     className="fadeIn fourth"
                     value="Log In"
                     onClick = {() => submitData()}>Submit</button>
        <div id="formFooter">
          <a class="underlineHover" href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
    )
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps, { registerUser })(Register);
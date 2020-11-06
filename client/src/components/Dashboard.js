import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import LoggedInDashboard from './LoggedInDashboard';
import { editUser } from '../action/auth';

import './css/Dashboard.css';

import { logOut } from '../action/auth';

const Dashboard = ({ isLoggedIn, user, logOut }) => {
    
    let { email, password, firstName, lastName, age, phone, address } = {...user};
 
    let [changedEmail, setchangedEmail] = useState('')
    let [changedPassword, setchangedPassword] = useState('')
    let [changedFirstName, setchangedFirstName] = useState('')
    let [changedLastName, setchangedLastName] = useState('')
    let [changedAge, setchangedAge] = useState('')
    let [changedPhone, setchangedPhone] = useState('')
    let [changedAddress, setchangedAddress] = useState('')
    let [data, setData] = useState('')

    

    const submitData = () => {
        if(changedEmail !== '') 
        {setData(changedEmail)}
        if(changedPassword !== '') 
        {setData(changedPassword)}
        if(changedFirstName !== '') 
        {setData(changedFirstName)}
        if(changedLastName !== '') 
        {setData(changedLastName)}
        if(changedAge !== '') 
        {setData(changedAge)}
        if(changedPhone !== '') 
        {setData(changedPhone)}
        if(changedAddress !== '') 
        {setData=(changedAddress)}
        editUser(data);
      }
    return (
        
        <div className="wrapper">
            <div className="row">
            <h2 className="text-justify">Dashboard</h2>
            </div>
            <br/>
            <Link to="/register" style={{ display: isLoggedIn ? "none": "block"}}>Register</Link>
            <br/><br/>
            <Link to="/login" style={{ display: isLoggedIn ? "none": "block"}}>Login</Link>
        
        {
            isLoggedIn ? (
                <div>
                    <LoggedInDashboard/>
                    <h1>You are logged in</h1>
                    <br/>
                    <div>
                        <div className="main">
                        <h1 className="h1style">Email: { email }</h1>
                         <input type="text"  name="changedEmail"></input>
                         <button className="buttonstyle btn btn-success" onClick = {() => submitData()}>Edit</button>
                        </div>
                        <div className="main">
                        <h1 className="h1style">Password: ******</h1> 
                        <input type="text"  name="changedPassword"></input>
                        <button className="buttonstyle btn btn-success" onClick = {() => submitData()}>Edit</button>
                        </div>
                        <div className="main">
                        <h1 className="h1style">FirstName: { firstName }</h1> 
                        <input type="text"  name="changedFirstName"></input>
                        <button className="buttonstyle btn btn-success" onClick = {() => submitData()}>Edit</button>
                        </div>
                        <div className="main">
                        <h1 className="h1style">LastName: { lastName }</h1> 
                        <input type="text"   name="changedLastName"></input>
                        <button className="buttonstyle btn btn-success" onClick = {() => submitData()}>Edit</button>
                        </div>
                        <div className="main">
                        <h1 className="h1style">Age: { age }</h1> 
                        <input type="text"  name="changedAge"></input>
                        <button className="buttonstyle btn btn-success" onClick = {() => submitData()}>Edit</button>
                        </div>
                        <div className="main">
                        <h1 className="h1style">Phone number: { phone }</h1> 
                        <input type="text"  name="changedPhone"></input>
                        <button className="buttonstyle btn btn-success" onClick = {() => submitData()}>Edit</button>
                        </div>
                        <div className="main">
                        <h1 className="h1style">Address: { address }</h1> 
                        <input type="text"   name="changedAddress"></input>
                        <button className="buttonstyle btn btn-success" onClick = {() => submitData()}>Edit</button>
                        </div>
                    {/* <h2>Email: { email }</h2>
                    <h2>FirstName: { firstName }</h2>
                    <h2>LastName: { lastName }</h2>
                    <h2>Age: { age }</h2>
                    <h2>Phone number: { phone }</h2>
                    <h2>Address: { address }</h2> */}
                    </div>
                    <button type="button" className="btn btn-primary" onClick={() => logOut()}>
                        Log Out
                    </button>
                </div>
            ): 
            (
                <div>
                    <h1>You are currently not logged in</h1>
                </div>
            )
        }
            
        </div>
    )
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn,
    user:state.user
})

export default connect(mapStateToProps, { logOut })(Dashboard);
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOAD_USER,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    AUTH_ERROR,
    LOG_OUT
} from '../constants/constants';
import axios from 'axios';
import { setToken } from '../setToken';

export const loadUser = () => async dispatch => {
    if(localStorage.getItem('token')){
        setToken(localStorage.getItem('token'));
    }
    try{
        const response = await axios.get('http://localhost:5000/api/users');

        dispatch({
            type: LOAD_USER,
            payload: response.data
        })
    }catch(error){
        dispatch({ 
            type: AUTH_ERROR,
            payload: error
        })
    }
}

export const registerUser = (email, password) => async dispatch => {
    try{
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }
        const body = JSON.stringify({ email, password});

        const response = await axios.post('http://localhost:5000/api/users/register', body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: response.data
        });

        dispatch(loadUser());
    } catch(error){
        dispatch({ type: REGISTER_FAIL, payload: error});
    }
}

export const loginUser = (email, password) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }

        const body = JSON.stringify({ email, password});

        const response = await axios.post('http://localhost:5000/api/users/login', body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        });

        dispatch(loadUser());
    } catch(error) {
        dispatch({ type: REGISTER_FAIL, payload: error});
    }
}

export const logOut = () => async dispatch => {
    dispatch({ type: LOG_OUT});
}
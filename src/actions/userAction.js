import axios from 'axios';
import { toast } from 'react-toastify';
import serverAPI from './serverAPI';
import setHeaderToken from '../util/authUtil'
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from './action';

export const login = (userData) => dispatch => {
  return axios.post(`${serverAPI}/auth/login`, userData)
    .then(response => {
      if(response.status === 200) {
        response.message = 'Login success';
        localStorage.setItem('token', response.data.data[0].token);
        dispatch({ type: LOGIN_SUCCESS, payload: response });
        toast.success("Login success !");
        return response;
      }
      
    })
    .catch(err => {
      err.response.message = 'Login failed';
      dispatch({ type: LOGIN_FAILURE, payload: err.response });
      toast.error(err.response.data.error);
      throw err;
    })
  }

  export const register = (userData) => dispatch => {
    return axios.post(`${serverAPI}/auth/signup`, userData)
      .then(response => {
        if (response.status === 201) {
          console.log('Registration success', response);
          response.message = 'Registeration success';
          dispatch({ type: REGISTER_SUCCESS, payload: response.data });
          toast.success("Registration success !");
          return response;
        }
      })
      .catch(err => {
        console.log(err.response.data);
        err.response.message = 'Registration failed';
        dispatch({ type: REGISTER_FAILURE, payload: err.response.data });
        toast.error(err.response.data.error);
        throw err;
      })
    }

import axios from 'axios'
import {
    registerRequest,
    registerSuccess,
    registerError,
    loginRequest,
    loginSuccess,
    loginError,
    logoutRequest,
    logoutSuccess,
    logoutError,
     getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './auth-actions.js'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

// POST ​/users​/signup Создать нового пользователя
const register =( credentials) => async (dispatch) => {
    dispatch(registerRequest());
    try {
        const response = await axios.post('/users/signup', credentials);

        console.log(response);

        token.set(response.data.token);
        dispatch(registerSuccess(response.data));
        
    } catch (error) {
        dispatch(registerError(error.message));
        
    }
};

// POST ​/users​/login Залогинить пользователя
const login= (credentials) => async (dispatch) => {
    dispatch(loginRequest());
    try {
        const response = await axios.post('/users/login', credentials);
         token.set(response.data.token);
        dispatch(loginSuccess(response.data));

        
    } catch (error) {
        dispatch(loginError(error.message));
        
    }
};

// POST ​/users​/logout Разлогинить пользователя
const logout= () => async (dispatch) => {
    dispatch(logoutRequest());
    try {
        await axios.post('/users/logout');
        // token.unset();
        dispatch(logoutSuccess())

        
    } catch (error) {
        dispatch(logoutError(error.message))
        
    }
};

// GET​/users​/current
// Получить информацию о текущем пользователе
const getCurrentUser = () => async (dispatch, getState) => {
    const {
        auth: { token: storageToken },
    } = getState()

    if (!storageToken) {
        return;
    }
    token.set(storageToken);

    dispatch(getCurrentUserRequest())
    try {
        const response = await axios.get('users/current');
      
        dispatch(getCurrentUserSuccess(response.data));
    } catch (error) {
        dispatch(getCurrentUserError(error.message));
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    register,
    login,
    logout,
    getCurrentUser
};



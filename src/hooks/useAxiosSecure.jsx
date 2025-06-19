import React from 'react';
import UseAuth from './UseAuth';
import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    const {user , logOutUser} = UseAuth();
    axiosInstance.interceptors.request.use(config => {
        config.headers.authorization = `Bearer ${user.accessToken}`;
        return config;
    })

    // response interceptor
    axiosInstance.interceptors.response.use(response => {
        return response;
    }, error => {
        if(error.status === 401 || error.status === 403){
            logOutUser()
            .then(() => {
                console.log('logout user for 401 status code');
            })
            .catch(err => {
                console.log(err);
            })
        }
        return Promise.reject(error);
    })
    return axiosInstance;
};

export default useAxiosSecure;
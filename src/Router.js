import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import { useState } from 'react';
import { useEffect } from "react";
import cookie from 'cookie'
import Home from './components/Home'
import About from './components/About'
import Car from './components/Car'
import Login from './components/Login'

// Write checkAuth function here
function checkAuth() {
    let cookies = cookie.parse(document.cookie);
    // console.log(document.cookie);
    return cookies["isLoggedin"] ? true : false;
}

// Check the cookies for a cookie called "loggedIn"
function ProtectedRoute(props) {
    console.log({'PROPS': props})
    const{component: Component, ...rest} = props

    return checkAuth === false ? <Component {...rest}/> : <Navigate to="/login" />;
}

// Write ProtectedRoute function here


const Router = () => {
    const [cookies, setCookies] = useState("")

    useEffect(() => {

    }, [cookie])
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/about" component={<ProtectedRoute component={About} />} />
            <Route path="/car/:id" element={<Car/>} />
        </Routes>
    );
};

export default Router;
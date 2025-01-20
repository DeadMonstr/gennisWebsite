import React from "react";
import {Route, Routes} from "react-router-dom";


import Website from "pages/webSite";
import Login from "pages/login/Login";
import FastRegister from "pages/fastRegister";

import "./app.sass"

import {Register} from "pages/webSite/test/register/register";

const App = () => {

    return (
        <Routes>
            <Route path="/*"  element={<Website/>} />

            <Route path="/login" element={<Login/>} />
            <Route path="/register_test" element={<Register/>}/>

            <Route path="/register"  element={<FastRegister/>}/>
        </Routes>

    )
}

export default App

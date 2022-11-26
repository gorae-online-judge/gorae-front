import React from 'react';
import TopNavigationBar from "../components/TopNavigationBar";
import styled from 'styled-components';
import { useEffect } from "react";
import LoginForm from '../components/LoginForm'

function Login() {
    return (
        <>
            <TopNavigationBar />
            <div>
                <main>
                    <LoginForm/>
                </main>
            </div>
        </>
    );
}


export default Login;
// version 6
import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './components/Login'
import SearchProblem from './components/SearchProblem';
import SolveProblem from './components/SolveProblem';
import RegisterProblem from './components/RegisterProblem';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Noto Sans KR', 'Roboto', sans-serif;
  }

  body {
      background: #fdfdfd;
  }

  main {
    width: 60%;
    max-width: 1100px;
    min-width: 480px;
    margin: 0 auto;
    padding: 20px 20px;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle/>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/problem/search" element={<SearchProblem />} />
        <Route path="/problem/solve" element={<SolveProblem />} />
        <Route path="/problem/register" element={<RegisterProblem />} />
      </Routes>
    </>
  );
}

export default App;

// version 6
import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './components/Login'
import SearchProblem from './pages/SearchProblem';
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
    width: 95%;
    max-width: 60rem;
    /* min-width: 45rem; */
    margin: 0 auto;
    padding-top: 1rem;
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

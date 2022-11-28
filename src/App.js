// version 6
import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './pages/Login'
import SearchProblem from './pages/SearchProblem';
import SolveProblem from './pages/SolveProblem';
import RegisterProblem from './pages/RegisterProblem';
import { createGlobalStyle } from 'styled-components';
import SignUp from './pages/SignUp';

const GlobalStyle = createGlobalStyle`
  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Spoqa Han Sans Neo', 'Noto Sans KR', 'Roboto', sans-serif;
      line-height: 1.5rem;
  }

  body {
      background: #fdfdfd;
  }

  main {
    width: 95%;
    max-width: 100rem;
    /* min-width: 45rem; */
    margin: 0 auto;
    /* padding-top: 1rem; */
  }

html {
  height: 100%;
}

body {
  height: 100%;
}

div#root {
  height: 100%; /* remove this line to see div.app is no more 100% height */
}

div.app {
  height: 85%;
  /* background-color: cornsilk; */
}

main {
  height: 100%;
}
`;

function App() {
  return (
    <>
      <GlobalStyle/>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/problem/search" element={<SearchProblem />} />
        <Route path="/problem/solve" element={<SolveProblem />} />
        <Route path="/problem/register" element={<RegisterProblem />} />
      </Routes>
    </>
  );
}

export default App;

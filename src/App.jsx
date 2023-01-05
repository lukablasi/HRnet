import React from 'react';
import './App.css';
import styled from "styled-components";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Home from './pages/Home'
import EmployeeList from './pages/EmployeeList'

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home />),
  },
  {
    path: '/employeelist',
    element: (<EmployeeList />)
  }
]);

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`

const StyledApp = styled.div`
  background-color: #7451eb;
  color: white;
  width: 900px;
`

function App() {
  return (
    <StyledContainer>
    <StyledApp>
      
      <RouterProvider router={router} />
      
    </StyledApp>
    </StyledContainer>
  );
}

export default App;

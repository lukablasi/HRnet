import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.div`
    text-align: center;
    border-bottom: white 2px solid;
    padding-bottom: 15px;
`

const LinkToEmployees = styled(Link)`
    color: silver;
    &:hover {
        color: white;
    }
`

function Header(props) {
    return(
        <StyledHeader>
            {props.homePage ? <h1>HRnet</h1> : <h1>Current Employees</h1>}
            {props.homePage && <LinkToEmployees to='/employeelist'>View Current Employees</LinkToEmployees>}
        </StyledHeader>
    )
}

export default Header;
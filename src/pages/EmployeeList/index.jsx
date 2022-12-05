import React from "react";
import Header from './../../components/Header'
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, useRef } from "react";
import Table from '../../components/Table'
import { Link } from "react-router-dom";

function EmployeeList() {

    const FilterMenu = styled.div`
        display: flex;
        justify-content: space-between;
        padding: 10px;
    `
    const RecordLimit = styled.select`
        background-color: white;
        border-radius: 5px;
    `
    const HomeLinkContainer = styled.div`
        text-align: center;
    `
    const HomeLink = styled(Link)`
        color: white;
    `

    const limitValues = [10, 25, 50, 100]
    const [selectedLimit, setSelectedLimit] = useState(limitValues[0])


    return (
        <div>
            <Header />
            <FilterMenu>
                <div>Show <RecordLimit onChange={(e) => setSelectedLimit(e.target.value)} defaultValue={selectedLimit}>
                    {limitValues.map((option, index) => (<option key={index}>{option}</option>))}
                    </RecordLimit> entries</div>
                <div>Search: <input type='text'></input></div>
            </FilterMenu>
            <Table recordLimit={selectedLimit} />
            
            <HomeLinkContainer>
                <HomeLink to='/'>Home</HomeLink>
            </HomeLinkContainer>
            
        </div>
    )
}

export default EmployeeList
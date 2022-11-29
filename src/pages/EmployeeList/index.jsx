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
    const TableFooter = styled.div`
        display: flex;
        justify-content: space-between;
    `
    const TableButtonsContainer = styled.div`
        display: flex;
        
    `
    const TableButton = styled.button`
        background-color: white;
        color: #7451eb;
        border-radius: 5px;
        padding: 2px 5px;
        margin: 0px 5px;
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
            <Table />
            <TableFooter>
                <div>Showing 0 to 0 of 0 entries</div>
                <TableButtonsContainer>
                    <TableButton>Previous</TableButton>
                    <TableButton>Next</TableButton>
                </TableButtonsContainer>
            </TableFooter>
            <HomeLinkContainer>
                <HomeLink to='/'>Home</HomeLink>
            </HomeLinkContainer>
            
        </div>
    )
}

export default EmployeeList
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { BiSortAlt2 } from 'react-icons/bi';

function Table(props) {

    const StyledTable = styled.table`
        background-color: white;
        color: #7451eb;
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
        border-bottom: 2px solid white;
    `
    const StyledHeaders = styled.tr`
        text-align: left;
    `
    const StyledRow = styled.tr`
        background-color: ${props => props.index % 2 === 0 ? '#7451eb' : 'white'};
        color: ${props => props.index % 2 === 0 ? 'white' : '#7451eb'};
        font-size: 14px;
        border: ${props => props.index % 2 === 0 ? '' : '2px solid #7451eb'};
        paddining: 1px;
    `
    const TableFooter = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    background-color: #7451eb;
    width: 100%;
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

    const employees = useSelector(state => state.employeesList)
    const [tablePage, setTablePage] = useState(0)
    const previousPage = () => {
        if (tablePage !== 0){
        setTablePage(previousState => previousState - Number(props.recordLimit))
        }
    }
    const nextPage = () => {
        if (Math.floor(employees.emplyeeList.length / props.recordLimit) > tablePage / props.recordLimit) {
        setTablePage(previousState => previousState + Number(props.recordLimit))
        }
    }
    useEffect(() => {
        setTablePage(0)
    }, [props.recordLimit])
    return(
        <div>
        <StyledTable>
            
            <thead>
                <StyledHeaders>
                    <th>First Name <BiSortAlt2 /></th>
                    <th>Last Name <BiSortAlt2 /></th>
                    <th>Start Date <BiSortAlt2 /></th>
                    <th>Department <BiSortAlt2 /></th>
                    <th>Date of Birth <BiSortAlt2 /></th>
                    <th>Street <BiSortAlt2 /></th>
                    <th>City <BiSortAlt2 /></th>
                    <th>State <BiSortAlt2 /></th>
                    <th>Zip Code <BiSortAlt2 /></th>
                </StyledHeaders>
            </thead>
            <tbody>
                {employees.emplyeeList.slice(tablePage, tablePage + props.recordLimit).map((employee, index) => <StyledRow index={index} key={index}>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.startDate}</td>
                    <td>{employee.department}</td>
                    <td>{employee.dateOfBirth}</td>
                    <td>{employee.address.street}</td>
                    <td>{employee.address.city}</td>
                    <td>{employee.address.state}</td>
                    <td>{employee.address.zipCode}</td>
                </StyledRow>)}
            </tbody>

        </StyledTable>
        <TableFooter>
                <div>Showing {employees.emplyeeList.length !== 0 ? 1 + tablePage : 0} 
                to { employees.emplyeeList.length < props.recordLimit ? employees.emplyeeList.length : ((Math.floor(employees.emplyeeList.length / props.recordLimit) == tablePage / props.recordLimit) ? employees.emplyeeList.length : (Number(tablePage) + Number(props.recordLimit)))} of 
                {employees.emplyeeList.length} entries</div>
                <TableButtonsContainer>
                    <TableButton onClick={previousPage}>Previous</TableButton>
                    <TableButton onClick={nextPage}>Next</TableButton>
                </TableButtonsContainer>
            </TableFooter>
        </div>
    )
}

export default Table;
import styled from "styled-components";
import { createEmployee } from '../../features/employeesSlice';
import { useSelector, useDispatch } from 'react-redux';

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

    const employees = useSelector(state => state.employeesList)
    console.log(employees.emplyeeList)
    return(
        <StyledTable>
            
            <thead>
                <StyledHeaders>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Start Date</th>
                    <th>Department</th>
                    <th>Date of Birth</th>
                    <th>Street</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip Code</th>
                </StyledHeaders>
            </thead>
            <tbody>
                {employees.emplyeeList.map((employee, index) => <StyledRow index={index} key={index}>
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
    )
}

export default Table;
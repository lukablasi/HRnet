import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BiSortAlt2 } from "react-icons/bi";

function Table(props) {
  const StyledTable = styled.table`
    background-color: white;
    color: #7451eb;
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
    border-bottom: 2px solid white;
  `;
  const StyledHeaders = styled.tr`
    text-align: left;
  `;
  const StyledRow = styled.tr`
    background-color: ${(props) =>
      props.index % 2 === 0 ? "#7451eb" : "white"};
    color: ${(props) => (props.index % 2 === 0 ? "white" : "#7451eb")};
    font-size: 14px;
    border: ${(props) => (props.index % 2 === 0 ? "" : "2px solid #7451eb")};
    paddining: 1px;
  `;
  const TableFooter = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    background-color: #7451eb;
    width: 100%;
  `;
  const TableButtonsContainer = styled.div`
    display: flex;
  `;
  const TableButton = styled.button`
    background-color: white;
    color: #7451eb;
    border-radius: 5px;
    padding: 2px 5px;
    margin: 0px 5px;
  `;
  const SortButton = styled.button``;

  const employees = useSelector((state) => state.employeesList);
  const [tablePage, setTablePage] = useState(0);
  const [sortValue, setSortValue] = useState('firstName');
  const [sortOrder, setSortOrder] = useState(true)
  const [data, setData] = useState(employees.emplyeeList);
  const previousPage = () => {
    if (tablePage !== 0) {
      setTablePage(
        (previousState) => previousState - Number(props.recordLimit)
      );
    }
  };
  const nextPage = () => {
    if (
      Math.floor(employees.emplyeeList.length / props.recordLimit) >
      tablePage / props.recordLimit
    ) {
      setTablePage(
        (previousState) => previousState + Number(props.recordLimit)
      );
    }
  };
  useEffect(() => {
    setTablePage(0);
  }, [props.recordLimit]);
  useEffect(() => {
    sortBy();
  }, [sortValue, sortOrder]);
  useEffect(() => {
    filterData()
  }, [props.searchValue])
  function filterData() {
    const filteredData = employees.emplyeeList.filter(employee => {
      return (
        employee.firstName.includes(props.searchValue) ||
        employee.lastName.includes(props.searchValue) ||
        employee.startDate.includes(props.searchValue) ||
        employee.department.includes(props.searchValue) ||
        employee.dateOfBirth.includes(props.searchValue) ||
        employee.address.street.includes(props.searchValue) ||
        employee.address.city.includes(props.searchValue) ||
        employee.address.state.includes(props.searchValue) ||
        employee.address.zipCode.includes(props.searchValue)
      )
    })
    setData(filteredData)
  }
  function sortBy() {
    if(sortOrder === true) {
    if (sortValue === 'firstName'){
        const sortedEmployees = [...data].sort((a, b) => (a.firstName.toLowerCase() > b.firstName.toLowerCase()) ? 1 : -1);
        setData(sortedEmployees);
    } else if (sortValue === 'lastName'){
        const sortedEmployees = [...data].sort((a, b) => (a.lastName.toLowerCase() > b.lastName.toLowerCase()) ? 1 : -1);
        setData(sortedEmployees);
    } else if (sortValue === 'startDate'){
        const sortedEmployees = [...data].sort((a, b) => (a.startDate > b.startDate) ? 1 : -1);
        setData(sortedEmployees);
    }else if (sortValue === 'department'){
        const sortedEmployees = [...data].sort((a, b) => (a.department.toLowerCase() > b.department.toLowerCase()) ? 1 : -1);
        setData(sortedEmployees);
    }else if (sortValue === 'dateOfBirth'){
        const sortedEmployees = [...data].sort((a, b) => (a.dateOfBirth > b.dateOfBirth) ? 1 : -1);
        setData(sortedEmployees);
    }else if (sortValue === 'street'){
        const sortedEmployees = [...data].sort((a, b) => (a.address.street.toLowerCase() > b.address.street.toLowerCase()) ? 1 : -1);
        setData(sortedEmployees);
    }else if (sortValue === 'city'){
        const sortedEmployees = [...data].sort((a, b) => (a.address.city.toLowerCase() > b.address.city.toLowerCase()) ? 1 : -1);
        setData(sortedEmployees);
    }else if (sortValue === 'state'){
        const sortedEmployees = [...data].sort((a, b) => (a.address.state.toLowerCase() > b.address.state.toLowerCase()) ? 1 : -1);
        setData(sortedEmployees);
    }else if (sortValue === 'zipCode'){
        const sortedEmployees = [...data].sort((a, b) => (a.address.zipCode.toLowerCase() > b.address.zipCode.toLowerCase()) ? 1 : -1);
        setData(sortedEmployees);
    }

} else if(sortOrder === false) {
    if (sortValue === 'firstName'){
        const sortedEmployees = [...data].sort((a, b) => (a.firstName.toLowerCase() < b.firstName.toLowerCase()) ? 1 : -1);
        setData(sortedEmployees);
    } else if (sortValue === 'lastName'){
        const sortedEmployees = [...data].sort((a, b) => (a.lastName.toLowerCase() < b.lastName.toLowerCase()) ? 1 : -1);
        setData(sortedEmployees);
    } else if (sortValue === 'startDate'){
        const sortedEmployees = [...data].sort((a, b) => (a.startDate < b.startDate) ? 1 : -1);
        setData(sortedEmployees);
    }else if (sortValue === 'department'){
        const sortedEmployees = [...data].sort((a, b) => (a.department.toLowerCase() < b.department.toLowerCase()) ? 1 : -1);
        setData(sortedEmployees);
    }else if (sortValue === 'dateOfBirth'){
        const sortedEmployees = [...data].sort((a, b) => (a.dateOfBirth < b.dateOfBirth) ? 1 : -1);
        setData(sortedEmployees);
    }else if (sortValue === 'street'){
        const sortedEmployees = [...data].sort((a, b) => (a.address.street.toLowerCase() < b.address.street.toLowerCase()) ? 1 : -1);
        setData(sortedEmployees);
    }else if (sortValue === 'city'){
        const sortedEmployees = [...data].sort((a, b) => (a.address.city.toLowerCase() < b.address.city.toLowerCase()) ? 1 : -1);
        setData(sortedEmployees);
    }else if (sortValue === 'state'){
        const sortedEmployees = [...data].sort((a, b) => (a.address.state.toLowerCase() < b.address.state.toLowerCase()) ? 1 : -1);
        setData(sortedEmployees);
    }else if (sortValue === 'zipCode'){
        const sortedEmployees = [...data].sort((a, b) => (a.address.zipCode.toLowerCase() < b.address.zipCode.toLowerCase()) ? 1 : -1);
        setData(sortedEmployees);
    }

};
  }
  return (
    <div>
      <StyledTable data-testid='table'>
        <thead>
          <StyledHeaders>
            <th>
              <SortButton onClick={() => (sortValue === 'firstName') ? setSortOrder(!sortOrder) : setSortValue("firstName")}>
                First Name <BiSortAlt2 />
              </SortButton>
            </th>
            <th>
              <SortButton onClick={() => (sortValue === 'lastName') ? setSortOrder(!sortOrder) : setSortValue("lastName")}>
                Last Name <BiSortAlt2 />
              </SortButton>
            </th>
            <th>
              <SortButton onClick={() => (sortValue === 'startDate') ? setSortOrder(!sortOrder) : setSortValue("startDate")}>
                Start Date <BiSortAlt2 />
              </SortButton>
            </th>
            <th>
              <SortButton onClick={() => (sortValue === 'department') ? setSortOrder(!sortOrder) : setSortValue("department")}>
                Department <BiSortAlt2 />
              </SortButton>
            </th>
            <th>
              <SortButton onClick={() => (sortValue === 'dateOfBirth')? setSortOrder(!sortOrder) : setSortValue("dateOfBirth")}>
                Date of Birth <BiSortAlt2 />
              </SortButton>
            </th>
            <th>
              <SortButton onClick={() => (sortValue === 'street') ? setSortOrder(!sortOrder) : setSortValue("street")}>
                Street <BiSortAlt2 />
              </SortButton>
            </th>
            <th>
              <SortButton onClick={() => (sortValue === 'city') ? setSortOrder(!sortOrder) : setSortValue("city")}>
                City <BiSortAlt2 />
              </SortButton>
            </th>
            <th>
              <SortButton onClick={() => (sortValue === 'state') ? setSortOrder(!sortOrder) : setSortValue("state")}>
                State <BiSortAlt2 />
              </SortButton>
            </th>
            <th>
              <SortButton onClick={() => (sortValue === 'zipCode') ? setSortOrder(!sortOrder) : setSortValue("zipCode")}>
                Zip Code <BiSortAlt2 />
              </SortButton>
            </th>
          </StyledHeaders>
        </thead>
        <tbody>
          {data
            .slice(tablePage, tablePage + props.recordLimit)

            .map((employee, index) => (
              <StyledRow index={index} key={index}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.startDate}</td>
                <td>{employee.department}</td>
                <td>{employee.dateOfBirth}</td>
                <td>{employee.address.street}</td>
                <td>{employee.address.city}</td>
                <td>{employee.address.state}</td>
                <td>{employee.address.zipCode}</td>
              </StyledRow>
              
            ))}
        </tbody>
      </StyledTable>
      <TableFooter>
        <div>
          Showing {data.length !== 0 ? 1 + tablePage : 0}
          {" "}to{" "}
          {data.length < props.recordLimit
            ? data.length
            : Math.floor(data.length / props.recordLimit) ==
              tablePage / props.recordLimit
            ? data.length
            : Number(tablePage) + Number(props.recordLimit)}{" "}
          of {" "}
          {data.length} entries
        </div>
        <TableButtonsContainer>
          <TableButton onClick={previousPage}>Previous</TableButton>
          <TableButton onClick={nextPage}>Next</TableButton>
        </TableButtonsContainer>
      </TableFooter>
    </div>
  );
}

export default Table;

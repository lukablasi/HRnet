import React from 'react';
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import Header from './../../components/Header'
import states from './../../data/states'
import { useSelector, useDispatch } from 'react-redux';
import { createEmployee } from '../../features/employeesSlice';

const StyledH2 = styled.h2`
    text-align: center;
`
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`

const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    width: 180px;
    padding: 10px;
    margin-left: 15%;
`
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 15px 0px;
`

const StyledButton = styled.button`
    background-color: white;
    color: #7451eb;
    padding: 5px 0px;
    width: 140px;
    border-radius: 5px;
`

function Home() { 
    const firstName = useRef('')
    const lastName = useRef('')
    const dateOfBirth = useRef('')
    const startDate = useRef('')
    const street = useRef('')
    const city = useRef('')
    const state = useRef('')
    const zipCode = useRef('')
    const department = useRef('')


    
    const dispatch = useDispatch();
    function handleClick() {
        let formData = {
            firstName: firstName.current.value,
            lastName : lastName.current.value,
            dateOfBirth: dateOfBirth.current.value,
            startDate: startDate.current.value,
            address: {
                street: street.current.value,
                city: city.current.value,
                state: state.current.value,
                zipCode: zipCode.current.value,
            },
            
            department: department.current.value
        }
        dispatch(createEmployee(formData))

    }

    return(
        <div>
            <Header homePage='true' />
            <StyledH2>Create Employee</StyledH2>
            <StyledForm action="#" id="create-employee">

                <StyledLabel>First Name
                    <input type="text" id="first-name" ref={firstName} />
                </StyledLabel>  

                <StyledLabel>Last Name
                    <input type="text" id="last-name" ref={lastName} />
                </StyledLabel>

                <StyledLabel>Date of Birth
                    <input id="date-of-birth" type="date" ref={dateOfBirth} />
                </StyledLabel> 

                <StyledLabel>Start Date
                    <input id="start-date" type="date" ref={startDate} />
                </StyledLabel>

                <fieldset>
                    <legend>Address</legend>

                    <StyledLabel>Street
                        <input id="street" type="text" ref={street} />
                    </StyledLabel>
                    

                    <StyledLabel>City
                        <input id="city" type="text" ref={city} />
                    </StyledLabel>
                    

                    <StyledLabel>State
                        <select ref={state}>
                            {states.map((state) =>(
                                <option key={state.abbreviation}>{state.name}</option>
                            ))}
                        </select>
                    </StyledLabel>
                    

                    <StyledLabel>Zip Code
                        <input id="zip-code" type="number" ref={zipCode} />
                    </StyledLabel>
                    
                </fieldset>
                <StyledLabel>Department
                    <select name="department" id="department" ref={department}>
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select>
                </StyledLabel>
            </StyledForm>
            <ButtonContainer>
                <StyledButton onClick={handleClick}>Save</StyledButton>
            </ButtonContainer>
            
        </div>
    )
}

export default Home;
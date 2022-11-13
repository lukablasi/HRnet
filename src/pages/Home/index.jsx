import React from 'react';
import styled from "styled-components";
import Header from './../../components/Header'
import states from './../../data/states'

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

    
    return(
        <div>
            <Header homePage='true' />
            <StyledH2>Create Employee</StyledH2>
            <StyledForm action="#" id="create-employee">

                <StyledLabel>First Name
                    <input type="text" id="first-name" />
                </StyledLabel>  

                <StyledLabel>Last Name
                    <input type="text" id="last-name" />
                </StyledLabel>

                <StyledLabel>Date of Birth
                    <input id="date-of-birth" type="text" />
                </StyledLabel> 

                <StyledLabel>Start Date
                    <input id="start-date" type="text" />
                </StyledLabel>

                <fieldset class="address">
                    <legend>Address</legend>

                    <StyledLabel>Street
                        <input id="street" type="text" />
                    </StyledLabel>
                    

                    <StyledLabel>City
                        <input id="city" type="text" />
                    </StyledLabel>
                    

                    <StyledLabel>State
                        <select>
                            {states.map((state) =>(
                                <option key={state.abbreviation}>{state.name}</option>
                            ))}
                        </select>
                    </StyledLabel>
                    

                    <StyledLabel>Zip Code
                        <input id="zip-code" type="number" />
                    </StyledLabel>
                    
                </fieldset>
                <StyledLabel>Department
                    <select name="department" id="department">
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select>
                </StyledLabel>
            </StyledForm>
            <ButtonContainer>
                <StyledButton>Save</StyledButton>
            </ButtonContainer>
            
        </div>
    )
}

export default Home;
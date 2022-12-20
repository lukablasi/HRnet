import React from 'react';
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { changeIsVisible } from '../../features/modalboxSlice';


function ModalBox({isVisible}) {

    const dispatch = useDispatch();

    const ModalBox = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 100;
    color: #7451EB;
    background-color: rgba(255,255,255, 0.6);
    display: ${isVisible ? 'block' : 'none'}
    `
    const InnerBox = styled.div`
    position: fixed;
    left: 35vw;
    right:35vw;
    height: 200px;
    top: calc(40vh - 100px);
    border: 2px solid #7451EB;
    border-radius: 15px;
    text-align: center;
    background-color: #fff;
    z-index: 150;
    backdrop-filter: blur(5px);
    `
    const ModalText = styled.p`
    font-size: 1.1em;
    margin-top: 10%;
    `
    const ModalButton = styled.button`
    background-color: #7451EB;
    color: #fff;
    width: 40%;
    height: 30px;
    border: 2px solid #7451EB;
    border-radius: 15px;
    margin-top: 2em;
    &:hover {
        background-color: #fff;
        color: #7451EB;
    }
    `

    function handleClick() {
        dispatch(changeIsVisible(false))
    }


    return(
        <ModalBox>
            <InnerBox>
                <ModalText>Successfully added new employee!</ModalText>
                <ModalButton onClick={handleClick}>OK</ModalButton>
            </InnerBox>
        </ModalBox>
    )
}

export default ModalBox;
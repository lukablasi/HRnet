import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux';
import {store} from '../../app/store'
import { MemoryRouter } from "react-router-dom";
import Home from './'


test('check if form body exist', () => {
    render(
    <Provider store={store}>
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    </ Provider>)

})
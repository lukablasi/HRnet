import React from 'react';
import { render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import {store} from '../../app/store'
import { MemoryRouter } from "react-router-dom";
import EmployeeList from './'
import Table from '../../components/Table'

describe('renders employee list page', () => {

    test('renders the page', () => {
      const { getByText } = render(
        <Provider store={store}>
            <MemoryRouter>
                <EmployeeList />
            </MemoryRouter>
        </Provider>
      );
      expect(getByText(/current employees/i)).toBeVisible();
    });
    test('sort by date button is available', () => {
      render(
        <Provider store={store}>
            <MemoryRouter>
                <Table />
            </MemoryRouter>
        </Provider>
      );
      expect(screen.getByTestId('date-sort-button')).toBeVisible()

        
      });
    })
    

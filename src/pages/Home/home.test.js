import React from 'react';
import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux';
import {store} from '../../app/store'
import { MemoryRouter } from "react-router-dom";
import Home from './'

describe('renders home page', () => {

    test('home page displays a header', () => {
      const { getByText } = render(
        <Provider store={store}>
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        </Provider>
      );
      expect(getByText(/hrnet/i)).toBeVisible();
    });
    test('fail form validation with missing credentials', () => {
      render(
        <Provider store={store}>
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        </Provider>
      );
      userEvent.click(screen.getByText('Save'))
      expect(screen.getByText('Successfully added new employee!')).not.toBeVisible()
    })
    })
    

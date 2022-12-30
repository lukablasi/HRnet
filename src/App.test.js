import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import EmployeeList from './pages/EmployeeList'

describe('renders home page', () => {

test('home page displays a header', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(getByText(/hrnet/i)).toBeVisible();
});
test('fail form validation with missing credentials', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  userEvent.click(screen.getByText('Save'))
  expect(screen.getByText('Successfully added new employee!')).not.toBeVisible()
})
})
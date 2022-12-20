import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

describe('renders home page', () => {

test('home page displays a headercd ', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(getByText(/hrnet/i)).toBeInTheDocument();
});
test('type mock data into inputs', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  userEvent.type(screen.getByLabelText('First Name', {selector: 'input'}), 'Adam')
  expect(screen.getByLabelText('First Name', {selector: 'input'})).toHaveValue('Adam')

  userEvent.type(screen.getByLabelText('Last Name', {selector: 'input'}), 'Smith')
  userEvent.type(screen.getByLabelText('Date of Birth', {selector: 'input'}), '14/09/2000')
  
})
})
import { configureStore } from '@reduxjs/toolkit';
import employeesSlice from '../features/employeesSlice';


export const store = configureStore({
  reducer: {
    employeesList: employeesSlice
  },
});

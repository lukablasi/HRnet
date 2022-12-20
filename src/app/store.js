import { configureStore } from '@reduxjs/toolkit';
import employeesSlice from '../features/employeesSlice';
import modalboxSlice from '../features/modalboxSlice'


export const store = configureStore({
  reducer: {
    employeesList: employeesSlice,
    modalBox: modalboxSlice
  },
});

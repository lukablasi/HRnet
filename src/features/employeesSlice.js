import { CreateSliceOptions } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import employeedb from "../data/employeedb"


export const employeesSlice = createSlice({
    name: 'employees',
    initialState: {
        emplyeeList: employeedb
    },
    reducers: {
        createEmployee: (state, action) => {
            state.emplyeeList = [...state.emplyeeList, action.payload]
        }
    }
})

export const {createEmployee} = employeesSlice.actions
export default employeesSlice.reducer
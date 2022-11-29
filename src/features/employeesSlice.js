import { CreateSliceOptions } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"


export const employeesSlice = createSlice({
    name: 'employees',
    initialState: {
        emplyeeList: []
    },
    reducers: {
        createEmployee: (state, action) => {
            state.emplyeeList = [...state.emplyeeList, action.payload]
        }
    }
})

export const {createEmployee} = employeesSlice.actions
export default employeesSlice.reducer
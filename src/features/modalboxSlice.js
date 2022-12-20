import { createSlice } from "@reduxjs/toolkit"

export const modalboxSlice = createSlice({
    name: 'modalBox',
    initialState: {
        modalBox: false
    },
    reducers: {
        changeIsVisible: (state, action) => {
            state.modalBox = action.payload
        }
    }
})

export const {changeIsVisible} = modalboxSlice.actions
export default modalboxSlice.reducer
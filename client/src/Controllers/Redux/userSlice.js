import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "user",
    initialState: [{}],
    reducers: {
        getUsers:(state) => {
            state.push({name: "Captain America"})
            state.push({name: "The Flash"})
        }
    }
})

export default slice.reducer;

export const {getUsers} = slice.actions;
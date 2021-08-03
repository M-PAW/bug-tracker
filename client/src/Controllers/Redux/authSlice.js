import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
    name: "auth",
    initialState:{
        admin: false,
        LoggedIn: false
    },
    reducers: {
        signIn:(state,action) => {

        },
        signOut:(state) => {

        }
    }
})
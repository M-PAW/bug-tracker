import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
    name: "auth",
    initialState:{
        admin: false,
        LoggedIn: false,
    },
    reducers: {
        signIn:(state,action) => {
            const {name, password} = action.payload;
            fetch('http://localhost:5500/auth/', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: name,
                    password: password
                })
            })
            .then(() => console.log('fired'))
            .then(() =>
            state.LoggedIn = true,
            state.admin = true
            )
            .catch(err => console.log(err))

        },
        signOut:(state) => {
            state.LoggedIn = false;
            state.admin = false;

        },
        createUser:(state,action) => {

        }
    }
})

export default slice.reducer;

export const {signIn, signOut, createUser} = slice.actions;
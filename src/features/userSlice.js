import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({

    name: 'user',
    initialState: {
        // al principio no hay usuario así que le doy el valor null
        user: null,
    },
    reducers: {
        SET_USER: (state, action) => {
            state.user = action.payload;
        }
    }
},

)

export const { SET_USER } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
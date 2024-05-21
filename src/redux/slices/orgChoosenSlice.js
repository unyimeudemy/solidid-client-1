

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    org: null,
}

export const orgChoosenSlice = createSlice({
    name: "orgChoosenSlice",
    initialState,
    reducers: {
        addOrg: (state, action) => {
            state.org = action.payload;
        },
        removeOrg: (state) => {
            state.org = null;
        },

    }
})



export const { addOrg, removeOrg} = orgChoosenSlice.actions;
export default orgChoosenSlice.reducer;


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    avtars: [],
    error: '',
};

export const fetchInformation = createAsyncThunk("avtar/fetchInformation", () => {
    return axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.data)
});


const AvatarSlice = createSlice({
    name: "avtar",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchInformation.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchInformation.fulfilled, (state, action) => {

            state.loading = false;
            state.avtars = action.payload;
            
            state.error = " ";
        });
        builder.addCase(fetchInformation.rejected, (state, action) => {
            state.loading = false;
            state.avtars = [];
         
            state.error = action.error.message;
        });
    }
})

export default AvatarSlice.reducer;


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
    reducers: {
        deleteAvtar: (state, action) => {
            state.avtars.map((item, index) => {
                if (item.id === action.payload) {
                    state.avtars.splice(index, 1)
                }
            })
        },
        updateAvtar : (state,action) =>{
            const index =state.avtars.findIndex(item=> item.id===action.payload.id)
            state.avtars[index] = action.payload
        }
    },
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
export const { deleteAvtar ,updateAvtar } = AvatarSlice.actions


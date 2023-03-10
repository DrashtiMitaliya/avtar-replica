import {configureStore}  from '@reduxjs/toolkit';
import avtarReducer from '../features/AvatarSlice'
 
const store =configureStore({
    reducer  : {
        avtar  : avtarReducer
    }
}) 

export default store 
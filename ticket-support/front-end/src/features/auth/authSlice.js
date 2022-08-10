import {createSlice , createAsyncThunk} from '@reduxjs/toolkit';
import authService from './authService';

export const register = createAsyncThunk("auth/register",async(user, thunkApi)=>{
   try{
    return await authService.register(user);
   }
   catch(error){
    const message = (error.response && error.response.data) ||  error.response.data.message || error.response.message || error.message;
    return thunkApi.rejectWithValue(message);
   }
});

const initialState ={
    user:null,
    isError: false,
    isSuccess:false,
    isLoading:false,
    message: ""
}

const authSlice = createSlice({
    initialState,
    name:"auth",
    reducers:{
        reset:(state)=>{
            state.user =null;
            state.isError =false;
            state.isSuccess = false;
            state.isLoading = false;
            state.message = "";
       
        }

    },
    extraReducers:(buiilder)=>{
        buiilder.addCase(register.pending,(state)=>{
            state.isLoading = true;
        }).addCase(register.fulfilled , (state,action)=>{
            state.isLoading =false;
            state.isSuccess = true;
            state.user = action.payload

        }).addCase(register.rejected, (state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload
            state.user = null;
        })

    }
})

export default authSlice.reducer;
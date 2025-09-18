import { createSlice } from "@reduxjs/toolkit";

const initialState={
    addedUsers:[]
}

const userSlice=createSlice({
    name:'users',
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.addedUsers.push(action.payload)
        }
    }
})

export const { addUser } = userSlice.actions
export default userSlice.reducer
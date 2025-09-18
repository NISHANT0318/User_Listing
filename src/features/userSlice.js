import { createSlice } from "@reduxjs/toolkit";

const savedUsers = JSON.parse(localStorage.getItem("addedUsers")) || []

const initialState={
    addedUsers:savedUsers
}

const userSlice=createSlice({
    name:'users',
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.addedUsers.push(action.payload)
            localStorage.setItem("addedUsers", JSON.stringify(state.addedUsers))
        }
    }
})

export const { addUser } = userSlice.actions
export default userSlice.reducer
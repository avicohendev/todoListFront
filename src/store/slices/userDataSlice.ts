import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {User} from 'firebase/auth';
import {app, auth, googleProvider,signInWithPopup, signOut, GoogleAuthProvider} from '../../utils/firebase'

type userType = {
    user? : userParams ,
    idToken? : string ,
    accessToken?: string,
    
}
export type userParams= {
    email: string,
    displayName : string,
    photoURL:  string,
    uid: string
}
const initialState : userType ={
    user : undefined,
    idToken : undefined,
    
}


export const loginUser = createAsyncThunk('login', async () =>{

    const res = await signInWithPopup(auth, googleProvider)
    const credential = GoogleAuthProvider.credentialFromResult(res);
    const token = credential?.accessToken;
    // The signed-in user info.
    const user = res.user;
    const loggedInUser : userType={
        idToken : credential?.idToken,
        accessToken: credential?.accessToken,
        
        user :{
            displayName : user.displayName!,
            email: user.email!,
            photoURL: user.photoURL!,
            uid: user.uid!
        }
    }
    return loggedInUser;

})
const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers : {},
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(loginUser.fulfilled, (state, action) => {
          // Add user to the state array
        state.accessToken = action.payload.accessToken;
        state.idToken = action.payload.idToken;
        state.user = {
            displayName: action.payload.user?.displayName!,
            email: action.payload.user?.email!,
            photoURL: action.payload.user?.photoURL!,
            uid: action.payload.user?.uid!

        }
        })
      },
})


export const userDataReducer = userSlice.reducer;
export const userActions = userSlice.actions;

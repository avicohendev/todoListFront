import React from 'react';
import logo from './logo.svg';
import './App.css';
 import {app, auth, googleProvider,signInWithPopup, signOut, GoogleAuthProvider} from './utils/firebase'
 import  {useAppDispatch, useAppSelector} from './store/hooks'
 import {userActions, loginUser}from './store/slices/userDataSlice'
 import { Route, Routes} from "react-router-dom";
 import {LoginScreen} from'../src/screens/login'
 import { ListPage } from './screens/list';
 import {RequireAuth} from '../src/containers/requiredAuth';
 import CssBaseline from '@mui/material/CssBaseline';
function App() {
  const dispatch = useAppDispatch();
  const appSelector = useAppSelector(store => store.userData);
  const act = userActions;
 
  
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_b <LoginScreelank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <button  onClick={ async ()=> {
    //       dispatch(loginUser());
    //       // const res = await signInWithPopup(auth, googleProvider)
    //       // const credential = GoogleAuthProvider.credentialFromResult(res);
    //       // const token = credential?.accessToken;
    // // The signed-in user info.
    //     //const user = res.user;
    //     }}>
    //       sign in
    //     </button>
    //   </header>
    // </div>
    <>
    <CssBaseline/>
    <Routes>
        <Route path= '/login' element={ <LoginScreen />}/>
         
    
       <Route path= '/' element ={<RequireAuth>
         <ListPage />
       </RequireAuth>} />
    </Routes>
    
    
    </>
  );
}

export default App;

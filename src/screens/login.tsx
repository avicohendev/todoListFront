import { FC, useEffect} from 'react';

import  {useAppDispatch, useAppSelector} from '../store/hooks'
import {userActions, loginUser}from '../store/slices/userDataSlice';
import {Button, Paper} from '@mui/material'
import { useNavigate } from 'react-router-dom';

export const LoginScreen : FC = () =>{
    
    const navigate = useNavigate();
    const user = useAppSelector(state => state.userData)
    useEffect(()=>{
      if(user.user?.email){
          navigate('/')
     } 
    }   
    ,[user])
    const dispatch = useAppDispatch();
    const handleLogin = async ()=>{
        dispatch(loginUser());
        //navigate('/')
    }
    return (
    <>
    <Paper elevation={5} style={{width: '30vw', height: '60 vh' , display: "flex", alignItems: "center"}} >
        <Button onClick={handleLogin}> 
            Google Login
        </Button>
    </Paper>
    </>)

}
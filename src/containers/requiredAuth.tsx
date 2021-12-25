import {FC} from 'react'
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';

export const  RequireAuth: FC=({ children  }) => {
const user = useAppSelector( state => state.userData);
  
    if (!user.user) {
      
     return <Navigate to="/login"  />;
    }
  
    return <>{children}</>;
  }

   
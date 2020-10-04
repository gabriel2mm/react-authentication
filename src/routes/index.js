import React, {useContext} from 'react';
import AuthContext from '../context/authContext'
import PublicRoutes from './public'
import PrivateRoutes from './private'

export default props => {
   const {signed} = useContext(AuthContext)
   return signed ? (<PrivateRoutes/>) : (<PublicRoutes/>);
}


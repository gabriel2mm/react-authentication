import React from 'react';
import {Alert} from 'antd'
import './style.css'

function AlertComponent({message, type}){
  if(message && message !== null && message.length > 0){
    return <Alert message={message} type={type} className="alert-box" showIcon />
  }
  
  else return null;
}

export default AlertComponent;
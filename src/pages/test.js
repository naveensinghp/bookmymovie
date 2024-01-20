import styled from 'styled-components';
import React from 'react';
import Button from '../components/Button';


export default function Test(){
const EXAMPLE_USER = {
    name: 'sayan',
    registrationStatus: 'verified',
} 
    return<>
        <LoggedInBanner
            type="success"
            user={EXAMPLE_USER}
        >
            Successfully logged in! Welcome aboard, {EXAMPLE_USER.name}!
        </LoggedInBanner>
    </>

  function Banner({type, children}){
    const backgroundColor = type === 'success' ? 'green': 'red';
   
    return (
        <div
          style={{padding: '16px',textAlign: 'center', borderRadius: '4px',background: backgroundColor}}
        >
            {children}
        </div>
    );
  }

  function BlackFridaySale({
    salesStartDate,
    salesEndDate,
    type,
    children
  }){
    return(
        <Banner
         type={type}
        >{children}</Banner>
    );
  } 

  function LoggedInBanner({type, user, children}){
    if(!user || user.registrationStatus === 'unverified'){
        return null;
    }
    return(
        <Banner
         type={type}
        >{children}</Banner>
    );
  }
}







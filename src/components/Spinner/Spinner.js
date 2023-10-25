import React from 'react';
import { Loader } from 'react-feather';
import styled from 'styled-components';


function Spinner() {
  return<>
  <div style={{display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
    <div className="loaderspinner">
          <Loader size={32} color='white' />
      </div>
    <div style={{color: 'white'}}>Please Wait</div>
  </div>
  </>
}

export default Spinner;

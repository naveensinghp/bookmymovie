import React from 'react';
import { Loader } from 'react-feather';
import styled from 'styled-components';


function Spinner() {
  return <div className="loaderspinner">
    <Loader size={32} color='white' />
  </div>;
}

export default Spinner;

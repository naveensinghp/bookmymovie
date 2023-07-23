import React from 'react';
import { home } from 'react-icons-kit/icomoon/home'
import { Icon } from 'react-icons-kit'

function SubmenuLeft() {
  return <div className="threemenu" >
        <ul style={{listStyleType: 'none',display: 'flex',gap: '20px',fontWeight: 'bold',fontSize: '12px'}}>
          <li> <Icon style={{color: 'white'}} icon={home} /></li>
          <li>MAX</li>
          <li>4DX</li>
          <li>Playhouse</li>
          <li>GOLD</li>
          <li>P[XL]</li>
          <li>ONYX</li>
        </ul>
      </div>;
}

export default SubmenuLeft;

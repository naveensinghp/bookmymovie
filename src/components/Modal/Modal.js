import React from 'react';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit'
import {ic_mic_outline} from 'react-icons-kit/md/ic_mic_outline'

function Modal({handleDimiss,children}) {
  return (
    <Modalwrapper>
      <Modalbackdrop>
        <Modaldialog>
          <div>
             {children}
             {/* <Icon size="1.4em" icon={ic_mic_outline} onClick={alert('test')}/> */}
             <button onClick={handleDimiss}>
          Toggle modal
        </button>
          </div>
          {/* <Close>
            {children}
             <Icon size="1.4em" icon={ic_mic_outline} onClick={handleDimiss}/>
          </Close> */}
        </Modaldialog>
      </Modalbackdrop>
    </Modalwrapper>
  );
}

export default Modal;


const Modalwrapper = styled.div`
  position: fixed;
  inset: 0;
  display: grid;
  place-content: center;
`;

const Modalbackdrop = styled.div`
  position: absolute;
  inset: 0;
  background: hsl(0deg 0% 0% / 0.75);
`;

const Modaldialog = styled.div`
  position: relative;
  background: white;
  border-radius: 8px;
  padding: 32px;

`;

const Close = styled.div`
position: absolute;
  top: 0;
  right: 0;
  padding: 16px;
  color: white;
  transform: translateY(-100%);
  cursor: pointer;


`;
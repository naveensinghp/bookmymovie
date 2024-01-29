import React from 'react';
import styles from './Slider.module.css';

function Slider({
    label,
    handleSize = 16,
    handleColor,
    handleActiveColor,
    ...delegated 
}){
    const id = React.useId();
    return(
        <div className="">
            <label htmlFor={id}>
                {label}
            </label>
            <input
                { ...delegated }
                type="range"
                id={id}
                className={styles.slider}
                style={{
                    '--handle-size': handleSize + 'px',
                    '--handle-color': handleColor,
                    '--handle-active-color': handleActiveColor
                }}
            />
        </div>
    );
}

export default Slider;
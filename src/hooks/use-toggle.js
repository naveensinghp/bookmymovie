import React from 'react';

function useToggle(initialvalue = false){
    if(typeof initialvalue !== 'boolean' ){
        console.warn('Invalid type for useToggle');
    }
    const[value,setValue] = React.useState(initialvalue);

    function toggleValue(){
        setValue((currentvalue) => !currentvalue);
    }
    return [value,toggleValue];
}

export default useToggle;
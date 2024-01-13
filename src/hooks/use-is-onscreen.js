import React from "react";

function useIsonScreen(){
    const[isOnscreen,setIsonscreen] = React.useState(false);
    const elementRef = React.useRef()

    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) =>{
            const [entry] = entries;
            setIsonscreen(entry.isIntersecting)
        });
        observer.observe(elementRef.current);
        return () => {
            observer.disconnect();
        }
    },[elementRef])
    return [isOnscreen, elementRef];
    
}

export default useIsonScreen
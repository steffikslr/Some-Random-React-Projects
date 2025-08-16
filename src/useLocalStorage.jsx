import { useState, useEffect, use } from 'react';

function useLocalStorage(key, initialValue){
    const [value, setValue] = useState(
        () => {
            try{
                let currentValue = localStorage.getItem(key);
                if(currentValue){
                    return JSON.parse(currentValue);
                }
                else{
                    return initialValue;
                }
            }
            catch(error){
                console.error( error);
                return initialValue;
            }

        }
    );

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
     }, [key, value])


    return ([value, setValue])

}

export default useLocalStorage;
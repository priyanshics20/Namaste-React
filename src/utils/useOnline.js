import { useState, useEffect } from "react";

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    // addEventListener hold memory so it is not good practice so we have to clean it up 
    useEffect(() => {
        const handleOnline =  ()=>{
            setIsOnline(true);
        }
        const handleOffline = ()=>{
            setIsOnline(false);
        }
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        }
    }, []);
    //return true if you are online return false if you are offline
    return isOnline;
}

export default useOnline;
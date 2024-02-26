import { useRouter } from "next/router";
import { useEffect } from "react";

const Protected = ({children})=>{
    const router = useRouter()

    useEffect(()=>{
        const isAuthenticated= true;
        if(!isAuthenticated){
            router.push('/Login')
        }
    },[router])
    return <>{children}</>
}

export default Protected
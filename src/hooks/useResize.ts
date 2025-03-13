import { useEffect, useState } from "react";

export const useResize = () => {
    const [windowSize, setWindowSize] = useState(0)

    useEffect(() => {
            setWindowSize(window.innerWidth)
    
            const handleResize = () => {
                setWindowSize(window.innerWidth)
            }
    
            window.addEventListener('resize', handleResize)
    
            return () => {
                window.removeEventListener('resize', handleResize)
            }
            
        }, [])

        return { windowSize }
}

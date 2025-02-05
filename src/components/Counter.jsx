import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [bgcolor, setBgColor] = useState("bg-blue-100");
    
    useEffect(()=> {
        const lightness = Math.max(100 - count * 1.5, 30);
        setBgColor(`bg-blue-${lightness}`);
    }, [count])
  return (
    <div>
        
    </div>
  )
}

export default Counter
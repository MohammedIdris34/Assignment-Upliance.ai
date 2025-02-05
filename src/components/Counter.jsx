import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [bgcolor, setBgColor] = useState("bg-blue-100");
    
    useEffect(()=> {
        const lightness = Math.max(100 - count * 1.5, 30);
        setBgColor(`bg-blue-${lightness}`);
    }, [count]);
  return (

    <div className='m-10 text-white border-1 w-52 p-3 rounded-3xl'>
        <p className='text-center py-2 my-1'>{count}</p>
        <div className='flex justify-between py-7 '>
            <button onClick={()=>setCount(count+1)} className='border-1 h-7 w-12 rounded-xs'>+</button>

            <button onClick={()=>setCount(0)} className='border-1 h-7 w-14 rounded-xs'>Reset</button>

            <button onClick={()=>setCount(count > 0 ? count - 1 : 0)} className='border-1 h-7 w-12 rounded-xs '>-</button>


        </div>

    </div>
  )
}

export default Counter
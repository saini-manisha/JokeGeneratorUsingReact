import {useEffect, useState} from 'react';

const Counter = (props) => {
    const [count,setCount]=useState(5);
    useEffect(()=>{
        const intervalId=setInterval(()=>{
            setCount((prevCount)=>{
                if(prevCount>0){
                    return prevCount-1;
                }
                else{
                    props.setJoke("");
                    clearInterval(intervalId);
                    return 0;
                }
            })
        }, 1000);

        return ()=> clearInterval(intervalId);

    },[])
    return <div>{count}</div>
}

export default Counter
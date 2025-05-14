import React,{useState} from 'react'
import Button from './Button';
import './joke.css'
import Counter from './Counter';

const Joke = () => {
    const [joke,setJoke]=useState("");
    
    const fetchJoke=()=>{
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single").
        then((res)=>res.json())
        .then((data)=>setJoke(data.joke));
    }
  return (
    <div >
        <Button fetchJoke={fetchJoke}></Button>
        <div className='joke'>{joke}</div>
        {joke && <Counter joke={joke} setJoke={setJoke}></Counter>}
    </div>
  )
}

export default Joke
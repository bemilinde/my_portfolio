import { useEffect, useState } from 'react';
import '../styles/HelloText.css'

function HelloText(){

  const txt = "텍스트 스트 134578 텍스트 텍스트 텍스트" 
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setText(text + txt[count]);
      setCount(count+1);
    }, 50);
    if(count === txt.length){
      clearInterval(interval);
    }
    return () => clearInterval(interval)
  })

  return(
    <div>
      {text}
    </div>
  );
};

export default HelloText;
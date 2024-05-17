import { useState } from "react"
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";

const Like = () => {
    const [isFilled, setIsFilled] = useState(false);
    
    const handleClick = () => {
        setIsFilled(!isFilled);
    };
    
      return (   
         <div onClick={handleClick}>
      {isFilled ? <AiFillLike size={150}/> : <AiOutlineLike size={150}/>}
    
    
        </div>
      )
    }
    
    export default Like



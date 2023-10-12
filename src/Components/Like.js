import React, { useState } from "react"
import "./Like.css"

const Like = () => {
const [like ,setLike]=useState('🤍')
const handleLike=()=>{
    
    if(like==='🤍'){
        setLike('❤️')
    }
   if(like==="❤️"){
    setLike('🤍')
   }
}

    return (
        <>
        <button className="like-btn" type="submit" onClick={handleLike}>
                {like}
        </button>
        </>
    )
}

export default Like;
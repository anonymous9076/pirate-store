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
        <button className="like-btn" type="submit" title="Wishlist" onClick={handleLike}>
                {like}
        </button>
        </>
    )
}

export default Like;
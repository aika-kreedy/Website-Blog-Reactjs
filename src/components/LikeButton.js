import React, { useState } from 'react';
import {BiLike } from 'react-icons/bi';

const LikeButton = () => {

    const [count, setCount] = useState(0);

    const increaseCount = () => {
      setCount(count + 1);
    };

  return (
    <div><h4 className='reaction'><button onClick={increaseCount} style={{backgroundColor:'transparent',border:'none'}}>{count}<BiLike color='blue' size={25}/></button></h4></div>
  )
}

export default LikeButton
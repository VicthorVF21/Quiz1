import React, { useState } from 'react';

function ContadorLikes() {
    const [likes, setLikes] = useState(0);

    const incrementarLikes = () => {
      setLikes(likes + 1);
    };
  
    const disminuirLikes = () => {
      if(likes > 0){  
      setLikes(likes - 1);
      }
    };
  
    return (
      <div id="CantidadLi">
        <h1>Cantidad de likes: {likes}</h1>
        <button onClick={incrementarLikes}>👍</button>
        <button onClick={disminuirLikes}>👎</button>
      </div>
    );
  }

export default ContadorLikes;
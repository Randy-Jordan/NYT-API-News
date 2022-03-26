import React, { useState } from 'react';
import './Story.css';
import FAL from './FAL';


function Story({
  title, url, multimedia = '', time, byline,className
}) {
  const date = new Date(time);
  const dateDisplay = date.toLocaleString();
  
  return (
    <article className={className}>

      <img alt="News" src={multimedia} />

      <h3>{title}</h3>
      
    

      <small>{byline}</small>
      <time>
        <span>Published: </span>
        {dateDisplay}
      </time>
      
      <div><FAL url={url} /> </div>
    </article>

  );
}

export default Story;

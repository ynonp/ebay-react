import React, { useState, useEffect } from 'react';

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/

export default function Timer(props) {
  const [ticks, setTicks] = useState(0);

  // if second paramter is not passed -> re-init the effect each render
  // if second parameter is [] -> create the effect only once
  useEffect(function() {
    const clock = setInterval(function() {
      console.log(ticks);
      setTicks(ticks + 1);
    }, 1000);

    return function() {
      clearInterval(clock);
    }
  }, []);

  return <p>ticks: {ticks}</p>
}


import React, { useEffect, useState } from "react";

const Advice = () => {
  const resolution = `${window.screen.availWidth}×${window.screen.availHeight}`;
  const imageUrl = `https://source.unsplash.com/random/${resolution}/?motivational`;

  const [advice, setAdvice] = useState("");
  useEffect(() => {
    async function getAdvice() {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip.advice);
    }

    getAdvice();
  }, []);

  return (
    <div className="container">
      <img src={imageUrl} alt="background" />
      <div className="overlay"></div>
      <div className="advice">
        {advice ? <h1>{advice}</h1> : <h1>Loading...</h1>}
      </div>
    </div>
  );
};

export default Advice;

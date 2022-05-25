import React, { useEffect, useState } from "react";
import refreshIcon from "../assets/refresh.svg";

const Advice = () => {
  const resolution = `${window.screen.availWidth}×${window.screen.availHeight}`;
  const imageUrl = `https://source.unsplash.com/random/${resolution}/?superhero`;

  const [advice, setAdvice] = useState("");
  const [reload, setReload] = useState(false);

  useEffect(() => {
    async function getAdvice() {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip.advice);
    }

    getAdvice();
  }, [reload]);

  function refresh() {
    setReload((prev) => !prev);
  }

  return (
    <div className="container">
      <img src={imageUrl} alt="background" className="background" />
      <div className="overlay"></div>
      <div className="advice">
        {advice ? <h1>{advice}</h1> : <h1>Loading...</h1>}
        <button onClick={refresh}>
          <img src={refreshIcon} alt="refresh" className="refresh" />
        </button>
      </div>
    </div>
  );
};

export default Advice;

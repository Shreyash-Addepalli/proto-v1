import React, { useEffect, useState } from "react";
import Popup from "../Popup/Popup";

const Landing = () => {
  const [showPopup, setshowPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setshowPopup(!showPopup);
      window.scrollTo(0,1);
    }, 3000);
  }, []);

  return (
    <>
      <div className="product">
        <h1>proto</h1>
      </div>
      <div className="fancy">
        <h3>de_plan</h3>
      </div>
      <div className="land">
        {showPopup && <Popup trigger={showPopup} setTrigger={setshowPopup} />}
      </div>
    </>
  );
};

export default Landing;

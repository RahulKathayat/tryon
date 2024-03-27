import React from "react";

const VTO = ({ setStatus, SetLogin }) => {
  useEffect(() => {
    const receiveDataFromParent = (event) => {
      // Handle data received from the parent
      console.log('Received data from parent:', event.data);
    };

    // Add event listener to listen for messages from the parent window
    window.addEventListener('message', receiveDataFromParent);

    // Clean up the event listener
    return () => {
      window.removeEventListener('message', receiveDataFromParent);
    };
  }, []);
  return (
    <div>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={'/assets/swaplogoblack.png'} height={60}/>
          &nbsp;&nbsp;
          <img
            src={"/assets/icons8-hanger-50.png"}
            alt="not found"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setStatus(true);
              SetLogin(true);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default VTO;

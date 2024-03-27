import React, { useState,useEffect } from "react";
import "./component/Login.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import VTO from "./component/VTO/VTO";
import LoginCom from "./component/Auth/Login";
import Register from "./component/Auth/Register";
import TakeImages from "./component/TakeImage/TakeImages";
import Measurement from "./component/Measurement/Measurement";
import ImageFail from "./component/ImageFailed/ImageFailed";
import CongratulationCom from "./component/Congratulation/Congratulation";
import ConfirmBox from "./component/ConfirmBox/ConfirmBox";
import Mobile from "./component/Mobile/Mobile";
import useStore from './vtoStore';

const theme = createTheme();

const Login = () => {
  const { apparelUrl, setApparelUrl } = useStore();

  useEffect(() => {
    console.log("hello");

    const receiveDataFromParent = (event) => {
      
      console.log('Received data from parent:', event.data);
      const data = event.data;
      // setApparelUrl(data);
    };

    // Add event listener to listen for messages from the parent window
    window.addEventListener('message', receiveDataFromParent);

    return () => {
      window.removeEventListener('message', receiveDataFromParent);
    };
  }, []);


  const [login, SetLogin] = useState("");
  const [PhotoImage, setPhotoImage] = useState(false);
  const [Measure, setMeasure] = useState(false);
  const [status, setStatus] = useState(false);
  const [ImageFailed, setImageFailed] = useState(false);
  const [Mobiledata, setMobiledata] = useState(false);
  const [confirm, setconfirm] = useState(false);
  const [Congratulation, setCongratulation] = useState(false);

  const close = (data) => {
    console.log(data);
    window.location.reload();
  };

  const back = (data) => {
    console.log(data);
    setMobiledata(false);
    setCongratulation(true);
  };

  return (
    <div style={{ fontFamily: "SoleilRegular", sansSerif: "sans-serif" }}>
      <p>Current text: {apparelUrl}</p>
      {!status && (
        <>
          <VTO SetLogin={SetLogin} setStatus={setStatus} />
        </>
      )}

      {login === true && (
        <>
          <LoginCom SetLogin={SetLogin} setPhotoImage={setPhotoImage} />
        </>
      )}

      {login === false && (
        <>
          <Register SetLogin={SetLogin} />
        </>
      )}

      {PhotoImage === true && (
        <>
          <TakeImages
            setPhotoImage={setPhotoImage}
            setImageFailed={setImageFailed}
            setMeasure={setMeasure}
          />
        </>
      )}

      {Measure && (
        <ThemeProvider theme={theme}>
          <Measurement
            setMeasure={setMeasure}
            setPhotoImage={setPhotoImage}
            setStatus={setStatus}
            setCongratulation={setCongratulation}
          />
        </ThemeProvider>
      )}

      {ImageFailed && <ImageFail />}

      {Congratulation && (
        <div style={{ fontFamily: "SoleilRegular", sansSerif: "sans-serif" }}>
          <div>
            <ThemeProvider theme={theme}>
              <CongratulationCom
                setMobiledata={setMobiledata}
                setconfirm={setconfirm}
                setCongratulation={setCongratulation}
              />
            </ThemeProvider>
          </div>
        </div>
      )}

      {confirm && (
        <>
          <div style={{ fontFamily: "SoleilRegular", sansSerif: "sans-serif" }}>
            <ThemeProvider theme={theme}>
              <ConfirmBox />
            </ThemeProvider>
          </div>
        </>
      )}

      {Mobiledata && (
        <>
          <div>
            <ThemeProvider theme={theme}>
              <Mobile
                back={back}
                close={close}
                setStatus={setStatus}
                setMobiledata={setMobiledata}
              />
            </ThemeProvider>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;

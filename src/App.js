import React, { useState } from "react";
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

const theme = createTheme();

const Login = () => {
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

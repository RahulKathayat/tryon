import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import TryOn from "./Tryon";
import Favorite from "./Favorite";
import Profile from "./Profile";
import "./Login.css";
import axios from "axios";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useFormik } from "formik";
import BodyMeas from "./BodyMeas";
import { Box } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { makeStyles } from "@mui/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import * as Yup from "yup";
import { Button, Stack, TextField, Typography, Slider } from "@mui/material";
import Switch from "@mui/material/Switch";

const useStyles = makeStyles({
  root: {
    color: "black",
  },
});
const theme = createTheme();

function valueLabelFormat(value) {
  const units = ["cm", "MB", "GB", "TB"];

  let unitIndex = 0;
  let scaledValue = value;

  while (scaledValue >= 1024 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 1024;
  }

  return `${scaledValue} ${units[unitIndex]}`;
}

const Login = () => {
  const [login, SetLogin] = useState("");
  const [PhotoImage, setPhotoImage] = useState(false);
  const [Measure, setMeasure] = useState(false);
  const [status, setStatus] = useState(false);
  const [switchState, setSwitchState] = useState(false);
  const [switchState1, setSwitchState1] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [isChecked1, setChecked1] = useState(false);
  const [ImageFailed, setImageFailed] = useState(false);
  const [Mobiledata, setMobiledata] = useState(false);
  const [selectedOptionProfile, setSelectedOptionProfile] = useState("profile");

  const handleOptionClick = (option) => {
    setSelectedOptionProfile(option);
  };
  const classes = useStyles();
  const [selectedButton, setSelectedButton] = useState(null);

  const [selectedAdjustment, setSelectedAdjustment] = useState(null);
  const [confirm, setconfirm] = useState(false);

  const handleAdjustmentChange = (adjustment) => {
    setSelectedAdjustment(adjustment);
  };

  const handleButtonClick = (btnType) => {
    setSelectedButton(btnType);
  };

  const toggleSwitch = () => {
    setChecked(!isChecked);
  };
  console.log(isChecked);
  const toggleSwitch1 = () => {
    setChecked1(!isChecked1);
    console.log(isChecked1);
  };
  const handleSwitchChange = () => {
    setSwitchState(!switchState);
  };
  const handleSwitchChange1 = () => {
    setSwitchState1(!switchState1);
  };

  const [Congratulation, setCongratulation] = useState(false);

  const [ImageError, setImageError] = useState("");
  const [Image2Error, setImage2Error] = useState("");

  const [ButtonStatus, setButtonStatus] = useState("male");
  const [ButtonStatusInch, setButtonStatusInch] = useState("cm");
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption11, setSelectedOption11] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption22, setSelectedOption22] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectedOption33, setSelectedOption33] = useState("");
  const [selectedOption4, setSelectedOption4] = useState("");
  const [selectedOption5, setSelectedOption5] = useState("");
  const [selectedOption55, setSelectedOption55] = useState("");
  const [selectedOption6, setSelectedOption6] = useState("");
  const [selectedOption66, setSelectedOption66] = useState("");

  const handleSelectChange1 = (e) => {
    setSelectedOption1(e.target.value);
  };
  const handleSelectChange11 = (e) => {
    setSelectedOption11(e.target.value);
  };
  const handleSelectChange2 = (e) => {
    setSelectedOption2(e.target.value);
  };
  const handleSelectChange22 = (e) => {
    setSelectedOption22(e.target.value);
  };
  const handleSelectChange3 = (e) => {
    setSelectedOption3(e.target.value);
  };
  const handleSelectChange33 = (e) => {
    setSelectedOption33(e.target.value);
  };
  const handleSelectChange4 = (e) => {
    setSelectedOption4(e.target.value);
  };
  const handleSelectChange5 = (e) => {
    setSelectedOption5(e.target.value);
  };
  const handleSelectChange55 = (e) => {
    setSelectedOption55(e.target.value);
  };
  const handleSelectChange6 = (e) => {
    setSelectedOption6(e.target.value);
  };
  const handleSelectChange66 = (e) => {
    setSelectedOption66(e.target.value);
  };

  const handleSignUp = async () => {
    // let error = false;
    // if (fullNameSign === "") {
    //   error = true;
    //   setNameSignError("Please enter a full name");
    // }
    // if (emailSign === "") {
    //   error = true;
    //   setEmailSignError("Please enter a valid email");
    // }
    // if (passwordSign === "") {
    //   error = true;
    //   setPasswordSignError("Please enter a password");
    // }
    // if (!error) {
    //   try {
    //     const url =
    //       "https://ae60-2409-4043-6eb6-c23-41d7-5166-a321-3a9b.ngrok-free.app/api/user/register";
    //     const response = await axios.post(url, {
    //       firstName: fullNameSign,
    //       email: emailSign,
    //       password: passwordSign,
    //     });
    //     console.log("register", response);
    //   } catch (e) {
    //     console.log("error", e);
    //   }
    // }
  };

  const handleLogin = async () => {
    // let error = false;
    // if (email === "") {
    //   error = true;
    //   setEmailError("Please enter a valid email");
    // }
    // if (password === "") {
    //   error = true;
    //   setPasswordError("Please enter a password");
    // }
    // console.log("login");
    // if (!error) {
    //   try {
    //     const url =
    //       "https://99bc-2409-4043-6eb6-c23-41d7-5166-a321-3a9b.ngrok-free.app/api/auth/login";
    //     const response = await axios.post(url, {
    //       email: email,
    //       password: password,
    //     });
    //     console.log("register", response);
    //   } catch (e) {
    //     console.log("error", e);
    //   }
    // }
  };

  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedImage2, setUploadedImage2] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadedImage({
      file,
      preview: URL.createObjectURL(file),
    });
  }, []);
  const onDrop2 = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadedImage2({
      file,
      preview: URL.createObjectURL(file),
    });
  }, []);

  const {
    getRootProps: getRootPropsFirst,
    getInputProps: getInputPropsFirst,
    isDragActive: isDragActiveFirst,
  } = useDropzone({ onDrop: onDrop });
  const {
    getRootProps: getRootPropsSecond,
    getInputProps: getInputPropsSecond,
    isDragActive: isDragActiveSecond,
  } = useDropzone({ onDrop: onDrop2 });

  const formik1 = useFormik({
    initialValues: {
      email: "",
      password: "",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        // await auth.signIn(values.email, values.password);
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      name: Yup.string().max(255).required("Name is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        // await auth.signUp(values.email, values.name, values.password);
        // router.push("/");
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  return (
    <div style={{ fontFamily: "Soleil", sansSerif: "sans-serif" }}>
      {!status && (
        <div className="container">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <b
              style={{
                marginTop: "20px",
                fontWeight: "bold",
                fontSize: "30px",
              }}
            >
              VTO
            </b>
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
      )}

      {login === true && (
        <>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                flex: "1 1 auto",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                padding: "2%",
              }}
            >
              <Box
                sx={{
                  maxWidth: 550,
                  px: 3,
                  py: "50px",
                  width: "100%",
                  border: "3px #d4cfc5 solid",
                  borderRadius: "8px",

                  position: "relative",
                }}
              >
                <Typography
                  color="text.secondary"
                  variant="body2"
                  style={{
                    position: "absolute",
                    right: "10px",
                    bottom: "5px",
                    fontFamily: "Soleil",
                    sansSerif: "sans-serif",
                    fontWeight: 400,
                    fontSize: "1rem",
                    lineHeight: 1,
                    letterSpacing: "0.00735em",
                    color: "black",
                  }}
                >
                  Powerd by swap{" "}
                  <span>
                    <img
                      src={"/assets/icons8-social-64.png"}
                      alt="not found"
                      style={{ height: "28px", cursor: "pointer" }}
                    />
                  </span>
                </Typography>
                <div>
                  <Stack spacing={1} sx={{ mb: 3 }}>
                    <Stack spacing={1} sx={{ mb: 3, textAlign: "center" }}>
                      <Typography
                        variant="h5"
                        style={{
                          fontFamily: "Soleil",
                          sansSerif: "sans-serif",
                          fontWeight: "bold",
                        }}
                      >
                        Virtual Fitting Room
                      </Typography>
                    </Stack>

                    <Typography
                      variant="h4"
                      style={{ fontFamily: "Soleil", sansSerif: "sans-serif" }}
                    >
                      Login
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      style={{ fontFamily: "Soleil", sansSerif: "sans-serif" }}
                    >
                      Don&apos;t have an account? &nbsp;
                      <span
                        underline="hover"
                        variant="subtitle2"
                        style={{
                          color: "black",
                          cursor: "pointer",
                          underline: "hober",
                        }}
                        onClick={() => {
                          SetLogin(false);
                        }}
                      >
                        Register
                      </span>
                    </Typography>
                  </Stack>

                  <form noValidate onSubmit={formik1.handleSubmit}>
                    <Stack
                      spacing={3}
                      style={{ fontFamily: "Soleil", sansSerif: "sans-serif" }}
                    >
                      <TextField
                        error={
                          !!(formik1.touched.email && formik1.errors.email)
                        }
                        fullWidth
                        helperText={
                          formik1.touched.email && formik1.errors.email
                        }
                        label="Email Address"
                        name="email"
                        onBlur={formik1.handleBlur}
                        onChange={formik1.handleChange}
                        type="email"
                        value={formik1.values.email}
                        style={{
                          fontFamily: "Soleil",
                          sansSerif: "sans-serif",
                        }}
                      />
                      <TextField
                        error={
                          !!(
                            formik1.touched.password && formik1.errors.password
                          )
                        }
                        fullWidth
                        helperText={
                          formik1.touched.password && formik1.errors.password
                        }
                        label="Password"
                        name="password"
                        style={{
                          fontFamily: "Soleil",
                          sansSerif: "sans-serif",
                        }}
                        onBlur={formik1.handleBlur}
                        onChange={formik1.handleChange}
                        type="password"
                        value={formik1.values.password}
                      />
                    </Stack>
                    {formik1.errors.submit && (
                      <Typography color="error" sx={{ mt: 3 }} variant="body2">
                        {formik1.errors.submit}
                      </Typography>
                    )}
                    <Button
                      fullWidth
                      size="large"
                      sx={{ mt: 3 }}
                      type="submit"
                      variant="contained"
                      style={{
                        backgroundColor: "black",
                        fontFamily: "Soleil",
                        sansSerif: "sans-serif",
                      }}
                      onClick={() => {
                        setTimeout(() => {
                          SetLogin(null);
                          setPhotoImage(true);
                        }, [0]);
                      }}
                    >
                      Continue
                    </Button>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "2%",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: 0,
                          height: "2px",
                          width: "45%",
                          backgroundColor: "#a6baac",
                        }}
                      ></div>

                      <h6 style={{ margin: "0 0px" }}>or</h6>

                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          right: 0,
                          height: "2px",
                          width: "45%",
                          backgroundColor: "#a6baac",
                        }}
                      ></div>
                    </div>

                    <Typography
                      color="text.secondary"
                      variant="body2"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontFamily: "Soleil",
                        sansSerif: "sans-serif",

                        fontWeight: 200,
                        fontSize: "1rem",
                        lineHeight: 1,
                        letterSpacing: "0.00735em",
                        marginTop: "2%",
                      }}
                    >
                      Continue with{" "}
                      <span>
                        <img
                          src={"/assets/icons8-google-48.png"}
                          alt="google"
                          style={{
                            transform: "scale(0.78)",
                            marginLeft: "4%",
                            cursor: "pointer",
                          }}
                        />
                      </span>{" "}
                      <img
                        src={"/assets/icons8-facebook-48.png"}
                        alt="facebook"
                        style={{ transform: "scale(0.8)", cursor: "pointer" }}
                      />
                      <span></span>
                    </Typography>
                  </form>
                </div>
              </Box>
            </Box>
          </ThemeProvider>
        </>
      )}

      {login === false && (
        <>
          <Box
            sx={{
              flex: "1 1 auto",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              padding: "2%",
            }}
          >
            <Box
              sx={{
                maxWidth: 550,
                px: 3,
                py: "50px",
                width: "100%",
                border: "3px #d4cfc5 solid",
                borderRadius: "8px",
                position: "relative",
              }}
            >
              <Typography
                color="text.secondary"
                variant="body2"
                style={{
                  position: "absolute",
                  right: "10px",
                  bottom: "5px",
                  fontFamily: "Soleil",
                  sansSerif: "sans-serif",
                  fontWeight: 400,
                  fontSize: "1rem",
                  lineHeight: 1,
                  letterSpacing: "0.00735em",
                  color: "black",
                }}
              >
                Powerd by swap{" "}
                <span>
                  <img
                    src={"/assets/icons8-social-64.png"}
                    alt="not found"
                    style={{ height: "28px", cursor: "pointer" }}
                  />
                </span>
              </Typography>

              <div>
                <Stack spacing={1} sx={{ mb: 3 }}>
                  <Stack spacing={1} sx={{ mb: 3, textAlign: "center" }}>
                    <Typography
                      variant="h5"
                      style={{
                        fontFamily: "Soleil",
                        sansSerif: "sans-serif",
                        fontWeight: "bold",
                      }}
                    >
                      Virtual Fitting Room
                    </Typography>
                  </Stack>

                  <Typography
                    variant="h4"
                    style={{ fontFamily: "Soleil", sansSerif: "sans-serif" }}
                  >
                    Register
                  </Typography>
                  <Typography
                    color="text.secondary"
                    variant="body2"
                    style={{ fontFamily: "Soleil", sansSerif: "sans-serif" }}
                  >
                    Already have an account? &nbsp;
                    <span
                      underline="hover"
                      variant="subtitle2"
                      style={{
                        color: "black",
                        cursor: "pointer",
                        underline: "hober",
                      }}
                      onClick={() => {
                        SetLogin(true);
                      }}
                    >
                      Log in
                    </span>
                  </Typography>
                </Stack>
                <form noValidate onSubmit={formik.handleSubmit}>
                  <Stack spacing={3}>
                    <TextField
                      error={!!(formik.touched.name && formik.errors.name)}
                      fullWidth
                      helperText={formik.touched.name && formik.errors.name}
                      label="Name"
                      name="name"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                    <TextField
                      error={!!(formik.touched.email && formik.errors.email)}
                      fullWidth
                      helperText={formik.touched.email && formik.errors.email}
                      label="Email Address"
                      name="email"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      type="email"
                      value={formik.values.email}
                    />
                    <TextField
                      error={
                        !!(formik.touched.password && formik.errors.password)
                      }
                      fullWidth
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
                      label="Password"
                      name="password"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      type="password"
                      value={formik.values.password}
                    />
                  </Stack>
                  {formik.errors.submit && (
                    <Typography color="error" sx={{ mt: 3 }} variant="body2">
                      {formik.errors.submit}
                    </Typography>
                  )}
                  <Button
                    fullWidth
                    size="large"
                    sx={{ mt: 3 }}
                    type="submit"
                    variant="contained"
                    style={{
                      backgroundColor: "black",
                      fontFamily: "Soleil",
                      sansSerif: "sans-serif",
                    }}
                  >
                    Get started
                  </Button>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "2%",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: 0,
                        height: "2px",
                        width: "45%",
                        backgroundColor: "#a6baac",
                      }}
                    ></div>

                    <h6 style={{ margin: "0 0px" }}>or</h6>

                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        right: 0,
                        height: "2px",
                        width: "45%",
                        backgroundColor: "#a6baac",
                      }}
                    ></div>
                  </div>

                  <Typography
                    color="text.secondary"
                    variant="body2"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontFamily: "Soleil",
                      sansSerif: "sans-serif",

                      fontWeight: 200,
                      fontSize: "1rem",
                      lineHeight: 1,
                      letterSpacing: "0.00735em",
                      marginTop: "2%",
                    }}
                  >
                    Continue with{" "}
                    <span>
                      <img
                        src={"/assets/icons8-google-48.png"}
                        alt="google"
                        style={{
                          transform: "scale(0.78)",
                          marginLeft: "4%",
                          cursor: "pointer",
                        }}
                      />
                    </span>{" "}
                    <img
                      src={"/assets/icons8-facebook-48.png"}
                      alt="facebook"
                      style={{ transform: "scale(0.8)", cursor: "pointer" }}
                    />
                    <span></span>
                  </Typography>
                </form>
              </div>
            </Box>
          </Box>
        </>
      )}

      {PhotoImage === true && (
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              flex: "1 1 auto",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              padding: "2%",
            }}
          >
            <Box
              sx={{
                maxWidth: 550,
                px: 3,
                py: "30px",

                paddingBottom: "70px",
                width: "100%",
                border: "3px #d4cfc5 solid",
                borderRadius: "8px",
                position: "relative",
              }}
            >
              <Typography
                color="text.secondary"
                variant="body2"
                style={{
                  position: "absolute",
                  right: "10px",
                  bottom: "5px",
                  fontFamily: "Soleil",
                  sansSerif: "sans-serif",
                  fontWeight: 400,
                  fontSize: "1rem",
                  lineHeight: 1,
                  letterSpacing: "0.00735em",
                  color: "black",
                }}
              >
                Powerd by swap{" "}
                <span>
                  <img
                    src={"/assets/icons8-social-64.png"}
                    alt="not found"
                    style={{ height: "28px", cursor: "pointer" }}
                  />
                </span>
              </Typography>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div></div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginLeft: "40px",
                  }}
                >
                  <Typography
                    color="text.secondary"
                    variant="body2"
                    style={{
                      fontWeight: 400,
                      fontSize: "1.7rem",
                      lineHeight: 1.135,
                      letterSpacing: "0.00735em",
                      marginBottom: "10px",

                      fontFamily: "Soleil",
                      sansSerif: "sans-serif",
                    }}
                  >
                    Take 2 Images
                  </Typography>
                </div>
                <div>
                  <div>
                    <img
                      src={"/assets/icons8-x-50.png"}
                      alt="not found"
                      style={{
                        transform: "scale(0.4)",
                        cursor: "pointer",
                        marginTop: "-30px",
                      }}
                      onClick={() => {
                        setPhotoImage(false);
                        setImageFailed(true);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "2%",
                }}
              >
                <div
                  className="progress"
                  style={{ width: "300px", height: "5px" }}
                >
                  <div
                    className="progress-bar bg-pink"
                    role="progressbar"
                    style={{
                      width:
                        uploadedImage2?.file?.path && uploadedImage?.file?.path
                          ? "100%"
                          : uploadedImage?.file?.path ||
                            uploadedImage2?.file?.path
                          ? "50%"
                          : "0%",
                    }}
                  ></div>
                </div>

                <div style={{ marginLeft: "20px" }}>
                  <img
                    src={"/assets/info_471662.png"}
                    alt="not found"
                    style={{ height: "20px", cursor: "pointer" }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginTop: "10px",
                }}
              >
                <Box
                  style={{
                    border: "2px solid #cbd4ce",
                    borderRadius: "20px",
                    width: "45%",
                  }}
                >
                  <Typography
                    color="text.secondary"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "10px",
                      fontFamily: "Soleil",
                      sansSerif: "sans-serif",
                    }}
                  >
                    FRONT POSE
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "5%",
                      position: "relative",
                    }}
                  >
                    <img
                      src={"/assets/blackgirl.jpeg"}
                      alt="not found"
                      className="Girl"
                    />

                    <div
                      style={{
                        position: "absolute",
                        top: 30,
                        // left: 40,
                      }}
                      className="HAIR"
                    >
                      <Typography
                        color="text.secondary"
                        variant="body2"
                        style={{
                          fontSize: "8.9px",
                          fontFamily: "Soleil",
                          sansSerif: "sans-serif",
                          marginTop: "-10px",
                        }}
                      >
                        {" "}
                        HAIR UP
                        <span>
                          <img
                            src={"/assets/icons8-dot-32.png"}
                            alt=""
                            className="Hairimage"
                          />
                        </span>
                      </Typography>
                    </div>

                    <span
                      style={{
                        position: "absolute",
                        // top: 80,
                        // right: 15,
                        color: "black",
                        fontWeight: 200,
                        fontSize: "0.7rem",
                        lineHeight: 1,
                        letterSpacing: "0.00735em",
                      }}
                      className="TIGHT"
                    >
                      <Typography
                        color="text.secondary"
                        variant="body2"
                        style={{
                          fontSize: "8.9px",
                          fontFamily: "Soleil",
                          sansSerif: "sans-serif",
                        }}
                      >
                        TIGHT
                      </Typography>
                    </span>

                    <span style={{ position: "absolute" }} className="icons8">
                      <img
                        src={"/assets/icons8-dot-32.png"}
                        alt=""
                        style={{ height: "10px", cursor: "pointer" }}
                      />
                    </span>
                    <span
                      style={{
                        position: "absolute",
                        // top: 95,
                        // right: 15,
                        color: "black",
                        fontWeight: 200,
                        fontSize: "0.7rem",
                        lineHeight: 1,
                        letterSpacing: "0.00735em",
                      }}
                      className="FITTED"
                    >
                      <Typography
                        color="text.secondary"
                        variant="body2"
                        style={{
                          fontSize: "8.9px",
                          fontFamily: "Soleil",
                          sansSerif: "sans-serif",
                        }}
                      >
                        FITTED
                      </Typography>
                    </span>
                    <span
                      style={{
                        position: "absolute",
                        // top: 110,

                        color: "black",
                        fontWeight: 200,

                        lineHeight: 1,
                        letterSpacing: "0.00735em",
                      }}
                      className="CLOTHES"
                    >
                      <Typography
                        color="text.secondary"
                        variant="body2"
                        className="CLOTHEST"
                        style={{
                          fontSize: "8.9px",
                          fontFamily: "Soleil",
                          sansSerif: "sans-serif",
                        }}
                      >
                        CLOTHES
                      </Typography>
                    </span>

                    <span
                      style={{
                        position: "absolute",
                        bottom: 40,
                        left: 0,
                        color: "black",
                        fontWeight: 200,
                        fontSize: "0.7rem",
                        lineHeight: 1,
                        letterSpacing: "0.00735em",
                        // marginLeft:"2px"
                      }}
                      className="FLAT"
                    >
                      <Typography
                        color="text.secondary"
                        variant="body2"
                        style={{
                          fontSize: "8.9px",
                          fontFamily: "Soleil",
                          sansSerif: "sans-serif",
                        }}
                      >
                        FLAT SHOES
                      </Typography>

                      <span style={{ position: "absolute" }} className="Shoes">
                        <img
                          src={"/assets/icons8-dot-32.png"}
                          alt=""
                          style={{ height: "10px", cursor: "pointer" }}
                        />
                      </span>
                    </span>
                    <span
                      style={{
                        position: "absolute",
                        bottom: 25,
                        left: 0,
                        color: "black",
                        fontWeight: 200,
                        fontSize: "0.7rem",
                        lineHeight: 1,
                        letterSpacing: "0.00735em",
                        // marginLeft:"2px"
                      }}
                      className="BARE"
                    >
                      <Typography
                        color="text.secondary"
                        variant="body2"
                        style={{
                          fontSize: "8.9px",
                          fontFamily: "Soleil",
                          sansSerif: "sans-serif",
                        }}
                      >
                        OR BARE
                      </Typography>
                    </span>
                    <span
                      style={{
                        position: "absolute",
                        bottom: 10,
                        left: 0,
                        color: "black",
                        fontWeight: 200,
                        fontSize: "0.8rem",
                        lineHeight: 1,
                        letterSpacing: "0.00735em",
                        // marginLeft:"2px"
                      }}
                      className="FEET"
                    >
                      <Typography
                        color="text.secondary"
                        variant="body2"
                        style={{
                          fontSize: "8.9px",
                          fontFamily: "Soleil",
                          sansSerif: "sans-serif",
                        }}
                      >
                        FEET
                      </Typography>
                    </span>
                  </div>
                  <hr />

                  <div
                    style={{
                      paddingBottom: "10px",
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span {...getRootPropsFirst()}>
                      <img
                        src={"/assets/upload-arrow.png"}
                        alt=""
                        style={{
                          height: "40px",
                          width: "40px",
                          marginRight: "5px",
                        }}
                      />
                    </span>
                    UPLOAD
                  </div>
                </Box>
                <Box
                  style={{
                    border: "2px solid #cbd4ce",
                    borderRadius: "20px",
                    width: "45%",
                  }}
                >
                  <Typography
                    color="text.secondary"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "10px",

                      fontFamily: "Soleil",
                      sansSerif: "sans-serif",
                    }}
                  >
                    SIDE POSE
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "5%",
                    }}
                  >
                    <img
                      src={"/assets/boy.png"}
                      alt="not found"
                      className="Boy"
                    />
                  </div>
                  <hr />
                  <div
                    style={{
                      paddingBottom: "10px",
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span {...getRootPropsSecond()}>
                      <img
                        src={"/assets/upload-arrow.png"}
                        alt=""
                        style={{
                          height: "40px",
                          width: "40px",
                          marginRight: "5px",
                        }}
                      />
                    </span>
                    UPLOAD
                  </div>
                </Box>
              </div>

              <div style={{ marginTop: "20px" }}>
                <Typography
                  color="text.secondary"
                  variant="body2"
                  style={{
                    fontFamily: "Soleil",
                    sansSerif: "sans-serif",
                    marginRight: "80px",
                    marginLeft: "80px",
                    justifyContent: "center",
                    // color:"black",
                    // fontSize:"bold",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  Your privacy is important all photos will be securely locked
                  after we give you your size
                </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  type="submit"
                  variant="contained"
                  style={{
                    backgroundColor: "black",
                    fontFamily: "Soleil",
                    sansSerif: "sans-serif",
                  }}
                  onClick={() => {
                    console.log(uploadedImage2);
                    if (uploadedImage2?.file?.path == null) {
                      setImage2Error("Please Upload a image");
                    }
                    if (uploadedImage?.file?.path == null) {
                      setImageError("Please Upload a image");
                    }
                    if (
                      uploadedImage2?.file?.path &&
                      uploadedImage?.file?.path
                    ) {
                    }
                    setPhotoImage(false);
                    setMeasure(true);
                  }}
                >
                  NEXT
                </Button>
              </div>
            </Box>
          </Box>
        </ThemeProvider>
      )}
      {Measure && (
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              flex: "1 1 auto",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              padding: "2%",
            }}
          >
            <Box
              sx={{
                maxWidth: 550,
                px: 3,
                py: "50px",
                paddingBottom: "80px",
                width: "100%",
                border: "3px #d4cfc5 solid",
                borderRadius: "8px",
                position: "relative",
              }}
            >
              <Typography
                color="text.secondary"
                variant="body2"
                style={{
                  position: "absolute",
                  right: "10px",
                  bottom: "5px",
                  fontFamily: "Soleil",
                  sansSerif: "sans-serif",
                  fontWeight: 400,
                  fontSize: "1rem",
                  lineHeight: 1,
                  letterSpacing: "0.00735em",
                  color: "black",
                }}
              >
                Powerd by swap{" "}
                <span>
                  <img
                    src={"/assets/icons8-social-64.png"}
                    alt="not found"
                    style={{ height: "28px", cursor: "pointer" }}
                  />
                </span>
              </Typography>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "-40px",
                }}
              >
                <div>
                  <img
                    src={"/assets/icons8-less-than-30.png"}
                    alt="not found"
                    style={{
                      transform: "scale(0.6)",
                      cursor: "pointer",
                      marginTop: "10px",
                      marginLeft: "2px",
                    }}
                    onClick={() => {
                      setMeasure(false);
                      setPhotoImage(true);
                    }}
                  />
                </div>
                <div>
                  <img
                    src={"/assets/icons8-x-50.png"}
                    alt="not found"
                    style={{ transform: "scale(0.4)", cursor: "pointer" }}
                    onClick={() => {
                      setMeasure(false);
                      setStatus(false);
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "20px",

                  fontWeight: 400,
                  fontSize: "1rem",
                  lineHeight: 2,
                  letterSpacing: "0.00735em",
                  marginTop: "30px",
                }}
              >
                <b style={{ color: "black" }}>Gender</b>

                <div>
                  <input
                    type="checkbox"
                    id="toggle"
                    className="toggleCheckbox"
                    checked={isChecked}
                    onChange={toggleSwitch}
                    style={{ display: "none" }}
                  />
                  <label
                    htmlFor="toggle"
                    className="toggleContainer"
                    style={{
                      position: "relative",
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      width: "fit-content",
                      border: "2px solid #343434",
                      borderRadius: "10px",
                      background: "#343434",
                      fontWeight: "bold",
                      color: "#343434",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        padding: "3px",
                        textAlign: "center",
                        zIndex: "1",
                        background: !isChecked ? "#343434" : "white",
                        color: !isChecked ? "white" : "#343434",
                        transition: "all 0.3s",
                        borderRadius: "10px",
                        fontSize: "13px",
                        // padding: "10px",
                      }}
                    >
                      MALE
                    </div>
                    <div
                      style={{
                        padding: "3px",
                        textAlign: "center",
                        zIndex: "1",
                        background: isChecked ? "#343434" : "white",
                        color: isChecked ? "white" : "#343434",
                        transition: "all 0.3s",
                        borderRadius: "10px",
                        fontSize: "13px",
                        paddingRight: "10px",
                        paddingLeft: "10px",
                      }}
                    >
                      FEMALE
                    </div>
                  </label>
                  <style>
                    {`
          #toggle:checked + .toggleContainer::before {
            left: 50%;
          }

          #toggle:checked + .toggleContainer div:first-child {
            color: white;
            transition: color 0.3s, background 0.3s;
          }

          #toggle:checked + .toggleContainer div:last-child {
            color: #343434;
            transition: color 0.3s, background 0.3s;
          }

          #toggle + .toggleContainer div:first-child {
            color: #343434;
            transition: color 0.3s, background 0.3s;
          }

          #toggle + .toggleContainer div:last-child {
            color: white;
            transition: color 0.3s, background 0.3s;
          }
        `}
                  </style>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingRight: "20px",
                  paddingLeft: "20px",
                }}
              >
                <div
                  style={{
                    fontWeight: 400,
                    fontSize: "1rem",
                    lineHeight: 2,
                    letterSpacing: "0.00735em",
                  }}
                >
                  <b style={{ color: "black" }}>Enter your measurements</b>
                </div>

                <div>
                  <select
                    value={selectedOption}
                    onChange={handleSelectChange}
                    style={{
                      borderColor: "#bfc7c7",
                      borderRadius: "3px",
                      border: "2px solid #bfc7c7",
                      width: "60px",
                      padding: "2px",
                    }}
                  >
                    <option value="">UK</option>
                    <option value="option1">IN</option>
                    <option value="option2">US</option>
                    <option value="option3">NZ</option>
                  </select>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginLeft: "20px",
                  marginTop: "10px",
                }}
              >
                <div>
                  <input
                    type="checkbox"
                    id="toggle1"
                    className="toggleCheckbox"
                    checked={isChecked1}
                    onChange={toggleSwitch1}
                    style={{ display: "none" }}
                  />
                  <label
                    htmlFor="toggle1"
                    className="toggleContainer"
                    style={{
                      position: "relative",
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      width: "fit-content",
                      border: "2px solid #343434",
                      borderRadius: "10px",
                      background: "#343434",
                      fontWeight: "bold",
                      color: "#343434",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        padding: "3px",
                        textAlign: "center",
                        zIndex: "1",
                        background: !isChecked1 ? "#343434" : "white",
                        color: !isChecked1 ? "white" : "#343434",
                        transition: "all 0.3s",
                        borderRadius: "10px",
                        fontSize: "13px", // Adjusted font size
                      }}
                    >
                      CM
                    </div>
                    <div
                      style={{
                        padding: "3px",
                        textAlign: "center",
                        zIndex: "1",
                        background: isChecked1 ? "#343434" : "white",
                        color: isChecked1 ? "white" : "#343434",
                        transition: "all 0.3s",
                        borderRadius: "10px",
                        fontSize: "13px", // Adjusted font size
                      }}
                    >
                      IN
                    </div>
                  </label>
                  <style>
                    {`
          #toggle1:checked + .toggleContainer::before {
            left: 50%;
          }

          #toggle1:checked + .toggleContainer div:first-child {
            color: white;
            transition: color 0.3s, background 0.3s;
          }

          #toggle1:checked + .toggleContainer div:last-child {
            color: #343434;
            transition: color 0.3s, background 0.3s;
          }

          #toggle1 + .toggleContainer div:first-child {
            color: #343434;
            transition: color 0.3s, background 0.3s;
          }

          #toggle1 + .toggleContainer div:last-child {
            color: white;
            transition: color 0.3s, background 0.3s;
          }
        `}
                  </style>
                </div>
              </div>

              {isChecked ? (
                <div style={{ padding: "20px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "5%",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 400,
                        fontSize: "1rem",
                        lineHeight: 2,
                        letterSpacing: "0.00735em",
                      }}
                    >
                      <b>Your height&nbsp;</b>
                    </div>

                    {!isChecked1 ? (
                      <>
                        {" "}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div>
                            <select
                              value={selectedOption1}
                              onChange={handleSelectChange1}
                              style={{
                                borderColor: "#bfc7c7",
                                borderRadius: "3px",
                                border: "2px solid #bfc7c7",
                                width: "60px",
                                padding: "2px",
                              }}
                            >
                              <option value="">-</option>
                              <option value="option1">4ft</option>
                              <option value="option2">5ft</option>
                              <option value="option3">6ft</option>
                            </select>
                          </div>
                          <div style={{ marginLeft: "30px" }}>
                            <select
                              value={selectedOption2}
                              onChange={handleSelectChange2}
                              style={{
                                borderColor: "#bfc7c7",
                                borderRadius: "3px",
                                border: "2px solid #bfc7c7",
                                width: "60px",
                                padding: "2px",
                              }}
                            >
                              <option value="">-</option>
                              <option value="option0">0in</option>
                              <option value="option1">1in</option>
                              <option value="option2">2in</option>
                              <option value="option3">3in</option>
                              <option value="option4">4in</option>
                              <option value="option5">5in</option>
                              <option value="option6">6in</option>
                              <option value="option7">7in</option>
                              <option value="option8">8in</option>
                              <option value="option9">9in</option>
                              <option value="option10">10in</option>
                              <option value="option11">11in</option>
                            </select>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <Box sx={{ width: 200 }}>
                          <Slider
                            min={140}
                            step={1}
                            max={200}
                            getAriaValueText={valueLabelFormat}
                            valueLabelFormat={valueLabelFormat}
                            valueLabelDisplay="auto"
                            aria-labelledby="non-linear-slider"
                            style={{ color: "black" }}
                          />
                        </Box>
                      </>
                    )}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "5%",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 400,
                        fontSize: "1rem",
                        lineHeight: 2,
                        letterSpacing: "0.00735em",
                      }}
                    >
                      <b>Your shirt size &nbsp;&nbsp;&nbsp;&nbsp;</b>
                    </div>

                    <div>
                      <select
                        value={selectedOption3}
                        onChange={handleSelectChange3}
                        style={{
                          borderColor: "#bfc7c7",
                          borderRadius: "3px",
                          border: "2px solid #bfc7c7",
                          width: "60px",
                          padding: "2px",
                        }}
                      >
                        <option value="">-</option>
                        <option value="option1">XS</option>
                        <option value="option2">S</option>
                        <option value="option3">M</option>
                        <option value="option4">L</option>
                        <option value="option5">XL</option>
                        <option value="option6">2XL</option>
                        <option value="option7">3XL</option>
                      </select>
                    </div>
                    {/* <div></div> */}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "5%",
                    }}
                  >
                    <div
                      style={{
                        // fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: "1rem",
                        lineHeight: 2,
                        letterSpacing: "0.00735em",
                      }}
                    >
                      <b>Your waist size &nbsp;&nbsp;&nbsp;</b>
                    </div>
                    <div>
                      <select
                        value={selectedOption4}
                        onChange={handleSelectChange4}
                        style={{
                          borderColor: "#bfc7c7",
                          borderRadius: "3px",
                          border: "2px solid #bfc7c7",
                          width: "60px",
                          padding: "2px",
                        }}
                      >
                        <option value="">-</option>
                        <option value="option1">28</option>
                        <option value="option2">30</option>
                        <option value="option3">32</option>
                        <option value="option1">34</option>
                        <option value="option2">36</option>
                        <option value="option3">38</option>
                        <option value="option1">40</option>
                        <option value="option2">42</option>
                        <option value="option3">44</option>
                      </select>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "5%",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 400,
                        fontSize: "1rem",
                        lineHeight: 2,
                        letterSpacing: "0.00735em",
                      }}
                    >
                      <b>Your weight &nbsp;</b>
                    </div>
                    <div style={{ display: "flex" }}>
                      <div>
                        <select
                          value={selectedOption5}
                          onChange={handleSelectChange5}
                          style={{
                            borderColor: "#bfc7c7",
                            borderRadius: "3px",
                            border: "2px solid #bfc7c7",
                            width: "60px",
                            padding: "2px",
                          }}
                        >
                          <option value="">-</option>

                          <option value="option1">50</option>
                          <option value="option2">51</option>
                          <option value="option3">52</option>
                          <option value="option1">53</option>
                          <option value="option2">54</option>
                          <option value="option3">55</option>
                          <option value="option1">56</option>
                          <option value="option2">57</option>
                          <option value="option3">58</option>
                          <option value="option1">59</option>
                          <option value="option1">60</option>
                          <option value="option2">61</option>
                          <option value="option3">62</option>
                          <option value="option1">63</option>
                          <option value="option2">64</option>
                          <option value="option3">65</option>
                          <option value="option1">66</option>
                          <option value="option2">67</option>
                          <option value="option3">68</option>
                          <option value="option1">69</option>
                          <option value="option1">70</option>
                        </select>
                      </div>
                      <div style={{ marginLeft: "30px" }}>
                        <select
                          value={selectedOption6}
                          onChange={handleSelectChange6}
                          style={{
                            borderColor: "#bfc7c7",
                            borderRadius: "3px",
                            border: "2px solid #bfc7c7",
                            width: "60px",
                            padding: "2px",
                          }}
                        >
                          <option value="">-</option>
                          <option value="option1">.5</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div style={{ padding: "20px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "5%",
                    }}
                  >
                    <div
                      style={{
                        // fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: "1rem",
                        lineHeight: 2,
                        letterSpacing: "0.00735em",
                      }}
                    >
                      <b>Your height&nbsp;</b>
                    </div>

                    {!isChecked1 ? (
                      <>
                        {" "}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div>
                            <select
                              value={selectedOption11}
                              onChange={handleSelectChange11}
                              style={{
                                borderColor: "#bfc7c7",
                                borderRadius: "3px",
                                border: "2px solid #bfc7c7",
                                width: "60px",
                                padding: "2px",
                              }}
                            >
                              <option value="">-</option>
                              <option value="option1">4ft</option>
                              <option value="option2">5ft</option>
                              <option value="option3">6ft</option>
                            </select>
                          </div>
                          <div style={{ marginLeft: "30px" }}>
                            <select
                              value={selectedOption22}
                              onChange={handleSelectChange22}
                              style={{
                                borderColor: "#bfc7c7",
                                borderRadius: "3px",
                                border: "2px solid #bfc7c7",
                                width: "60px",
                                padding: "2px",
                              }}
                            >
                              <option value="">-</option>
                              <option value="option0">0in</option>
                              <option value="option1">1in</option>
                              <option value="option2">2in</option>
                              <option value="option3">3in</option>
                              <option value="option4">4in</option>
                              <option value="option5">5in</option>
                              <option value="option6">6in</option>
                              <option value="option7">7in</option>
                              <option value="option8">8in</option>
                              <option value="option9">9in</option>
                              <option value="option10">10in</option>
                              <option value="option11">11in</option>
                            </select>
                          </div>
                        </div>
                      </>
                    ) : (
                      <Box sx={{ width: 200 }}>
                        <Slider
                          min={140}
                          step={1}
                          max={200}
                          getAriaValueText={valueLabelFormat}
                          valueLabelFormat={valueLabelFormat}
                          valueLabelDisplay="auto"
                          aria-labelledby="non-linear-slider"
                          style={{ color: "black" }}
                        />
                      </Box>
                    )}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "5%",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 400,
                        fontSize: "1rem",
                        lineHeight: 2,
                        letterSpacing: "0.00735em",
                      }}
                    >
                      <b>Bra Size &nbsp;</b>
                    </div>
                    <div style={{ display: "flex" }}>
                      <div>
                        <select
                          value={selectedOption55}
                          onChange={handleSelectChange55}
                          style={{
                            borderColor: "#bfc7c7",
                            borderRadius: "3px",
                            border: "2px solid #bfc7c7",
                            width: "60px",
                            padding: "2px",
                          }}
                        >
                          <option value="">-</option>

                          <option value="option1">26</option>
                          <option value="option2">27</option>
                          <option value="option3">28</option>
                          <option value="option4">29</option>
                          <option value="option5">30</option>
                          <option value="option6">31</option>
                          <option value="option7">32</option>
                        </select>
                      </div>
                      <div style={{ marginLeft: "30px" }}>
                        <select
                          value={selectedOption66}
                          onChange={handleSelectChange66}
                          style={{
                            borderColor: "#bfc7c7",
                            borderRadius: "3px",
                            border: "2px solid #bfc7c7",
                            width: "60px",
                            padding: "2px",
                          }}
                        >
                          <option value="">-</option>
                          <option value="option1">.5</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "5%",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 400,
                        fontSize: "1rem",
                        lineHeight: 2,
                        letterSpacing: "0.00735em",
                      }}
                    >
                      <b>Dress Size &nbsp;&nbsp;&nbsp;&nbsp;</b>
                    </div>

                    <div>
                      <select
                        value={selectedOption33}
                        onChange={handleSelectChange33}
                        style={{
                          borderColor: "#bfc7c7",
                          borderRadius: "3px",
                          border: "2px solid #bfc7c7",
                          width: "60px",
                          padding: "2px",
                        }}
                      >
                        <option value="">-</option>
                        <option value="option1">XS</option>
                        <option value="option2">S</option>
                        <option value="option3">M</option>
                        <option value="option1">L</option>
                        <option value="option2">XL</option>
                        <option value="option3">2XL</option>
                        <option value="option3">3XL</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  type="submit"
                  variant="contained"
                  style={{
                    backgroundColor: "black",
                    fontFamily: "Soleil",
                    sansSerif: "sans-serif",
                  }}
                  onClick={() => {
                    setMeasure(false);
                    setCongratulation(true);
                  }}
                >
                  NEXT
                </Button>
              </div>
            </Box>
          </Box>
        </ThemeProvider>
      )}

      {ImageFailed && (
        <div style={{ fontFamily: "Soleil", sansSerif: "sans-serif" }}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                flex: "1 1 auto",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                padding: "2%",
              }}
            >
              <Box
                sx={{
                  maxWidth: 300,
                  py: "20px",
                  paddingBottom: "50px",
                  width: "100%",
                  border: "3px #d4cfc5 solid",
                  borderRadius: "8px",
                  position: "relative",
                }}
              >
                <Typography
                  color="text.secondary"
                  variant="body2"
                  style={{
                    position: "absolute",
                    right: "10px",
                    bottom: "5px",

                    fontFamily: "Soleil",
                    sansSerif: "sans-serif",
                    fontWeight: 400,
                    fontSize: "1rem",
                    lineHeight: 1,
                    letterSpacing: "0.00735em",
                    // color: "black",
                  }}
                >
                  Powerd by swap{" "}
                  <span>
                    <img
                      src={"/assets/icons8-social-64.png"}
                      alt="not found"
                      style={{ height: "28px", cursor: "pointer" }}
                    />
                  </span>
                </Typography>
                <div>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontFamily: "Soleil",
                      sansSerif: "sans-serif",
                      fontWeight: 400,
                      fontSize: "2rem",
                      lineHeight: 1,
                      letterSpacing: "0.00735em",
                    }}
                  >
                    Oops!
                  </Typography>
                  <div>
                    <img
                      src={"assets/search-not-found.png"}
                      alt=""
                      style={{ height: "200px", width: "300px" }}
                    />
                  </div>
                  <Typography
                    color="text.secondary"
                    variant="body2"
                    style={{
                      fontFamily: "Soleil",
                      sansSerif: "sans-serif",
                      fontWeight: 400,
                      fontSize: "1rem",
                      lineHeight: 1,
                      letterSpacing: "0.00735em",
                      marginRight: "20px",
                      marginLeft: "50px",
                    }}
                  >
                    We couldn't find a face in the
                  </Typography>
                  <Typography
                    color="text.secondary"
                    variant="body2"
                    style={{
                      fontFamily: "Soleil",
                      sansSerif: "sans-serif",
                      fontWeight: 400,
                      fontSize: "1rem",
                      lineHeight: 1,
                      letterSpacing: "0.00735em",
                      marginRight: "20px",
                      marginLeft: "70px",
                    }}
                  >
                    images. Please try again
                  </Typography>
                </div>
              </Box>
            </Box>
          </ThemeProvider>
        </div>
      )}

      {Congratulation && (
        <div style={{ fontFamily: "Soleil", sansSerif: "sans-serif" }}>
          <div>
            <ThemeProvider theme={theme}>
              <Box
                sx={{
                  flex: "1 1 auto",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  padding: "2%",
                }}
              >
                <Box
                  sx={{
                    maxWidth: 550,
                    px: 3,
                    py: "50px",
                    width: "100%",
                    border: "3px #d4cfc5 solid",
                    borderRadius: "8px",
                    position: "relative",
                  }}
                >
                  <Typography
                    color="text.secondary"
                    variant="body2"
                    style={{
                      position: "absolute",
                      right: "10px",
                      bottom: "5px",
                      fontFamily: "Soleil",
                      sansSerif: "sans-serif",
                      fontWeight: 400,
                      fontSize: "1rem",
                      lineHeight: 1,
                      letterSpacing: "0.00735em",
                      color: "black",
                    }}
                  >
                    Powerd by swap{" "}
                    <span>
                      <img
                        src={"/assets/icons8-social-64.png"}
                        alt="not found"
                        style={{ height: "28px", cursor: "pointer" }}
                      />
                    </span>
                  </Typography>

                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <div style={{ margin: "10px" }}>
                      <FormControl>
                        <FormLabel
                          id="demo-radio-buttons-group-label"
                          style={{
                            color: "black",
                            fontSize: "20px",
                            fontWeight: "bold",
                            marginBottom: "10px",
                          }}
                        >
                          Adjust slider
                        </FormLabel>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="female"
                          name="radio-buttons-group"
                        >
                          <FormControlLabel
                            value="female"
                            control={<Radio style={{ color: "black" }} />}
                            label="Head size"
                            style={{
                              marginRight: "10px",
                              marginBottom: "-8px",
                              fontSize: "10px",
                              fontFamily: "Soleil",
                              sansSerif: "sans-serif",
                            }}
                          />
                          <FormControlLabel
                            value="male"
                            control={<Radio style={{ color: "black" }} />}
                            label="Neck length"
                            style={{
                              marginRight: "10px",
                              marginBottom: "-8px",
                              fontSize: "10px",
                              fontFamily: "Soleil",
                              sansSerif: "sans-serif",
                            }}
                          />
                          <FormControlLabel
                            value="other"
                            control={<Radio style={{ color: "black" }} />}
                            label="Shoulders"
                            style={{
                              marginRight: "10px",
                              marginBottom: "-8px",
                              fontSize: "10px",
                              fontFamily: "Soleil",
                              sansSerif: "sans-serif",
                            }}
                          />

                          <FormControlLabel
                            value="Arms"
                            control={<Radio style={{ color: "black" }} />}
                            label="Arms"
                            style={{
                              marginRight: "10px",
                              marginBottom: "-8px",
                              fontSize: "10px",
                              fontFamily: "Soleil",
                              sansSerif: "sans-serif",
                            }}
                          />
                          <FormControlLabel
                            value="Waist"
                            control={<Radio style={{ color: "black" }} />}
                            label="Waist"
                            style={{
                              marginRight: "10px",
                              marginBottom: "-8px",
                              fontSize: "10px",
                              fontFamily: "Soleil",
                              sansSerif: "sans-serif",
                            }}
                          />
                          <FormControlLabel
                            value="Hips"
                            control={<Radio style={{ color: "black" }} />}
                            label="Hips"
                            style={{
                              marginRight: "10px",
                              marginBottom: "-8px",
                              fontSize: "10px",
                              fontFamily: "Soleil",
                              sansSerif: "sans-serif",
                            }}
                          />

                          <FormControlLabel
                            value="Leg lenght"
                            control={<Radio style={{ color: "black" }} />}
                            label="Leg lenght"
                            style={{
                              marginRight: "10px",
                              marginBottom: "-8px",
                              fontSize: "10px",
                              fontFamily: "Soleil",
                              sansSerif: "sans-serif",
                            }}
                          />
                          <FormControlLabel
                            value="Leg width"
                            control={<Radio style={{ color: "black" }} />}
                            label="Leg width"
                            style={{
                              marginRight: "10px",
                              marginBottom: "-8px",
                              fontSize: "10px",
                              fontFamily: "Soleil",
                              sansSerif: "sans-serif",
                            }}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div>
                      <img
                        src={"/assets/135bbd59-1f58-496c-960f-300e1cd4feb1.jpg"}
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="row handleSlider">
                    <hr style={{ border: "2px solid #d4cfc5" }}></hr>

                    <Box sx={{ width: 400 }}>
                      <Slider
                        min={140}
                        step={1}
                        max={200}
                        // getAriaValueText={valueLabelFormat}
                        valueLabelFormat={valueLabelFormat}
                        // valueLabelDisplay="auto"
                        // aria-labelledby="non-linear-slider"
                        style={{ color: "black" }}
                      />
                    </Box>
                    <hr style={{ border: "2px #d4cfc5 solid" }}></hr>
                  </div>
                  <div className="btnCenter">
                    <Button
                      fullWidth
                      size="large"
                      sx={{ mt: 3 }}
                      type="submit"
                      variant="contained"
                      style={{
                        backgroundColor: "black",
                        fontFamily: "Soleil",
                        sansSerif: "sans-serif",
                        marginBottom:"20px"
                      }}
                      onClick={() => {
                        setCongratulation(false);
                        setconfirm(true);
                        setTimeout(() => {
                          setconfirm(false);
                          setMobiledata(true);
                        }, [2000]);
                      }}
                    >
                      Confirm
                    </Button>
                  </div>
                </Box>
              </Box>
            </ThemeProvider>
          </div>
        </div>
      )}

      {confirm && (
        <>
          <div style={{ fontFamily: "Soleil", sansSerif: "sans-serif" }}>
            <ThemeProvider theme={theme}>
              <Box
                sx={{
                  flex: "1 1 auto",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  padding: "2%",
                }}
              >
                <Box
                  sx={{
                    maxWidth: 300,
                    py: "20px",
                    paddingBottom: "50px",
                    width: "100%",
                    border: "3px #d4cfc5 solid",
                    borderRadius: "8px",
                    position: "relative",
                  }}
                >
                  <Typography
                    color="text.secondary"
                    variant="body2"
                    style={{
                      position: "absolute",
                      right: "10px",
                      bottom: "5px",

                      fontFamily: "Soleil",
                      sansSerif: "sans-serif",
                      fontWeight: 400,
                      fontSize: "1rem",
                      lineHeight: 1,
                      letterSpacing: "0.00735em",
                      // color: "black",
                    }}
                  >
                    Powerd by swap{" "}
                    <span>
                      <img
                        src={"/assets/icons8-social-64.png"}
                        alt="not found"
                        style={{ height: "28px", cursor: "pointer" }}
                      />
                    </span>
                  </Typography>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginLeft: "20px",
                      }}
                    >
                      <img
                        src={"assets/login-successful-9696591-7864617.webp"}
                        alt=""
                        style={{ height: "200px", width: "200px" }}
                      />
                    </div>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      style={{
                        fontFamily: "Soleil",
                        sansSerif: "sans-serif",
                        fontWeight: 400,
                        fontSize: "1rem",
                        lineHeight: 1,
                        letterSpacing: "0.00735em",
                        marginRight: "20px",
                        marginLeft: "50px",
                      }}
                    >
                      Profile Created Successfully!
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      style={{
                        fontFamily: "Soleil",
                        sansSerif: "sans-serif",
                        fontWeight: 400,
                        fontSize: "1rem",
                        lineHeight: 1,
                        letterSpacing: "0.00735em",
                        marginRight: "20px",
                        marginLeft: "70px",
                      }}
                    >
                      Entering your virtual room
                    </Typography>
                  </div>
                </Box>
              </Box>
            </ThemeProvider>
          </div>
        </>
      )}

      {Mobiledata && (
        <>
          <div>
            <ThemeProvider theme={theme}>
              <Box
                sx={{
                  flex: "1 1 auto",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  padding: "2%",
                }}
              >
                <Box
                  sx={{
                    maxWidth: 350,
                    width: "100%",
                    border: "3px #d4cfc5 solid",
                    borderRadius: "8px",
                    fontFamily: "Soleil",
                    sansSerif: "sans-serif",
                    color: "#a19f99",
                  }}
                >
                  <div style={{ height: "540px" }}>
                    {selectedOptionProfile === "tryOn" && (
                      <div>
                        <TryOn />
                      </div>
                    )}
                    {selectedOptionProfile === "favorite" && (
                      <div>
                        <Favorite />
                      </div>
                    )}
                    {selectedOptionProfile === "profile" && (
                      <div style={{position:"relative"}}>
                        <Profile />
                      </div>
                    )}
                  </div>

                  <hr
                    style={{ border: "1px #d4cfc5 rgb(212, 207, 197)", marginBottom: "0px" }}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      fontWeight: "bold",
                      fontSize: "15px",
                    }}
                  >
                    <div
                      style={{
                        border:
                          selectedOptionProfile === "tryOn"
                            ? "2px #d4cfc5 solid"
                            : "2px white solid",
                        borderRadius: "15px",
                        padding: "10px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleOptionClick("tryOn")}
                    >
                      <img
                        src={"/assets/icons8-cloakroom-100.png"}
                        alt=""
                        style={{
                          height: "25px",
                          width: "25px",
                          marginLeft: "5px",
                        }}
                      />
                      <div>Try on</div>
                    </div>
                    <div
                      style={{
                        border:
                          selectedOptionProfile === "favorite"
                            ? "2px #d4cfc5 solid"
                            : "2px white solid",
                        borderRadius: "15px",
                        padding: "10px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleOptionClick("favorite")}
                    >
                      <img
                        src={"/assets/icons8-favorite-100.png"}
                        alt=""
                        style={{
                          height: "25px",
                          width: "25px",
                          marginLeft: "12px",
                        }}
                      />
                      <div>Favorite</div>
                    </div>
                    <div
                      style={{
                        border:
                          selectedOptionProfile === "profile"
                            ? "2px #d4cfc5 solid"
                            : "2px white solid",
                        borderRadius: "15px",
                        padding: "10px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleOptionClick("profile")}
                    >
                      <img
                        src={"/assets/icons8-customer-100.png"}
                        alt=""
                        style={{
                          height: "25px",
                          width: "25px",
                          marginLeft: "7px",
                        }}
                      />
                      <div>Profile</div>
                    </div>
                  </div>
                </Box>
              </Box>
            </ThemeProvider>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;

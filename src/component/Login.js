import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./Login.css";
import axios from "axios";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  Slider,
} from "@mui/material";
import Switch from "@mui/material/Switch";
import { FormControlLabel } from "@mui/material";

const theme = createTheme();

function valueLabelFormat(value) {
  const units = ["in", "MB", "GB", "TB"];

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

  const toggleSwitch = () => {
    setChecked(!isChecked);
  };

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
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectedOption4, setSelectedOption4] = useState("");
  const [selectedOption5, setSelectedOption5] = useState("");
  const [selectedOption6, setSelectedOption6] = useState("");

  const handleSelectChange1 = (e) => {
    setSelectedOption1(e.target.value);
  };
  const handleSelectChange2 = (e) => {
    setSelectedOption2(e.target.value);
  };
  const handleSelectChange3 = (e) => {
    setSelectedOption3(e.target.value);
  };
  const handleSelectChange4 = (e) => {
    setSelectedOption4(e.target.value);
  };
  const handleSelectChange5 = (e) => {
    setSelectedOption5(e.target.value);
  };
  const handleSelectChange6 = (e) => {
    setSelectedOption6(e.target.value);
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
    <div style={{ fontFamily: 'Soleil', sansSerif: 'sans-serif' }}>
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
                SetLogin(false);
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
                }}
              >
                <div>
                  <Stack spacing={1} sx={{ mb: 3 }}>
                    <Typography variant="h4" style={{ fontFamily: 'Soleil', sansSerif: 'sans-serif' }}>Login</Typography>
                    <Typography color="text.secondary" variant="body2" style={{ fontFamily: 'Soleil', sansSerif: 'sans-serif' }}>
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
                    <Stack spacing={3}    style={{ fontFamily: 'Soleil', sansSerif: 'sans-serif' }}>
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
                        style={{ fontFamily: 'Soleil', sansSerif: 'sans-serif' }}
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
                        style={{ fontFamily: 'Soleil', sansSerif: 'sans-serif' }}
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
                      style={{ backgroundColor: "black", fontFamily: 'Soleil', sansSerif: 'sans-serif' }}
                      onClick={() => {
                        setTimeout(() => {
                          SetLogin(null);
                          setPhotoImage(true);
                        }, [3000]);
                      }}
                    >
                      Continue
                    </Button>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <h4>or</h4>
                    </div>

                    <div
                      style={{
                        borderRadius: "15px",
                        backgroundColor: "#dae0df",
                      }}
                    >
                      <div className="d-flex align-items-center justify-content-md-between ">
                        <div style={{ flex: "0 0 auto" }}>
                          <img
                            src={"/assets/icons8-google-48.png"}
                            alt="google"
                            style={{ transform: "scale(0.7)" }}
                          />
                        </div>
                        <span
                          style={{
                            flex: "1",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                            overflow:"hidden"
                          }}
                        >
                          Continue with Google
                        </span>
                      </div>
                    </div>

                    <div
                      style={{
                        borderRadius: "15px",
                        backgroundColor: "#dae0df",
                        marginTop: "3%",
                      }}
                    >
                      <div className="d-flex align-items-center justify-content-md-between ">
                        <div style={{ flex: "0 0 auto" }}>
                          <img
                            src={"/assets/icons8-facebook-48.png"}
                            alt="facebook"
                            style={{ transform: "scale(0.8)" }}
                          />
                        </div>
                        <span
                          style={{
                            flex: "1",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                            overflow:"hidden"
                          }}
                        >
                          Continue with facebook
                        </span>
                      </div>
                    </div>
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
              }}
            >
              <div>
                <Stack spacing={1} sx={{ mb: 3 }}>
                  <Typography variant="h4" style={{ fontFamily: 'Soleil', sansSerif: 'sans-serif' }}>Register</Typography>
                  <Typography color="text.secondary" variant="body2" style={{ fontFamily: 'Soleil', sansSerif: 'sans-serif' }}>
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
                    style={{ backgroundColor: "black",  fontFamily: 'Soleil', sansSerif: 'sans-serif' }} 
                  >
                    Continue
                  </Button>

                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <h4>or</h4>
                  </div>

                  <div
                    style={{
                      borderRadius: "15px",
                      backgroundColor: "#dae0df",
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-md-between ">
                      <div style={{ flex: "0 0 auto" }}>
                        <img
                          src={"/assets/icons8-google-48.png"}
                          alt="google"
                          style={{ transform: "scale(0.7)" }}
                        />
                      </div>
                      <span
                        style={{
                          flex: "1",
                          textAlign: "center",
                          whiteSpace: "nowrap",
                          overflow:"hidden"
                        }}
                      >
                        Continue with Google
                      </span>
                    </div>
                  </div>

                  <div
                    style={{
                      borderRadius: "15px",
                      backgroundColor: "#dae0df",
                      marginTop: "3%",
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-md-between ">
                      <div style={{ flex: "0 0 auto" }}>
                        <img
                          src={"/assets/icons8-facebook-48.png"}
                          alt="facebook"
                          style={{ transform: "scale(0.8)" }}
                        />
                      </div>
                      <span
                        style={{
                          flex: "1",
                          textAlign: "center",
                          whiteSpace: "nowrap",
                          overflow:"hidden"
                        }}
                      >
                        Continue with facebook
                      </span>
                    </div>
                  </div>
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
                py: "40px",
                width: "100%",
                border: "3px #d4cfc5 solid",
                borderRadius: "8px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", justifyContent: "left" }}>
                  <div
                    style={{
                      // fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: "2rem",
                      lineHeight: 1.135,
                      letterSpacing: "0.00735em",
                      marginBottom: "10px",
                    }}
                  >
                    Take 2 Images
                  </div>
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
                        setStatus(false);
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
                  justifyContent: "space-between",
                  marginTop: "10%",
                }}
              >
                <div>
                  <div style={{ position: "relative" }}>
                    <img
                      src={"/assets/mannequinemale01.jpg"}
                      alt=" not found"
                      style={{ height: "200px", width: "200px" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: 2,
                        left: 10,
                      }}
                    >
                      <Typography
                        color="text.secondary"
                        variant="body2"
                        style={{ fontSize: "11.9px",  fontFamily: 'Soleil', sansSerif: 'sans-serif' }} 
                      >
                        {" "}
                        HAIR UP
                      </Typography>
                    </div>

                    <span
                      style={{
                        position: "absolute",
                        top: 50,
                        right: -20,
                        color: "black",

                        // fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                        fontWeight: 200,
                        fontSize: "0.7rem",
                        lineHeight: 1,
                        letterSpacing: "0.00735em",
                      }}
                    >
                      <Typography
                        color="text.secondary"
                        variant="body2"
                        style={{ fontSize: "11.9px",  fontFamily: 'Soleil', sansSerif: 'sans-serif' }}
                      >
                        TIGHT FITTED
                      </Typography>
                    </span>
                    <span
                      style={{
                        position: "absolute",
                        top: 65,
                        right: 0,
                        color: "black",

                        // fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                        fontWeight: 200,
                        fontSize: "0.7rem",
                        lineHeight: 1,
                        letterSpacing: "0.00735em",
                      }}
                    >
                      <Typography
                        color="text.secondary"
                        variant="body2"
                        style={{ fontSize: "11.9px",  fontFamily: 'Soleil', sansSerif: 'sans-serif' }}
                      >
                        CLOTHES
                      </Typography>
                    </span>

                    <span
                      style={{
                        position: "absolute",
                        bottom: 40,
                        left: -10,
                        color: "black",

                        // fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                        fontWeight: 200,
                        fontSize: "0.7rem",
                        lineHeight: 1,
                        letterSpacing: "0.00735em",
                      }}
                    >
                      <Typography
                        color="text.secondary"
                        variant="body2"
                        style={{ fontSize: "11.9px",  fontFamily: 'Soleil', sansSerif: 'sans-serif' }}
                      >
                        FLAT SHOES
                      </Typography>
                    </span>
                    <span
                      style={{
                        position: "absolute",
                        bottom: 25,
                        left: -10,
                        color: "black",

                        // fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                        fontWeight: 200,
                        fontSize: "0.7rem",
                        lineHeight: 1,
                        letterSpacing: "0.00735em",
                      }}
                    >
                      <Typography
                        color="text.secondary"
                        variant="body2"
                        style={{ fontSize: "11.9px",  fontFamily: 'Soleil', sansSerif: 'sans-serif' }}
                      >
                        OR BARE
                      </Typography>
                    </span>
                    <span
                      style={{
                        position: "absolute",
                        bottom: 10,
                        left: -10,
                        color: "black",

                        // fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                        fontWeight: 200,
                        fontSize: "0.8rem",
                        lineHeight: 1,
                        letterSpacing: "0.00735em",
                      }}
                    >
                      <Typography
                        color="text.secondary"
                        variant="body2"
                        style={{ fontSize: "11.9px",  fontFamily: 'Soleil', sansSerif: 'sans-serif' }}
                      >
                        FEET
                      </Typography>
                    </span>
                  </div>
                </div>
                <div style={{ marginLeft: "-40px" }}>
                  <div>
                    <img
                      src={"/assets/mannequinemale13.jpg"}
                      alt="image"
                      style={{ height: "200px", width: "180px" }}
                    />
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div {...getRootPropsFirst()}>
                  <button
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      marginTop: "17%",
                      borderRadius: "5px",
                      boxShadow: "0px  4px 8px rgba(0, 0, 0, 0.4)",
                      // fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                      fontSize: "0.8rem",
                      // width:"80%"
                      padding: "3%",
                      whiteSpace: "nowrap",
                    }}
                  >
                    UPLOAD FRONT POSE
                  </button>
                  <div
                    style={{
                      width: "150px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    <span>{uploadedImage?.file?.path}</span>
                  </div>
                </div>

                <div {...getRootPropsSecond()}>
                  <button
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      marginTop: "17%",
                      borderRadius: "5px",
                      boxShadow: "0px  4px 8px rgba(0, 0, 0, 0.4)",
                      // fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                      fontSize: "0.8rem",
                      padding: "3%",
                    }}
                  >
                    UPLOAD SIDE POSE
                  </button>
                  <div
                    style={{
                      width: "150px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    <span>{uploadedImage2?.file?.path}</span>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "20px" }}>
                <Typography color="text.secondary" variant="body2"   style={{ fontFamily: 'Soleil', sansSerif: 'sans-serif' }}>
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
                  style={{ backgroundColor: "black" ,  fontFamily: 'Soleil', sansSerif: 'sans-serif'}}
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
                width: "100%",
                border: "3px #d4cfc5 solid",
                borderRadius: "8px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
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

                  // fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: "1rem",
                  lineHeight: 2,
                  letterSpacing: "0.00735em",
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
                        fontSize: "13px", // Adjusted font size
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
                        fontSize: "13px", // Adjusted font size
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
                    // fontFamily: "Roboto, Helvetica, Arial, sans-serif",
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
                          <option value="option1">5ft</option>
                          <option value="option1">6ft</option>
                        </select>
                      </div>
                      <div>
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
                          <option value="option1">0in</option>
                          <option value="option1">1in</option>
                          <option value="option2">2in</option>
                          <option value="option3">3in</option>
                          <option value="option1">4in</option>
                          <option value="option2">5in</option>
                          <option value="option3">6in</option>
                          <option value="option1">7in</option>
                          <option value="option2">8in</option>
                          <option value="option3">9in</option>
                          <option value="option1">10in</option>
                          <option value="option2">11in</option>
                        </select>
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
                      // fontFamily: "Roboto, Helvetica, Arial, sans-serif",
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
                      <option value="option1">L</option>
                      <option value="option2">XL</option>
                      <option value="option3">2XL</option>
                      <option value="option3">3XL</option>
                    </select>
                  </div>
                  <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                  <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                      // fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: "1rem",
                      lineHeight: 2,
                      letterSpacing: "0.00735em",
                    }}
                  >
                    <b>Your weight &nbsp;</b>
                  </div>
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
                  <div>
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

              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  type="submit"
                  variant="contained"
                  style={{ backgroundColor: "black",  fontFamily: 'Soleil', sansSerif: 'sans-serif' }}
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
      {Congratulation && (
        <div className="container">
          <img
            src={"assets/icons8-congratulation.gif"}
            style={{ height: "100px" }}
          />
        </div>
      )}
    </div>
  );
};

export default Login;

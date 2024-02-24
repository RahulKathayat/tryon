import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { useFormik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Stack, TextField, Typography } from "@mui/material";
import * as Yup from "yup";

const Login = ({ SetLogin, setPhotoImage }) => {
  const theme = createTheme();
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
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            flex: "1 1 auto",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            padding: "2%",
            height:"100vh"
          }}
        >
          <Box
            sx={{
              maxWidth: 400,
              px: 4,
              py: "50px",
              width: "100%",
              border: "1.5px gray solid",
              borderRadius: "12px",
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
                // fontSize: "1rem",
                fontSize: "12px",
                lineHeight: 1,
                letterSpacing: "0.00735em",
                color: "black",
              }}
            >
              Powered by Swap{" "}
              <span>
                <img
                  src={"/assets/icons8-social-64.png"}
                  alt="not found"
                  style={{ height: "22px", cursor: "pointer" }}
                />
              </span>
            </Typography>
            <div>
              <Stack spacing={2} sx={{ mb: 4 ,textAlign:"center"}}>
                {/* <Stack spacing={1} sx={{ mb: 3, textAlign: "center" }}>
                </Stack> */}
                <Typography
                  variant="h5"
                  style={{
                    fontFamily: "Soleil",
                    fontWeight: "bold",
                    transform:"scale(1.1)"
                  }}
                >
                  Virtual Fitting Room
                </Typography>

                <Typography
                  variant="h4"
                  style={{
                    fontFamily: "Soleil",
                    sansSerif: "sans-serif",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  LOGIN
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
                      color: "#4663ac",
                      cursor: "pointer",
                      textDecoration: "underline",
                      fontWeight:"bold"
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
                    error={!!(formik1.touched.email && formik1.errors.email)}
                    fullWidth
                    helperText={formik1.touched.email && formik1.errors.email}
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
                      !!(formik1.touched.password && formik1.errors.password)
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
                    borderRadius: "25px",
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

                  <h6 style={{ margin: "0 0px",color:"gray" }}>or</h6>

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
                    // lineHeight: 1,
                    letterSpacing: "0.00835em",
                    marginTop: "2%",
                    color: "black",
                  }}
                >
                  Continue with

                    <img
                      src={"/assets/icons8-google-48.png"}
                      alt="google"
                      style={{
                        transform: "scale(0.58)",
                        cursor: "pointer",
                      }}
                    />
                    <img
                      src={"/assets/icons8-facebook-48.png"}
                      alt="facebook"
                      style={{ transform: "scale(0.62)", cursor: "pointer" }}
                    />
                </Typography>
              </form>
            </div>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Login;

import React from "react";
import { useFormik } from "formik";
import { Box } from "@mui/material";

import * as Yup from "yup";
import { Button, Stack, TextField, Typography } from "@mui/material";

const Register = ({ SetLogin }) => {
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
    <div>
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
            maxWidth: 450,
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
              // fontSize: "1rem",
              fontSize: "12px",
              lineHeight: 1,
              letterSpacing: "0.00735em",
              color: "black",
            }}
          >
            Powered by swap{" "}
            <span>
              <img
                src={"/assets/icons8-social-64.png"}
                alt="not found"
                style={{ height: "22px", cursor: "pointer" }}
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
                style={{
                  fontFamily: "Soleil",
                  sansSerif: "sans-serif",
                  fontSize: "25px",
                }}
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
                  error={!!(formik.touched.password && formik.errors.password)}
                  fullWidth
                  helperText={formik.touched.password && formik.errors.password}
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
                  color: "black",
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
    </div>
  );
};

export default Register;

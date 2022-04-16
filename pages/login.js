import React, { useState, useEffect } from "react";
import { Container, Box, TextField, Typography, Button } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";

function Login() {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [fail, setFail] = useState(false);
  const formik = useFormik({
    initialValues: { password: "", username: "" },
    onSubmit: (values) => {
      const body = { ...values };
      axios
        .post("http://localhost:8000/login", body)
        .then((res) => {
          formik.resetForm();
          console.log(res.data.user);
          localStorage.setItem("token", res.data.user);
          setFail(false);
          router.push("/siswa");
        })
        .catch((error) => {
          localStorage.removeItem("token");
          enqueueSnackbar(`${error.response.data}`, {
            anchorOrigin: { vertical: "bottom", horizontal: "right" },
            variant: "error",
          });
          setFail(true);
          setTimeout(() => {
            setFail(false);
          }, 5000);
        });
    },
  });
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/siswa");
    } else {
      router.push("/");
    }
  });
  return (
    <Container>
      <Box>
        <Box
          sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        >
          <form onSubmit={formik.handleSubmit}>
            <Box>
              <Typography fontSize={23} fontWeight={600}>
                LOGIN
              </Typography>
            </Box>
            <Box mt={2}>
              <Typography>Username</Typography>
              <TextField
                error={fail}
                onChange={formik.handleChange}
                id="username"
                name="username"
                value={formik.values.username}
                placeholder="usename"
                size="small"
              />
            </Box>
            <Box mt={2}>
              <Typography>Password</Typography>
              <TextField
                error={fail}
                onChange={formik.handleChange}
                id="password"
                name="password"
                value={formik.values.password}
                placeholder="password"
                size="small"
              />
            </Box>
            <Button type="submit" sx={{ mt: 3 }} variant="contained" fullWidth>
              Login
            </Button>
          </form>
          <a style={{ fontWeight: "400", fontSize: "15", cursor: "pointer" }}>
            Masuk sebagai admin
          </a>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;

import React, { useState } from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Button,
} from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import moment from "moment";
import { useSnackbar } from "notistack";
import useFetching from "../Component/useFetchingData";
import CircularProgress from "@mui/material/CircularProgress";

function AddingStudent() {
  const { data } = useFetching();
  console.log(data?.data);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [textError, setTextError] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const time = moment().format("LLL");
  const formik = useFormik({
    initialValues: {
      name: "",
      date: time,
      birt: "",
      address: "",
      dad: "",
      mom: "",
      gender: "",
      phone: "",
      email: "",
      payment: [
        { SPP_payment: "paid" },
        { BUILDING_payment: "paid" },
        { UNIFORM_payment: "not_paid" },
        { INSURANCE_payment: "paid" },
      ],
    },
    onSubmit: (values) => {
      setLoading(true);
      if (formik.values.phone.length >= 13 || formik.values.phone.length <= 10) {
        setTextError("Nomor Tidak Valid");
        setOpen(true);
        enqueueSnackbar(`Ups ! Data Tidak Terkirim`, {
          anchorOrigin: { vertical: "bottom", horizontal: "right" },
          variant: "error",
        });
        setTimeout(() => {
          setLoading(false);
        }, 500);
        return false;
      }
      axios
        .post("http://localhost:8000/post", values)
        .then((res) => {
          enqueueSnackbar(`${res.data}`, {
            anchorOrigin: { vertical: "bottom", horizontal: "right" },
            variant: "success",
          });
          setOpen(false);
          setLoading(false);
          // formik.resetForm();
        })
        .catch((error) => {
          if (error.response) {
            setOpen(true);
            setTextError(error.response.data);
            enqueueSnackbar(`Ups ! Data Tidak Terkirim`, {
              anchorOrigin: { vertical: "bottom", horizontal: "right" },
              variant: "error",
            });
            setLoading(false);
            return false;
          } else {
            enqueueSnackbar(`Ups ! Data Tidak Terkirim error_code:NTWE666`, {
              anchorOrigin: { vertical: "bottom", horizontal: "right" },
              variant: "error",
            });
            setLoading(false);
          }
        });
    },
  });
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Box sx={{ width: "80%", mr: 10 }}>
        <Box sx={{ maxWidth: "470px" }}>
          <Typography fontSize={23} fontWeight={800} color="primary">
            Menambah Data Peserta Didik Baru{" "}
          </Typography>
          <Typography fontSize={17} fontWeight={400} color="primary">
            Masukkan data siswa dengan benar. data akan disimpan dilocal storange komputer.
          </Typography>
        </Box>
        <form onSubmit={formik.handleSubmit} style={{ marginTop: "10px" }}>
          <TextField
            required
            sx={{ mb: 3 }}
            label="name"
            placeholder="Masukan nama"
            value={formik.values.name}
            name="name"
            id="name"
            onChange={formik.handleChange}
            fullWidth
          />
          <FormControl sx={{ mb: 3 }} fullWidth>
            <InputLabel>Jenis Kelamin Siswa</InputLabel>
            <Select
              name="gender"
              id="gender"
              value={formik.values.gender}
              label="Jenis Kelamin Siswa"
              onChange={formik.handleChange}
            >
              <MenuItem value="laki-laki">Laki - Laki</MenuItem>
              <MenuItem value="perempuan">Perempuan</MenuItem>
            </Select>
          </FormControl>
          <TextField
            required
            sx={{ mb: 3 }}
            label="Tempat tanggal lahir"
            placeholder="Contoh : Kediri 14 juli 1998"
            value={formik.values.birt}
            name="birt"
            id="birt"
            onChange={formik.handleChange}
            fullWidth
          />
          <TextField
            required
            placeholder="Masukkan alamat"
            sx={{ mb: 3 }}
            label="Alamat lengkap"
            value={formik.values.address}
            name="address"
            id="address"
            onChange={formik.handleChange}
            fullWidth
          />
          <TextField
            required
            placeholder="Masukkan nama ayah kandung"
            sx={{ mb: 3 }}
            label="Nama ayah kandung"
            value={formik.values.dad}
            name="dad"
            id="dad"
            onChange={formik.handleChange}
            fullWidth
          />
          <TextField
            required
            placeholder="Masukkan nama ibu kandung"
            sx={{ mb: 3 }}
            label="Nama ibu kandung"
            value={formik.values.mom}
            name="mom"
            id="mom"
            onChange={formik.handleChange}
            fullWidth
          />
          <TextField
            required
            placeholder="Masukkan email"
            sx={{ mb: 3 }}
            label="Email"
            value={formik.values.email}
            name="email"
            id="email"
            onChange={formik.handleChange}
            fullWidth
          />
          <TextField
            required
            error={open ? true : false}
            helperText={open ? textError : false}
            placeholder="Masukkan no. telfon"
            sx={{ mb: 3 }}
            label="Nomor Telpon Yang Bisa di Hubungi"
            value={formik.values.phone}
            name="phone"
            id="phone"
            onChange={formik.handleChange}
            fullWidth
          />
          <Button
            type="submit"
            disabled={loading ? true : false}
            sx={{ p: 2 }}
            variant="contained"
            fullWidth
          >
            {loading ? (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <CircularProgress size={20} color="inherit" />
                <Box ml={2}>Memproses . .</Box>
              </Box>
            ) : (
              <Box>Simpan</Box>
            )}
          </Button>
        </form>
      </Box>
      <Box sx={{ width: "fit-content" }}>
        <Box sx={{}}>
          <img style={{ width: "100%" }} src="/icon/add-student-icon.svg" />
        </Box>
      </Box>
    </Box>
  );
}

export default AddingStudent;

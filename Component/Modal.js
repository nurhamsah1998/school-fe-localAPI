import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { teal } from "@mui/material/colors";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  pt: 2,
  px: 2,
  pb: 2,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal({ openModal, close, data }) {
  const [open, setOpen] = useState();
  const handleClose = () => {
    setOpen(false);
  };
  const ModalMenu = [
    {
      id: 1,
      title: "Profile Pribadi",
      birth: "14 juni 1998",
      addressBorn: "kediri",
      dad_name: "hartatik",
      dad_name: "mulyono",
    },
    {
      id: 2,
      title: "Pembayaran Admin Sekolah",
      payment: [
        {
          id: 1,
          name: "Pembayaran SPP",
        },
        {
          id: 2,
          name: "Pembayaran Uang Gedung",
        },
        {
          id: 3,
          name: "Pembayaran Seragam",
        },
        {
          id: 4,
          name: "Pembayaran Asuransi",
        },
      ],
    },
  ];
  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400, position: "relative" }}>
          <Button
            onClick={close}
            variant="contained"
            color="error"
            sx={{ color: "white", position: "absolute", top: 0, right: 0, m: 1, fontWeight: 700 }}
          >
            X
          </Button>
          <Box sx={{ mt: 5 }}>
            {ModalMenu.map((e) => (
              <Box key={e.id}>
                <Typography
                  sx={{
                    bgcolor: teal[400],
                    p: 1,
                    mt: 2,
                    borderRadius: "8px 8px 0px 0px",
                    color: "white",
                  }}
                  fontWeight={700}
                >
                  {e.title} {data.name}
                </Typography>
                <Box display="grid" border="solid grey 2px">
                  <Box sx={{ p: 1 }}>
                    {e.payment?.map((payment) => {
                      return (
                        <Box key={payment.id} display="flex" alignItems="center">
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "baseline",
                              width: "240px",
                              justifyContent: "space-between",
                            }}
                          >
                            <Typography>{payment.name}</Typography>
                            <span>:</span>
                          </Box>
                          <Typography>Lunas</Typography>
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
          {/* <ChildModal /> */}
        </Box>
      </Modal>
    </div>
  );
}

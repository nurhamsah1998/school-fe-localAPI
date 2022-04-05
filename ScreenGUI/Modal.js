import React, { useState } from 'react';
import { Typography, Button, Modal, Box, Divider } from '@mui/material';
import { grey, teal } from '@mui/material/colors';
import Payment from '../Component/Payment';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '12px',
  boxShadow: 24,
  pt: 2,
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
      <Modal hideBackdrop open={open} onClose={handleClose} aria-labelledby="child-modal-title" aria-describedby="child-modal-description">
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal({ openModal, handleClose, data }) {
  const ModalMenu = [
    {
      id: 1,
      title: 'Profile Pribadi',
      userProfile: [
        {
          id: 1,
          name: 'Alamat email',
          title: data.email,
        },
        {
          id: 2,
          name: 'Nama ayah',
          title: data?.userProfile?.map((i) => i.dad),
        },
        {
          id: 3,
          name: 'Nama ibu',
          title: data?.userProfile?.map((i) => i.mom),
        },
        {
          id: 4,
          name: 'Tempat tgl Lahir',
          title: data?.userProfile?.map((i) => i.birt),
        },
        {
          id: 5,
          name: 'Bantuan siswa',
          title: data?.studentHelp ? 'Verify' : 'Not verify',
        },
      ],
    },
    {
      id: 2,
      title: 'Admin Sekolah',
      payment: [
        {
          id: 1,
          status: data.payment?.map((e, i) => e.SPP_payment)[0],
          name: 'SPP',
        },
        {
          id: 2,
          status: data.payment?.map((e, i) => e.BUILDING_payment)[1],
          name: 'Uang Gedung',
        },
        {
          id: 3,
          status: data.payment?.map((e, i) => e.UNIFORM_payment)[2],
          name: 'Seragam',
        },
        {
          id: 4,
          status: data.payment?.map((e, i) => e.INSURANCE_payment)[3],
          name: 'Asuransi',
        },
      ],
    },
  ];
  return (
    <div>
      <Modal open={openModal} onClose={handleClose} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
        <Box sx={{ ...style, width: 400, position: 'relative' }}>
          <Box
            sx={{ position: 'absolute', bgcolor: teal[500], top: 0, left: 0, right: 0, display: 'flex', p: 2, justifyContent: 'space-between', borderRadius: '12px 12px 0px 0px' }}
          >
            <Button onClick={handleClose} variant="contained" color="error" sx={{ color: 'white', fontWeight: 700 }}>
              X
            </Button>
            <Typography fontWeight={700} fontSize={23} color="white">
              Profil Siswa
            </Typography>
          </Box>

          <Box sx={{ bgcolor: '#fff', mt: 8 }}>
            <Box sx={{ mt: 2, px: 2 }}>
              <Typography sx={{ fontSize: 30, fontWeight: 700, color: grey[500] }}>Status Pembayaran</Typography>
              {ModalMenu.map((i) =>
                i.userProfile?.map((e) => (
                  <Box key={e.id}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ display: 'flex', width: '140px', justifyContent: 'space-between' }}>
                        <Typography fontWeight={600}>{e.name}</Typography>
                        <Typography>:</Typography>
                      </Box>
                      <Typography sx={{ ml: 2 }}>{e.title}</Typography>
                    </Box>
                  </Box>
                ))
              )}
            </Box>
            <Box sx={{ mt: 3, px: 2 }}>
              <Typography sx={{ fontSize: 30, fontWeight: 700, color: grey[500] }}>Status Pembayaran</Typography>
              {ModalMenu.map((i) =>
                i.payment?.map((e) => (
                  <Box key={e.id}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Box sx={{ display: 'flex', width: '140px', justifyContent: 'space-between' }}>
                        <Typography fontWeight={600}>{e.name}</Typography>
                        <Typography>:</Typography>
                      </Box>
                      <Payment payment_status={e.status} payment={e.status} />
                    </Box>
                  </Box>
                ))
              )}
            </Box>
          </Box>
          {/* <ChildModal /> */}
          <Divider />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
            <Button variant="contained" sx={{ mr: 3 }} color="error">
              delete
            </Button>
            <Button variant="contained">Modif</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

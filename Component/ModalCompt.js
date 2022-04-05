import * as React from 'react';
import { Box, Modal } from '@mui/material';
import { grey, teal } from '@mui/material/colors';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  borderRadius: '12px',
  boxShadow: 24,
  p: 2,
};

export default function ModalCompt({ openModal, handleClose, children }) {
  return (
    <div>
      <Modal open={openModal} onClose={handleClose} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
        <Box sx={{ ...style, width: '70%', position: 'relative' }}>{children}</Box>
      </Modal>
    </div>
  );
}

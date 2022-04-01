import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import moment from 'moment';
import { useRouter } from 'next/router';
import 'moment/locale/id';
moment.locale('id');

const drawerWidth = 240;

export default function ClippedDrawer({ children, title }) {
  const router = useRouter();
  const nameTitle = router.pathname.replace('/', '');
  const pathTitle = nameTitle.replace('-', ' ');
  function upperCase(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" noWrap component="div">
            {title || upperCase(pathTitle.replace('siswa/', ''))}
          </Typography>
          <Typography fontSize={16} noWrap component="div">
            {moment().format('dddd Do MMMM YYYY')}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Beranda', 'Siswa', 'Dana Boss', 'Keuangan'].map((text, index) => (
              <ListItem
                button
                key={text}
                onClick={() => {
                  if (index === 0) {
                    router.push('/dasboard');
                  } else if (index === 1) {
                    router.push('/siswa');
                  } else if (index === 2) {
                    router.push('/dana-bos');
                  } else if (index === 3) {
                    router.push('/keuangan');
                  }
                }}
              >
                <ListItemIcon>
                  {index === 0 ? <DashboardIcon /> : index === 1 ? <SchoolIcon /> : index === 2 ? <AssuredWorkloadIcon /> : index === 3 && <MonetizationOnIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box sx={{ mt: 6, p: 3 }}>{children}</Box>
    </Box>
  );
}

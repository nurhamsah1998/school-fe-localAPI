import React from 'react';
import Drawer from '../../Component/Drawer';
import useFetchingData from '../../Component/useFetchingData';
import { useQuery } from 'react-query';
import axios from 'axios';

function StudentProfile() {
  const { data, isLoading, genderLength } = useFetchingData();

  console.log(genderLength('perempuan'));
  return <Drawer>StudentProfile</Drawer>;
}

export default StudentProfile;

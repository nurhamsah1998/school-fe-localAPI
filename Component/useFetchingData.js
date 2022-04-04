import axios from 'axios';
import { useQuery } from 'react-query';

function useFetchingData() {
  const { data, isLoading } = useQuery('data', async () => {
    return await axios.get('http://localhost:8000/get');
  });
  function lastUpdate() {
    const mapUpdate = data?.data.filter((i) => i.itemNum === data?.data?.length);
    const date = mapUpdate?.map((e) => e.dateIn);
    return date;
  }

  function genderLength(gender) {
    const female = data?.data?.map((e) => e.userProfile.map((i) => i.gender));
    const test = female?.map((i) => i[1]);
    const filterGender = test?.filter((i) => i === gender);
    return filterGender?.length;
  }

  const studentAmount = genderLength('laki-laki') + genderLength('perempuan');
  return { data, isLoading, genderLength, studentAmount, lastUpdate };
}

export default useFetchingData;

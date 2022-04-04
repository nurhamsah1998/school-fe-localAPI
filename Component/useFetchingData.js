import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

function useFetchingData() {
  const { data, isLoading } = useQuery("data", async () => {
    return await axios.get("http://localhost:8000/get");
  });
  function lastUpdate() {
    const mapUpdate = data?.data.filter((i) => i.itemNum === data?.data?.length);
    const date = mapUpdate?.map((e) => e.date);
    return date;
  }

  function genderLength(gender) {
    const rawData = data?.data;
    const male = rawData?.map((e) => e.gender);
    const maleLength = male?.filter((i) => i === gender);
    return maleLength?.length;
  }
  const studentAmount = genderLength("laki-laki") + genderLength("perempuan");
  return { data, isLoading, genderLength, studentAmount, lastUpdate };
}

export default useFetchingData;

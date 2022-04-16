import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Login from "./login";

function Index() {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/siswa");
    }
    if (!token) {
      router.push("/");
      localStorage.removeItem("token");
    }
  }, []);
  return (
    <div>
      <Login />
    </div>
  );
}

export default Index;

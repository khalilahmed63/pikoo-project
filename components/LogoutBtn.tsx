import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import client from "../utils/client";
import { useEffect, useState } from "react";

const LogoutBtn = (props: any) => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  // const [token, setToken] = useState("");
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const mytoken = localStorage.getItem("token");
  //     if (mytoken) {
  //       setToken(mytoken);
  //     }
  //   }
  //   return () => {};
  // }, []);

  const logout = () => {
    client
      .post("api/v1/auth/logout", {
        headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <button
      onClick={logout}
      className=" text-dark bg-[#0A115C] shadow-lg hover:shadow rounded-lg text-sm px-4 py-2  text-center"
    >
      <div className="flex items-center ">
        <img className="w-4 h-4 mr-1" src="/logout-icon.png" alt="" />{" "}
        <p className="flex items-center text-sm">{`${t("dashboard:goout")}`}</p>{" "}
      </div>
    </button>
  );
};
export default LogoutBtn;

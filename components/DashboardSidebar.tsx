import React, { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import LogoutBtn from "./LogoutBtn";
import client from "../utils/client";

export default function DashboardSidebar() {
  const { t, i18n } = useTranslation();
  const [sideBar, setSideBar] = useState(true);
  const [lang, setlang] = useState("RU");
  const getInitialState = () => {
    const value = "ru";
    return value;
  };
  const [value, setValue] = useState(getInitialState);

  const setRussion = (e: any) => {
    setlang("RU");
    // console.log(">>>>", e.target.value);
    setValue(e.target.value);
    return i18n.changeLanguage(e.target.value);
  };
  const setUA = (e: any) => {
    setlang("UA");
    // console.log(">>>>", e.target.id);
    setValue(e.target.id);
    return i18n.changeLanguage(e.target.id);
  };
  const setEng = (e: any) => {
    setlang("ENG");
    // console.log(">>>>", e.target.id);
    setValue(e.target.id);
    return i18n.changeLanguage(e.target.id);
  };
  const [data, setData] = useState([]);
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

  const getall = () => {
    client
      .get("api/v1/discount", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        if (res.data) {
          setData(res.data);
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  useEffect(() => {
    getall();
    return () => {};
  }, []);

  return (
    <>
      <div className="flex z-50 relative w-[20%]">
        <div
          className={`${
            sideBar ? "sm:flex" : "hidden sm:block"
          } fixed w-[20%] bg-white min-h-screen shadow-lg h-full flex-col justify-between `}
        >
          <div className="">
            <div className="h-16 my-8 w-full flex justify-center items-center">
              <Link href="dashboard">
                <a>
                  <img className="logo " src="/pikoo-logo-blue.png" />
                </a>
              </Link>
            </div>
            <ul className="">
              <li className="flex w-full py-2  text-gray-300  cursor-pointer items-center  bg-[#c5f177]">
                <a
                  href="javascript:void(0)"
                  className="flex ml-9 items-center text-center focus:outline-none "
                >
                  <img className="h-4 w-4 " src="/discount.png" />
                  <span className=" ml-2 text-center text-black text-lg">{`${t(
                    "dashboard:discount"
                  )}`}</span>
                </a>
              </li>
              {/* ///// */}
              <div className="relative inline-block text-left my-2 w-full">
                <div>
                  <Link href="/signup/step-1">
                    <a
                      className="text-gray-700 flex items-center px-4 py-2 pl-16 text-sm text-left hover:text-gray-900 hover:bg-gray-100"
                      role="menuitem"
                      id="menu-item-0"
                    >
                      <img className="h-3 w-3 mr-1 " src="/page.png" />
                      {`${t("dashboard:create")}`}
                    </a>
                  </Link>
                </div>
                {data.length > 0 &&
                  data?.map((item: any) => (
                    <div key={item?.id}>
                      <Link href="#">
                        <a
                          className="text-gray-700 flex items-center px-4 py-2 pl-16 text-sm text-left hover:text-gray-900 hover:bg-gray-100"
                          role="menuitem"
                          id="menu-item-0"
                        >
                          {item?.name}
                        </a>
                      </Link>
                    </div>
                  ))}
              </div>
              {/* ///// */}
              <div className="flex w-full py-2 text-gray-400 bg-[#c5f177] hover:text-gray-300 cursor-pointer items-center ">
                <Link href="#">
                  <a
                    href="javascript:void(0)"
                    className="flex ml-9 items-center focus:outline-none "
                  >
                    <img className="h-4 w-4 " src="/gear.png" />
                    <span className=" ml-2 text-black text-lg">
                      {" "}
                      {`${t("dashboard:Settings")}`}
                    </span>
                  </a>
                </Link>
              </div>
              {/* ///// */}
              <div className="relative inline-block text-left  w-full">
                <div
                  className={` right-0 z-10  origin-top-right  w-full rounded-md bg-white  focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button`}
                >
                  <div className="py-1" role="none">
                    <Link href="/setting">
                      <a
                        className="text-gray-700 flex items-center px-4 py-2 pl-16 text-sm text-left hover:text-gray-900 hover:bg-gray-100"
                        role="menuitem"
                        id="menu-item-0"
                      >
                        <img className="h-3 w-3 mr-1" src="/account.png" />
                        {`${t("dashboard:Accounts")}`}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* ///// */}
            </ul>
            <div className="flex justify-center absolute bottom-0 mb-8 w-full">
              <div className="relative">
                <div className="px-4">
                  <ul className="w-full flex items-center justify-between ">
                    <li className="cursor-pointer text-white pt-5 pb-3">
                      <LogoutBtn></LogoutBtn>
                    </li>
                    <li className="cursor-pointer text-white pt-5 pb-3 ml-3 mr-2">
                      <button
                        aria-label=""
                        id="ru"
                        className={` ${
                          lang === "RU"
                            ? "text-black underline"
                            : "text-gray-400"
                        }   font-medium text-sm`}
                        value="RU"
                        onClick={setRussion}
                      >
                        RU
                      </button>
                    </li>
                    <li className="cursor-pointer text-white pt-5 pb-3 mx-2">
                      <button
                        aria-label=""
                        id="UA"
                        className={` ${
                          lang === "UA"
                            ? "text-black underline"
                            : "text-gray-400"
                        }   font-medium text-sm`}
                        value="UA"
                        onClick={setUA}
                      >
                        UA
                      </button>
                    </li>
                    <li className="cursor-pointer text-white pt-5 pb-3 mx-2">
                      <button
                        aria-label=""
                        id="en"
                        className={` ${
                          lang === "ENG"
                            ? "text-black underline"
                            : "text-gray-400"
                        }  font-medium text-sm`}
                        value="ENG"
                        onClick={setEng}
                      >
                        ENG
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          aria-label=""
          id=""
          className={` h-10 w-10 bg-gray-800 ${
            sideBar ? "left-60" : "left-0"
          } fixed mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer text-white sm:hidden`}
          onClick={() => {
            setSideBar(!sideBar);
          }}
        >
          {sideBar ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-x"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-adjustments"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke="#FFFFFF"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx="6" cy="10" r="2" />
              <line x1="6" y1="4" x2="6" y2="8" />
              <line x1="6" y1="12" x2="6" y2="20" />
              <circle cx="12" cy="16" r="2" />
              <line x1="12" y1="4" x2="12" y2="14" />
              <line x1="12" y1="18" x2="12" y2="20" />
              <circle cx="18" cy="7" r="2" />
              <line x1="18" y1="4" x2="18" y2="5" />
              <line x1="18" y1="9" x2="18" y2="20" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}

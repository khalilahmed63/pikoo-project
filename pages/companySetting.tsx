import React, { useState } from "react";
import Head from "next/head";
import SecondaryBtn from "../components/SecondaryBtn";
import PrimaryBtn from "../components/PrimaryBtn";
import TriangleBtn from "../components/TriangleBtn";
import DashboardSidebar2 from "../components/DashboardSidebar2";
import Chart from "../components/Chart";
import DashboardHeader from "../components/DashboardHeader";
import { useTranslation } from "react-i18next";

export default function CompanySetting(props: any) {
  const { t, i18n } = useTranslation();
  const [addressEdit, setAddressEdit] = useState(true);
  const [telephoneEdit, setTelephoneEdit] = useState(true);
  const [userNameEdit, setUserNameEdit] = useState(true);
  const [currentPasswordEdit, setCurrentPasswordEdit] = useState(true);
  const [userName, setUserName] = useState("Дерзай-продавай");
  const [address, setAddress] = useState("ул.Некрасова 19, стр.4");
  const [telephone, setTelephone] = useState("1234567890");
  const [currentPassword, setCurrentPassword] = useState("asdfasdf");

  return (
    <div className=" h-full">
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-no-wrap w-full">
        <DashboardSidebar2 />
        <div className=" bg-gray-50 min-h-screen w-[100%] sm:w-[80%] ">
          <DashboardHeader />
          <div className="px-10 py-6 ">
            <div className="flex justify-between">
              <div className="flex items-center">
                <p className="font-bold">
                  {/* {t("dashboard:Accountsetup")} */}
                  Настройка компании
                </p>
              </div>
            </div>
          </div>
          <div className=" px-10">
            <div className="container h-full  rounded mb-8">
              <div className="w-full h-full bg-white rounded shadow-md">
                <div className="bg-[#c5f177] py-4 px-5 rounded-t-md">
                  <p className="font-bold">Данные об организации</p>
                </div>
                <div className="py-4 px-5 ">
                  <div className="flex">
                    <div>
                      <p className="px-1 py-2">Общие данные</p>
                      <div className="bg-[#F8F8F8] rounded-lg px-4 py-2 w-80 h-72">
                          <div className="border-b pt-4">
                            <p className="text-xs text-gray-300">User Name</p>
                            <div className="flex items-center justify-between">
                              <input
                                type="text"
                                className={`py-1 text-sm bg-transparent outline-none ${
                                  userNameEdit ? "text-gray-400 " : ""
                                }`}
                                disabled={userNameEdit}
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                              />
                              {userNameEdit ? (
                                <img
                                  className=" h-4 w-4 mr-1 cursor-pointer"
                                  src="/edit.png"
                                  onClick={() => {
                                    setUserNameEdit(!userNameEdit);
                                  }}
                                />
                              ) : (
                                <PrimaryBtn
                                  onClick={() => {
                                    setUserNameEdit(!userNameEdit);
                                  }}
                                >
                                  <p className="text-xs">Save</p>
                                </PrimaryBtn>
                              )}
                            </div>
                          </div>

                          <div className="border-b pt-4">
                            <p className="text-xs text-gray-300">
                              {t("dashboard:Telephone")}
                            </p>
                            <div className="flex items-center justify-between">
                              <input
                                type="text"
                                className={`py-1 text-sm bg-transparent outline-none ${
                                  telephoneEdit ? "text-gray-400 " : ""
                                }`}
                                disabled={telephoneEdit}
                                value={telephone}
                                onChange={(e) => setTelephone(e.target.value)}
                              />
                              {telephoneEdit ? (
                                <img
                                  className=" h-4 w-4 mr-1 cursor-pointer"
                                  src="/edit.png"
                                  onClick={() => {
                                    setTelephoneEdit(!telephoneEdit);
                                  }}
                                />
                              ) : (
                                <PrimaryBtn
                                  onClick={() => {
                                    setTelephoneEdit(!telephoneEdit);
                                  }}
                                >
                                  <p className="text-xs">Save</p>
                                </PrimaryBtn>
                              )}
                            </div>
                          </div>
                          <div className="border-b pt-4">
                            <p className="text-xs text-gray-300">
                              Юридический адрес
                            </p>
                            <div className="flex items-center justify-between">
                              <input
                                type="email"
                                className={`py-1 text-sm bg-transparent outline-none ${
                                  addressEdit ? "text-gray-400 " : ""
                                }`}
                                disabled={addressEdit}
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                              />
                              {addressEdit ? (
                                <img
                                  className=" h-4 w-4 mr-1 cursor-pointer"
                                  src="/edit.png"
                                  onClick={() => {
                                    setAddressEdit(!addressEdit);
                                  }}
                                />
                              ) : (
                                <PrimaryBtn
                                  onClick={() => {
                                    setAddressEdit(!addressEdit);
                                  }}
                                >
                                  <p className="text-xs">Save</p>
                                </PrimaryBtn>
                              )}
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import styles from "../styles/mobile.module.css";
import MobileInput from "./MobileInput";
import { ChangeEvent, useState } from "react";
import Link from "next/link";

export default function Mobile(props: any) {
  return (
    <>
      <div className="relative rounded-lg flex justify-center ">
        <div className={`z-20 absolute  rounded-3xl py-3`}>
          <div className=" h-4 "></div>
          <div
            className={`pb-[2.6rem] rounded-b-3xl w-[12.5rem] ${
              props.img === "bg_image1"
                ? styles.bg_image1
                : props.img === "bg_image2"
                ? styles.bg_image2
                : props.img === "bg_image3"
                ? styles.bg_image3
                : props.img === "bg_image4"
                ? styles.bg_image4
                : ""
            }`}
          >
            <form action="">
              <div className="bg-gray-300 px-2 py-2  ">
                <input
                  className="w-full rounded text-xs p-1 "
                  type="text"
                  placeholder="www.pikoo.com.ua"
                />
              </div>

              <div className="m-2 bg-white w-46  rounded shadow-md ">
                <div>
                  <p className="text-center text-xs font-bold py-2 ">
                    Регистрация
                  </p>
                </div>
                <div className="h-56 overflow-auto z-40">{props.children}</div>
                <div className="flex justify-center my-2 p-4">
                  <button
                    type="submit"
                    className=" text-dark bg-[#c5f177] shadow-lg hover:shadow focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-1  text-center"
                  >
                    зарегистрироваться
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="z-0 ">
          <img className=" w-56 h-[100%]" src="/Телефон@2x.png" />
        </div>
      </div>
    </>
  );
}

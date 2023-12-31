import Head from "next/head";
import Inputfield from "../components/Inputfield";
import Btn from "../components/Btn";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as yup from "yup";
import client from "../utils/client";
import { useRouter } from "next/router";
import { useState, ChangeEvent } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  selectFromData,
  setsellingPoints,
} from "../redux/features/mobileInputs/formDataSlice";

const Fourthpage = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const { discountTmpId, sellingPoints } = useSelector(selectFromData);
  const dispatch = useDispatch();

  const salePointSchema = yup.object().shape({
    name: yup.string().required("Enter the name"),
    email: yup.string().email().required("Enter the Email"),
    gps: yup.string().required("select the gps"),
    password: yup
      .string()
      .required("Enter Your Password")
      .min(6, "Must be 6 charaters")
      .max(30, "Must be 30 charaters"),
  });
  // yup schema

  const formik = useFormik({
    initialValues: {
      name: ``,
      email: ``,
      gps: ``,
      password: ``,
    },
    onSubmit: (values) => {
      //   alert(JSON.stringify(values, null, 2));
      dispatch(setsellingPoints(values));
      router.push("/sale-points");
    },
    validationSchema: salePointSchema,
  });

  useEffect(() => {
    if (discountTmpId === "") {
      router.push("/signup/step-1");
    }
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#08115d] to-[#95bf5c] items-center grid grid-cols-1 place-content-center">
      <Head>
        <title>New Sale Point</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center ">
        <div className="">
          <div className="flex justify-center pb-8 pt-2">
            <img className="logo" src="/pikoo-logo.png" />
          </div>
          <div className="max-w-xl w-full bg-white rounded-lg  shadow-md inline-block align-baseline">
            <h5 className="text-base p-3 font-medium text-gray-900 bg-[#c5f177] text-center rounded-tl-lg rounded-tr-lg shadow-md">
              {`${t("common:createaccount")}`}
            </h5>
            <div className="sm:pt-0 px-10 sm:px-10 md:px-8">
              <form onSubmit={formik.handleSubmit} method="post">
                <p className="text-xs font-bold pt-4">
                  {`${t("common:createaccdesc")}`}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <Inputfield
                      label={`${t("common:namepoint")}`}
                      htmlFor={"name"}
                      name={"name"}
                      id={"name"}
                      inputtype={"text"}
                      placeholder=""
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                    <p className="block h-4 text-xs font-medium text-red-600">
                      {formik.errors.name && formik.touched.name && (
                        <div className="block h-2 text-xs font-medium text-red-600">
                          {formik.errors.name}
                        </div>
                      )}
                    </p>
                    <Inputfield
                      label={`${t("common:gpscordinate")}`}
                      htmlFor={"gps"}
                      name={"gps"}
                      id={"gps"}
                      inputtype={"text"}
                      placeholder=""
                      onChange={formik.handleChange}
                      value={formik.values.gps}
                    />
                    <p className="block h-4 text-xs font-medium text-red-600">
                      {formik.errors.gps && formik.touched.gps && (
                        <div className="block h-2 text-xs font-medium text-red-600">
                          {formik.errors.gps}
                        </div>
                      )}
                    </p>
                    <Inputfield
                      label={`${t("common:login")}`}
                      htmlFor={"email"}
                      name={"email"}
                      id={"email"}
                      inputtype={"email"}
                      placeholder=""
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    <p className="block h-4 text-xs font-medium text-red-600">
                      {formik.errors.email && formik.touched.email && (
                        <div className="block h-2 text-xs font-medium text-red-600">
                          {formik.errors.email}
                        </div>
                      )}
                    </p>
                    <Inputfield
                      label={`${t("common:password")}`}
                      htmlFor={"password"}
                      name={"password"}
                      id={"password"}
                      type={"password"}
                      placeholder=""
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                    <p className="block h-4 text-xs font-medium text-red-600">
                      {formik.errors.password && formik.touched.password && (
                        <div className="block h-2 text-xs font-medium text-red-600">
                          {formik.errors.password}
                        </div>
                      )}
                    </p>
                  </div>
                  <div className="flex items-center ">
                    <Link href="map">
                      <a className="underline text-xs font-bold sm:-mt-10">
                        {`${t("common:tomap")}`}
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 sm:px-8 pb-6">
                  <Link href="/sale-points">
                    <a className="flex justify-center">
                      <Btn innertext="Отмена" />
                    </a>
                  </Link>
                  {/* <Link href="second-page"> */}
                  <a className="flex justify-center ">
                    <Btn type="submit" innertext={`${t("common:create")}`} />
                  </a>
                  {/* </Link> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourthpage;

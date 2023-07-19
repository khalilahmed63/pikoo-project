import Head from "next/head";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Mobile from "../../components/Mobile";
import { useState } from "react";
import { useEffect } from "react";
import Btn from "../../components/Btn";
import Link from "next/link";
import { useRouter } from "next/router";
import MobileInput from "../../components/MobileInput";
import { useSelector } from "react-redux";
import { selectInputState } from "../../redux/features/mobileInputs/mobileInputSlice";
import { selectFromData } from "../../redux/features/mobileInputs/formDataSlice";

const Step2 = (props: any) => {
  const { t, i18n } = useTranslation();
  const [domLoaded, setDomLoaded] = useState(false);
  const [backGroundState, setbackGroundState] = useState("bg_image1");
  const { inputs } = useSelector(selectInputState);
  const { discountTmpId } = useSelector(selectFromData);
  const router = useRouter();

  useEffect(() => {
    setDomLoaded(true);
    if (discountTmpId === "") {
      router.push("/signup/step-1");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#08115d] to-[#95bf5c]  items-center grid grid-cols-1 place-content-center">
      <Head>
        <title>Discount Create | Step 2</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center ">
        <div>
          <div className="flex justify-center pb-8 pt-2">
            <img className="logo" src="/pikoo-logo.png" />
          </div>

          <div className=" my-4  bg-gray-100 rounded-lg  shadow-md">
            <div className="absolute p-4 ">
              {" "}
              <Link href="step-1">
                <a>
                  <Image
                    className="cursor-pointer"
                    height={15}
                    width={15}
                    src="/../public/backarrow.png"
                    alt="asdf"
                  />
                </a>
              </Link>
            </div>
            <h5 className="text-base px-8 py-3 font-medium text-gray-900 bg-[#c5f177] text-center rounded-tl-lg rounded-tr-lg shadow-md">
              Настройка формы регистрации клиента
              <p className="text-xs">Шаг 2 из 2</p>
            </h5>

            <div className="sm:pt-0  sm:px-4 md:px-18  ">
              <form className="pt-4" action="#">
                <div className="md:flex pb-4 px-4">
                  <div className="flex justify-center items-center ">
                    <div className="px-0 md:px-2 lg:px-4 ">
                      <div className="mb-4">
                        <p className="font-bold px-4 m-0 text-xs text-center">
                          Для наглядности, эта форма будет принимать выбранный
                          Вами фон.{" "}
                        </p>
                        <p className=" mt-2 text-xs text-center px-4">
                          Этот фон будет появляется на странице регистрации на
                          экране гаджета Вашего клиента.{" "}
                        </p>
                      </div>
                      <div className="grid grid-cols-4 gap-4 p-4">
                        <div
                          className={` cursor-pointer hover:scale-125 transition-all ${
                            backGroundState === "bg_image1" ? "scale-125" : ""
                          }`}
                          onClick={() => {
                            setbackGroundState(`bg_image1`);
                          }}
                        >
                          <Image
                            className="rounded-md"
                            height={100}
                            width={100}
                            src="/../public/bg-1.png"
                            alt="img"
                          />
                        </div>
                        <div
                          className={` cursor-pointer hover:scale-125 transition-all ${
                            backGroundState === "bg_image2" ? "scale-125" : ""
                          }`}
                          onClick={() => {
                            setbackGroundState(`bg_image2`);
                          }}
                        >
                          <Image
                            className="rounded-md"
                            height={100}
                            width={100}
                            src="/../public/bg-2.png"
                            alt="img"
                          />
                        </div>
                        <div
                          className={` cursor-pointer hover:scale-125 transition-all ${
                            backGroundState === "bg_image3" ? "scale-125" : ""
                          }`}
                          onClick={() => {
                            setbackGroundState(`bg_image3`);
                          }}
                        >
                          <Image
                            className="rounded-md"
                            height={100}
                            width={100}
                            src="/../public/bg-3.png"
                            alt="img"
                          />
                        </div>
                        <div
                          className={` cursor-pointer hover:scale-125 transition-all ${
                            backGroundState === "bg_image4" ? "scale-125" : ""
                          }`}
                          onClick={() => {
                            setbackGroundState(`bg_image4`);
                          }}
                        >
                          <Image
                            className="rounded-md"
                            height={100}
                            width={100}
                            src="/../public/bg-4.png"
                            alt="img"
                          />
                        </div>
                      </div>
                      <div className="p-4 flex justify-center">
                        <Link href="/discount-create/step-3">
                          <a>
                            <Btn innertext={`${t("common:next")}`} />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {domLoaded && (
                    // <Mobile img={backGroundState} />
                    <Mobile img={backGroundState}>
                      {inputs.map((input: any, index: any) => (
                        <div key={index}>
                          {input.isChecked ? (
                            <MobileInput
                              label={input.text}
                              placeholder={input.text}
                              type={input.type}
                            />
                          ) : (
                            ""
                          )}
                        </div>
                      ))}
                    </Mobile>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;

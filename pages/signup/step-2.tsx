import { ChangeEvent, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Btn from "../../components/Btn";
import RadioBtn from "../../components/RadioBtn";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import {
  selectFromData,
} from "../../redux/features/mobileInputs/formDataSlice";

const Step2 = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const { companyName } = useSelector(selectFromData);

  const [discountUnits, setDiscountUnits] = useState([
    {
      id: "option_1",
      value: "option_1",
      name: "option_1",
      label: `${t("common:radiobtn1")}`,
      description: `${t("common:radio1dec")}`,
      isSelected: true,
      disabled: false,
    },
    {
      id: "option_2",
      value: "option_2",
      name: "option_2",
      label: `${t("common:radiobtn2")}`,
      description: "qwertyuiop",
      isSelected: false,
      disabled: true,
    },
    {
      id: "option_3",
      value: "option_3",
      name: "option_3",
      label: `${t("common:radiobtn3")}`,
      description: "asdfghjkl",
      isSelected: false,
      disabled: true,
    },
  ]);

  const radioChange = (e: ChangeEvent) => {
    const newdiscountUnits = discountUnits.map((discountUnit: any) => {
      if (discountUnit.id === e.target.id) {
        // eslint-disable-next-line no-param-reassign
        discountUnit.isSelected = true;
      } else {
        // eslint-disable-next-line no-param-reassign
        discountUnit.isSelected = false;
      }
      return discountUnit;
    });
    setDiscountUnits(newdiscountUnits);
  };

  useEffect(() => {
      if (companyName === '') {
        router.push('/signup/step-1');
      }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#08115d] to-[#95bf5c]  items-center grid grid-cols-1 place-content-center">
      <Head>
        <title>Step 2</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center ">
        <div className="">
          <div className="flex justify-center pb-8 pt-2">
            <img className="logo" src="/pikoo-logo.png" />
          </div>

          <div className="max-w-md w-full sm:w-96 bg-white rounded-lg  shadow-md ">
            <div className="absolute p-4 ">
              {" "}
              <Link href="/signup/step-1">
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
            <h5 className="text-base p-3 font-medium text-gray-900 bg-[#c5f177] text-center rounded-tl-lg rounded-tr-lg shadow-md">
              {`${t("common:creatediscountprogram")}`}
              <p className="text-xs">
                {`${t("common:step")}`} 2 {`${t("common:of")}`} 3{" "}
              </p>
            </h5>

            <div className="sm:pt-0 px-10 sm:px-10 md:px-8">
              <form className="pt-8" action="#">
                <div className="flex-column items-center justify-center py-2 gap-3">
                  {discountUnits.map((discountUnit, index) => (
                    <div className="py-1 flex" key={index}>
                      <RadioBtn
                        key={discountUnit.id}
                        id={discountUnit.id}
                        label={discountUnit.label}
                        value={discountUnit.value}
                        checked={discountUnit.isSelected}
                        disabled={discountUnit.disabled}
                        onChange={radioChange}
                      />
                    </div>
                  ))}
                </div>
                <div className="py-3">
                  {discountUnits.map((discountUnit, index) => (
                    <p className="text-xs  text-center" key={index}>
                      {discountUnit.isSelected ? discountUnit.description : ""}
                    </p>
                  ))}
                </div>

                <div className=" sm:px-8 pb-6 items-center text-center">
                  <Link href="/signup/step-3">
                    <a>
                      <Btn innertext={`${t("common:next")}`} />
                    </a>
                  </Link>
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

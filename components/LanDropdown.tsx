import React, { useState } from "react"
import { useTranslation, I18nextProvider } from "react-i18next"

const LanDropdown = () => {
    const { t, i18n } = useTranslation()
    const getInitialState = () => {
        const value = "ru"
        return value
    }
    const [value, setValue] = useState(getInitialState)


  const handleChange = (e :any) => {
    console.log(">>>>", e.target.value);
    setValue(e.target.value);
    return i18n.changeLanguage(e.target.value);
  };
  //   const selectedLanguageCode = i18n.language;
  //   const setLanguage = (code) => {
  //     return i18n.changeLanguage(code);
  //   };
  return (
    <>
      <div className="my-2">
        {/* <h1>{`${t("common:Languagetitle")}`}</h1> */}
        <select
          className="w-full rounded-md border border-gray-400 p-1  text-gray-600"
          value={value}
          onChange={handleChange}
        >
          <option value="ru">RUSSIA</option>
          <option value="en">ENGLISH</option>
        </select>
      </div>
    </>
  );
};
export default LanDropdown;

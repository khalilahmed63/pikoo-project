import React from 'react'

export default function SecondaryBtn(props: any) {
  return (
      <button type="submit" className=" text-dark shadow-lg hover:shadow focus:outline-none font-medium rounded-md text-sm px-4 py-2  text-center">{props.children}</button>
  )
}

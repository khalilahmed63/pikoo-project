
import React from 'react'

export default function CustomTooltipContent() {
  return (
    <div className=" p-4 shadow-lg">

      <div className="flex items-center">
        <p className="text-xs">Выдано новых карт</p>
        <div className="border border-[#BDFFE3] px-1 mx-2 rounded-md bg-[#E2F7BD]">123</div>
      </div> 
      <div className="flex items-center">
        <p className="text-xs">Это больше на : </p>
        <p className="text-xs">+138шт /1086%</p>
      </div>
    </div>
  )
}

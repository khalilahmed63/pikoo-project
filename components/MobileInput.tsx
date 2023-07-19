import React from 'react'

export default function MobileInput(props: any) {
    return (
        <div className=" mx-2 ">
            <label
                htmlFor={props.label}
                className="block  p-1 text-xs font-medium text-gray-900"
            >
                {props.label}
            </label>
            <input className="w-full rounded border text-xs p-1 " type={props.type} placeholder={props.placeholder} />
        </div>
    )
}

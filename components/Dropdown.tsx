import React from "react"

const Dropdown = () => {
    return (
        <>
            <div className="my-2">
                <select className="rounded-md border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1 ">
                    <option value="volvo">Option 1</option>
                    <option value="saab">Option 2</option>
                    <option value="audi">Option 3</option>
                </select>
            </div>
        </>
    )
}
export default Dropdown

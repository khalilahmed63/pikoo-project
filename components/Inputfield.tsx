const Inputfield = (props: any) => {
    return (
        <div className="mb-2">
            <label
                htmlFor={props.htmlFor}
                className="block mb-1 text-xs font-medium text-gray-900"
            >
                {props.label}
            </label>
            <input
            {...props}
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 "
            />
        </div>
    )
}
export default Inputfield

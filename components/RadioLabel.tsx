const RadioLabel = (props: any) => {
    return (
                <label
                    htmlFor="remember"
                    className="ml-2 text-xs font-medium text-gray-900 "
                >
                          {props.children}
                </label>
    )
}
export default RadioLabel

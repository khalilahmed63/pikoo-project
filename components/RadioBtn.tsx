import RadioLabel from "./RadioLabel"

export interface IRadioBtn {
    id: string
    value: string
    name: string
    label: string
    description: string
    isSelected: boolean
}
const RadioBtn = (props: any) => {
    return (
        <>
            <input type="radio" {...props} id={props.id} />
            <label
                style={{
                    marginLeft: "5px",
                    color: props.disabled ? "grey" : "black",
                }}
                htmlFor={props.id}
            >
                {props.label}
            </label>
        </>
    )
}
export default RadioBtn

const InputStyle = "p-2 border border-black w-full"

export const Input = ({ name, placeholder, value, Onchange, type }) => {
    return (
        <div className="grid my-2">
            <label htmlFor="">{name || "Not Defined"}</label>
            <input type={type || "text"} value={value} Onchange={Onchange} className={InputStyle} placeholder={placeholder || name} />
        </div>
    )
}
export const TextArea = () => {
    return (
        <div className="grid my-2">
            <label htmlFor="">Message</label>
            <textarea name="" className={InputStyle} id="" />
        </div>
    )
}
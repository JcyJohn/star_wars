'use client';
import styles from "./input.module.css"

interface inputProps{ 
    isRequired?:boolean,
    type ?:string,
    label:string,
    name:string,
    setFormData:(e:React.ChangeEvent<HTMLInputElement>) => void
}

export default ({isRequired = true, type = "text", label, name, setFormData}:inputProps) => {
    return(
        <div className={styles.inputParent}>
            <input placeholder={label} type = {type} required = {isRequired} id={styles.Input} onChange={setFormData} name = {name} />
            <label htmlFor = {styles.Input}>{label}</label>
        </div>
    )
}
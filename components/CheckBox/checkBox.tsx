"use client"
import { useState, useEffect } from "react"
import styles from "./checkBox.module.css"

interface checkBoxProps{
    id:string,
    updateCheckValue: (id:string,checkedStatus:boolean) => void,
    masterCheck:{status:boolean, updateAll:boolean}
}

export default ({id, updateCheckValue, masterCheck}:checkBoxProps) => {
    
    const onClickEvent =() =>{
        setIsChecked(!isChecked)
        updateCheckValue(id,!isChecked)
    }

    const [isChecked, setIsChecked] = useState(masterCheck.status);

    useEffect(() => {
       
        if (masterCheck.updateAll){
            if (id!=="master"){
                setIsChecked(masterCheck.status)     
            }
            updateCheckValue(id,masterCheck.status)
        }else{
            if (id === "master"){
                setIsChecked(masterCheck.status) 
            }
        }


    }, [masterCheck.status])
    
    return (
    <label className={styles.container}>
        <input checked = {isChecked} name={id} onChange={onClickEvent} type="checkbox" />
        <span className={styles.checker}></span>
    </label>
    )
}
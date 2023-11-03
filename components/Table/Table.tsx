"use client"
import {useReducer, useState } from "react";
import CheckBox from "../CheckBox/checkBox";
import styles from "./Table.module.css"
import { FormatStrings, GeneralObject } from "@/utils/helperInterfaces";
import { useRouter } from 'next/navigation'
 

const checkBoxReducer = (state:GeneralObject, data:{id:string, checked:boolean}) => {
    return{
        ...state,
        [data.id]:data.checked
    }
}

interface tableProps{
    tableKeys: string[],
    tableCenteredItem?: string[];
    tableData: GeneralObject[],
    tableTitle:string
}


export default ({tableTitle,tableCenteredItem,tableKeys,tableData}:tableProps) => {
    const router = useRouter()
    const [checkBoxData,setCheckBoxData] = useReducer(checkBoxReducer,{});//This takes in a function and an Initial value
    const [masterCheck, setMasterCheck] = useState({status:false, updateAll:true});
    const handleCheckBoxUpdate = (id:string,checkedStatus:boolean) =>{
        if (id === "master"){
            setMasterCheck({status:checkedStatus,updateAll:true})
            setCheckBoxData({id:id, checked:checkedStatus})
        }else{
            //Remember to not pass master when sending data to server
            // Master is used locally for validation
            if(checkedStatus === false && checkBoxData["master"]){
                setMasterCheck({status:false,updateAll:false})
            }
            
            setCheckBoxData({id:id, checked:checkedStatus})
        }       
    }

    return(
        <div className={styles.tableContainer}>
            <h4>{tableTitle}</h4>
            <table className={styles.table}>
                <thead className={styles.tableHead}>
                    <tr>
                        <th><CheckBox masterCheck = {masterCheck} id={"master"} updateCheckValue={handleCheckBoxUpdate}/></th>
                        {
                            tableKeys.map(
                                headingElement => (
                                    <th key={headingElement}>{FormatStrings(headingElement)}</th>
                                )
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map(
                            (singleTableData, index) => (
                                <tr onClick={()=>router.push(`/Dashboard/${tableTitle}/${singleTableData.id}`)} key={"chk"+index}>
                                    <td><CheckBox masterCheck = {masterCheck} id={"chk"+index} updateCheckValue={handleCheckBoxUpdate}/></td>
                                    {
                                        tableKeys.map(
                                            singleItem =>(
                                                <td className={tableCenteredItem?.includes(singleItem) ? styles.centered : ""} key={singleItem}>{singleTableData[singleItem]}</td>
                                            )
                                        )
                                    }
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
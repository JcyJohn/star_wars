"use client"
import styles from "./DashboardSummary.module.css"
import { useRouter } from 'next/navigation'

interface dashboardSummaryProps{
    title:String,
    amount:number,
    text:string,
    color:string
}

export default ({title,amount,text,color}:dashboardSummaryProps) =>{
    const router = useRouter()
    const openPage = () =>{
        if (title.toLowerCase()!=="films")
            router.push(`/Dashboard/${title}`)
    }
    return(
        <div onClick={openPage} className={styles.dashBoardSummaryContainer}>
            <div className={styles.topContainer}>
                <h1>{title}</h1>
                <div className={styles.colorBox} style={{backgroundColor:color}}></div>
            </div>
            <div>
                <h1>{amount}</h1>
                <p>{text}</p>
            </div>
        </div>
    )
}
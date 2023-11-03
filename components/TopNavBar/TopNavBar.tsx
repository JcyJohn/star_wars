"use client";
import Image from "next/image"
import styles from "./TopNavBar.module.css"
import { useRouter } from 'next/navigation'

interface TopNavProps{
    profilePicsUrl?:string,
    parent?: string,
    isLoggedIn:boolean
}

export default ({profilePicsUrl = "/Images/account.png", parent = ""}:TopNavProps) =>{
    const router = useRouter()
    return (<div className={styles.topNavBarNav}>
        {parent!== "" &&
            <div className={styles.back}  onClick={() => router.push('/Dashboard/'+parent)}>
                <Image src = "/Images/back.png" height={10} width={10} alt="back" />
                <span>Back</span>
            </div>
        }
       
        <nav>
            <img src="/Images/not.png" />
            <div className={styles.line}></div>
            <img  className={styles.profilePic} src={profilePicsUrl} />
            <p className={styles.userName}>John Doe</p>
            <img className={styles.groupIcon} src="/Images/group.png"/>
        </nav>        
    </div>)
}
import Link from "next/link"
import styles from "./navLinks.module.css"
import Image from 'next/image'


interface navLinkProps{
    ImageUrl?:string,
    url:string,
    text:string,
    active:boolean,
    color?:string,
    useColor?:boolean
}


export default  ({ImageUrl="",url,text,active,useColor =false, color = ""}:navLinkProps) => {

    return(
        <Link className={active ? styles.active: styles.link} href={url}>
            {            
                useColor ? <div className={styles.colorBox} style={{backgroundColor:color}}></div> : <Image alt={text} width={18} height={18} className={styles.logo} src={ImageUrl} />
            }
            <span>{text === "Films"?"Overview":text}</span>
        </Link>
    )
}
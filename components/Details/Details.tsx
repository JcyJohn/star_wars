import { FormatStrings, GeneralObject } from "@/utils/helperInterfaces"
import styles from "./Details.module.css"
import Image from "next/image"

interface detailsProps{
    details: GeneralObject
    detailsKeys:string[]
}

export default ({details,detailsKeys}:detailsProps) => {
    return(
        <div className={styles.detailContainer}>
            <Image src={details.image} width={318} height={450} alt={details.heading} />
            <div>
                <h1>{details.heading}</h1>
                {
                    detailsKeys.map(
                        singleDetailKey => (
                            <div className={styles.contents} key={singleDetailKey}>{FormatStrings(singleDetailKey)}: {details[singleDetailKey]}</div>
                        )
                    )
                }
            </div>
        </div>
    )
}
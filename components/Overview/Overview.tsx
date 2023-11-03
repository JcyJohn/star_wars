import DashboardSummary from "../DashboardSummary/DashboardSummary"
import styles from "./Overview.module.css"
import { GeneralObject } from "@/utils/helperInterfaces"

export interface overViewProps {
    overViewItems:GeneralObject[]
}
export default ({overViewItems}:overViewProps) => {
    
    return(
        <div className={styles.overview}>
            {overViewItems.map(
                singleOverViewItem => (
                    <DashboardSummary
                        key={singleOverViewItem.title}
                        title={singleOverViewItem.title}
                        color={singleOverViewItem.color}
                        amount={singleOverViewItem.amount}
                        text={singleOverViewItem.text}
                    />
                )
            )}
        </div>
    )
}
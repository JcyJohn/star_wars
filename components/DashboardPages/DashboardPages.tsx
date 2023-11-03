import styles from "@/app/Dashboard/dashboard.module.css"
import SideNavBar from "@/components/SideNavBar/SideNavBar"
import TopNavBar from "@/components/TopNavBar/TopNavBar"
import Table from "@/components/Table/Table"
import { GeneralObject } from "@/utils/helperInterfaces";
import Overview from "../Overview/Overview";
import Details from "../Details/Details";

interface DashboardPageProps {
    title?:string
    tableKeys?:string[]
    tableData?:GeneralObject[]
    hasOverView?: boolean
    OverviewData?:GeneralObject[]
    showOnlyDetails?:boolean
    details?:GeneralObject
    detailsKey?:string[]
    loadingStatus:boolean
}

export default ({
    title = "",
    tableKeys = [],
    tableData=[],
    hasOverView = false,
    OverviewData = [],
    details = {},
    detailsKey =[],
    showOnlyDetails =false,
    loadingStatus = false
    }:DashboardPageProps) => {
    
        return(
        <div className={styles.main}>
            <SideNavBar active={title} />
            
                <div className={styles.dashboardBody}>            
                    <TopNavBar parent={showOnlyDetails?title:""} isLoggedIn = {true}/>
                    { (hasOverView) && (<Overview overViewItems={OverviewData} />)}
                    {loadingStatus && ((!showOnlyDetails)? (    
                        <Table
                            tableTitle = {title} 
                            tableKeys={tableKeys}
                            tableData = {tableData}
                            tableCenteredItem={["episode_id"]}
                        /> 
                    ):(
                        <Details
                            details={details}
                            detailsKeys={detailsKey}
                        />
                    ))}
                </div>
                
           
            
        </div>
    )
}
import DashboardPages from "@/components/DashboardPages/DashboardPages"
import { GetPages } from "@/utils/getFileFromServer"

export default async () => {

    const overviewItem = [
        {title:"Films",amount:200, color:"#A9FFE0",text:"20 More than than yesterday"},
        {title:"StarShips",amount:200, color:"#A9C1FF",text:"20 More than than yesterday"},
        {title:"People",amount:200, color:"#FFA9EC",text:"20 More than than yesterday"},
        {title:"Species",amount:200, color:"#FDFFA9",text:"20 More than than yesterday"}
    ]

    const tableKeys = ["title","release_date","director","episode_id","producer"]
    const tableData = await GetPages("films")


    return(
        <main>
           <DashboardPages 
                hasOverView = {true}
                OverviewData={overviewItem} 
                tableData={tableData}
                tableKeys={tableKeys}
                title="Films"
                loadingStatus = {true}
            />
        </main>
    )
}
import DashboardPages from "@/components/DashboardPages/DashboardPages"
import { GetPages } from "@/utils/getFileFromServer";
import { GeneralObject } from "@/utils/helperInterfaces";


const allTableKeys:GeneralObject = {
    StarShips:["name","model","starship_class","passengers","length","passengers"],
    People:["name","birth_year","gender", "hair_colors", "height","created"],
    Species:["name","classification","eye_colors","hair_colors","average_height","created"],
    Films: ["title","release_date","director","episode_id","producer"]
}

export default async ({params}:{params:{"id":string}}) => {
   
    const tableKeys = allTableKeys[params.id]
    const tableData = await GetPages(params.id)

    return(
     <main>
        <DashboardPages loadingStatus={true} title={params.id} tableKeys ={tableKeys} tableData = {tableData} />
     </main>
    )
}
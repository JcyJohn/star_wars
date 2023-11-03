import DashboardPages from "@/components/DashboardPages/DashboardPages"
import { GetDetails } from "@/utils/getFileFromServer"
import { GeneralObject } from "@/utils/helperInterfaces"

const allKeys:GeneralObject = {
    StarShips:["model","passengers"],
    People:["gender","birth_year", "skin_color", "height"],
    Films:["director","producer","release_date"],
    Species:["designation","language","eye_colors","average_lifespan"]
}

const allImageUrl:GeneralObject ={
    StarShips:"/Images/ship.png",
    People:"/Images/people.png",
    Films:"/Images/film.png",
    Species:"/Images/species.png"
}
const getDetailsKeys = (page:string) => {
    console.log(page)
    if(allKeys[page]){
        return allKeys[page]
    }else{
        throw new Error('Page Not Found')
    }
}

export default async ({params}:{params:{"id":string,"details":string}}) => {
    const detailsKey = getDetailsKeys(params.id)
    const details = await GetDetails(params.id,params.details)
    const headingElement = params.id.toLowerCase() === "films" ? "title" : "name"
    const defaultImage = allImageUrl[params.id]

    return(
        <main>
            {
                <DashboardPages 
                    showOnlyDetails = {true}
                    title={params.id}
                    details={{...details, ["heading"]:details[headingElement], ["image"]:defaultImage}}
                    detailsKey={detailsKey}
                    loadingStatus = {true}
                />
            }         
        </main>
    )
}
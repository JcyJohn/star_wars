import { GeneralObject } from "./helperInterfaces"

const endPoint =  "https://swapi.dev/api"

const GetDetails = async  (page:string, id:string)=>{
    const res = await fetch (`${endPoint}/${page.toLowerCase()}/${id}`)
    if (!res.ok) {
        throw new Error('Page Not Found')
    }
    const data:GeneralObject = await res.json()
    return data
}

type pageData = {
    results:GeneralObject[]
}
const GetPages = async  (page:string)=>{
    const res = await fetch (`${endPoint}/${page.toLowerCase()}`)
    if (!res.ok) {
        throw new Error('Page Not Found')
    }
    const data:pageData= await res.json()
    addAllIds(data["results"]);
    // console.log(data["results"])
    return data["results"]
}

const getId = (url:string) =>{
    let temp = url.substring(0,url.length-1)
    return temp.substring(temp.lastIndexOf("/")+1)
}


const addAllIds = (Data:GeneralObject[]) =>{
    Data.forEach(
        data => (
            data["id"] = getId(data["url"])
        )
    )
} 

export {GetDetails,GetPages}
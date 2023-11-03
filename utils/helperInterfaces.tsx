export interface GeneralObject{
    [key:string]:any
}

const FormatStrings = (stringToFormat:string ) => {
    return stringToFormat.replace("_"," ").replace(/^./, stringToFormat[0].toUpperCase())
}

export {FormatStrings}
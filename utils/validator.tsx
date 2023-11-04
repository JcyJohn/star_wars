interface validatorProps{
    email?:string,
    password?:string,
    setErrorMessage:(message:string) => void
}

const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const passwordTest = new RegExp("^(?=.*[A-z])(?=.*[0-9])(?=.{8,})")

export default ({email = "",password = "",setErrorMessage}:validatorProps) =>{
    let tempString = ""
    if (!re.test(String(email).toLowerCase())){
        // Email text failed
        tempString = "Enter a valid email address"
    }else if (!passwordTest.test(password)){
        tempString = "Password must be of at least 8 characters either letter and number"
    }

    setErrorMessage(tempString)
    return !(tempString.length > 0)
}
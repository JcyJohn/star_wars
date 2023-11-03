'use client';
import React, { useReducer, useState } from 'react';
import Input from '../Input/Input';
import styles from "./LoginForm.module.css"
import validator from '@/utils/validator';
import { useRouter } from 'next/navigation'


const FormReducer = (state:{}, event:React.ChangeEvent<HTMLInputElement>) => {
    return{
        ...state,
        [event.target.name]:event.target.value
    }
}


export default () => {
    const [formData,setFormData] = useReducer(FormReducer,{});//This takes in a function and an Initial value
    const [errorMessage, setError] = useState("");
    const router = useRouter()

    const setErrorMessage = (message:string)=> (setError(message))

    const handleSubmit = (e:React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        if (validator({...formData, setErrorMessage})){
            router.push(`/Dashboard`)
        }
        
        
    }
    
    return (
        <form className={styles.loginForm}>
            <p className={styles.errorText}>{errorMessage}</p>
            <Input type = 'email' label='Email address' name='email' setFormData={(e:React.ChangeEvent<HTMLInputElement>) => setFormData(e)}  />
            <Input type = 'password' label='Password' name='password' setFormData={(e:React.ChangeEvent<HTMLInputElement>) => setFormData(e)}  />
            <button onClick={(e) => handleSubmit(e)} className={styles.submitBtn}> Login </button>
            <a className={styles.links} href='#'>Forgot your password?</a>
        </form>
    )
}


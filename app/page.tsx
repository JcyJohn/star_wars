import styles from './page.module.css'
import LoginForm from '@/components/LoginForm/LoginForm'

export default async function  Home() {
  return (
    <main className={styles.main}>
        <div className={styles.darkPanel}>
            <img src='./Images/starWarsLogo.png'/>
        </div>
        <div className={styles.loginInPanel}>
            <section className={styles.loginFormContainer}>
                <div>
                    <h1>Login</h1>
                    <p>Kindly enter your details to log in</p>
                </div>
                <LoginForm /> 
                <span>
                    <a href='#'>Privacy Policy</a>
                    <span> and </span><a href='#'>Terms of services</a>
                </span>
            </section>               
        </div>
    </main>
  )
}

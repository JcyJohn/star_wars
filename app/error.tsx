'use client'
import styles from "./error.module.css"
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className={styles.main}>
      <h1>404</h1>
      <h2>Something went wrong!</h2>
      <p>Check the link</p>
    </div>
  )
}
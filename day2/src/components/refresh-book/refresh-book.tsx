"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import styles from './refresh-book.module.css'

const RefreshBook = () => {
  const [count, setCount] = useState(0)
  const router = useRouter()
  const refreshPage = () => {
    setCount(count + 1)
    router.refresh()
  }
  return (
    <div onClick={refreshPage} className={styles.refresh}>
      <span>New Book #{count}</span>
    </div>
  )
}

export default RefreshBook
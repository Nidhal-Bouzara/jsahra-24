'use client'

import Image from "next/image"
import { useState } from "react"
import { Book } from "../../data/books"
import styles from './book-info.module.css'

const BookInfo = ({ initialLoadBook }: { initialLoadBook: Book }) => {
  const [book, setBook] = useState(initialLoadBook)
  const refreshBook = async () => {
    const response = await fetch('/test')
    const newBook = await response.json()
    setBook(newBook)
  }
  return (
    <div className={styles.bookContainer}>
    <div className={styles.image}>
      <img src={book.image} alt={book.title} width={300} height={300} />
    </div>
    <div className={styles.details}>
      <h2>{book.author}</h2>
      <h1>{book.title}</h1>
      <p>{book.review}</p>
    </div>
    <button onClick={refreshBook}>Refresh This Book</button>
  </div>
  )
}

export default BookInfo
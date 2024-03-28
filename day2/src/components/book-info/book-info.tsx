import Image from "next/image"
import styles from './book-info.module.css'
import { Book } from "../../data/books"

const BookInfo = ({ book }: { book: Book }) => {
  return (
    <div className={styles.bookContainer}>
    <div className={styles.image}>
      <Image src={book.image} alt={book.title} width={300} height={300} />
    </div>
    <div className={styles.details}>
      <h2>{book.author}</h2>
      <h1>{book.title}</h1>
      <p>{book.review}</p>
    </div>
  </div>
  )
}

export default BookInfo
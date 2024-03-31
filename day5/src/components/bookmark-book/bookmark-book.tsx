'use client'
import { CiBookmark } from "react-icons/ci";
import styles from './bookmark-book.module.css'

interface Props {
  isbn: string
}

export const BookmarkBook = ({ isbn }: Props) => {

  const handleClick = ()  => {
    console.log('Bookmarking book, ', isbn); 
  }

  return (
    <button onClick={handleClick} className={styles.bookmark}><CiBookmark /></button>
  )
}

export default BookmarkBook;
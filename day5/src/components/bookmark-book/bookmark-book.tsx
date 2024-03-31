'use client'
import { CiBookmark } from "react-icons/ci";
import styles from './bookmark-book.module.css'
import { BookmarkResponse } from "../../app/api/bookmark/route";
import { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";
import classNames from "classnames";



interface Props {
  isbn: string
  initial?: boolean
}

export const BookmarkBook = ({ isbn, initial }: Props) => {
  // todo get the initial state from the user's bookmarks
  const [isBookmarked, setIsBookmarked] = useState<boolean>(initial ?? false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  // todo add debounce to handle multiple clicks
  const handleClick = async ()  => {
    if (isLoading) return
    setIsLoading(true)
    const data = await fetch('/api/bookmark', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ isbn })
    })
    const response: BookmarkResponse = await data.json()
    setIsBookmarked(response.bookmarked ?? isBookmarked)
    setIsLoading(false)
  }

  const chooseIcon = (bookmarked: boolean) => {
    return bookmarked ? <FaBookmark /> : <FaRegBookmark />
  }

  return (
    <button onClick={handleClick} className={classNames(styles.bookmark, { [styles.bookmarked]: isLoading ? !isBookmarked : isBookmarked })}>
      { chooseIcon(isLoading ? !isBookmarked : isBookmarked )}
    </button>
  )
}

export default BookmarkBook;
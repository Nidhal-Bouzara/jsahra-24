import Image from 'next/image';
import styles from './page.module.css';
import { IoIosStar } from "react-icons/io";
import BookmarkBook from '../../../components/bookmark-book/bookmark-book';
import SeeReviews from '../../../components/see-reviews/see-reviews';
import prisma from '../../../data/prisma';
import { userBookmarkExists } from '../../api/bookmark/route';

// todo add support for isbn13
const Page = async ({ params }: { params: { isbn: string } }) => {
  const { isbn } = params;
  const userBookmarkedBook = await userBookmarkExists(isbn)
  const book = await prisma.book.findUnique({ where: { isbn10: isbn }})
  if (!book) {
    return <h1>Book not found</h1>
  }
  return (
    <main className={styles.main}>
      <div className={styles.coverContainer}>
        <Image className={styles.cover} src={book.coverUrl} alt={'Book cover'} width={927} height={1500} />
      </div>
      <div className={styles.information}>
        <div className={styles.bookmarkPosition}><BookmarkBook isbn={isbn} initial={userBookmarkedBook} /></div>
        <h1 className={styles.title}>{book.title}</h1>
        <h2 className={styles.author}>{book.author}</h2>
        <div className={styles.rating}>
          <IoIosStar />
          <p>3.99</p>
          <p className={styles.ratingSource}>Goodreads</p>
        </div>
        <SeeReviews />
      </div>
    </main>
  );
}

export default Page;
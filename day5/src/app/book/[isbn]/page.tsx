import Image from 'next/image';
import styles from './page.module.css';
import { IoIosStar } from "react-icons/io";
import BookmarkBook from '../../../components/bookmark-book/bookmark-book';
import SeeReviews from '../../../components/see-reviews/see-reviews';

const Page = ({ params }: { params: { isbn: string } }) => {
  const { isbn } = params;
  return (
    <main className={styles.main}>
      <div className={styles.coverContainer}>
        <Image className={styles.cover} src={'/book-cover.jpg'} alt={'Book cover'} width={927} height={1500} />
      </div>
      <div className={styles.information}>
        <div className={styles.bookmarkPosition}><BookmarkBook isbn={isbn} /></div>
        <h1 className={styles.title}>Tout le Bleu du Ciel</h1>
        <h2 className={styles.author}>Mélissa Da Costa</h2>
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
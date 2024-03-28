import BookInfo from "../components/book-info/book-info";
import { fetchFromGoogleBooks } from "../data/3rd-party-fetchers/fetchFromGoogleBook";
import { books } from "../data/books";
import Navigate from "./navigation";
import styles from './page.module.css';

export const generateRandomNumberInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const getRandomSubArray = (arr: any[], size: number) => {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, size);
}

export default async function Home() {
  // get random sub array from array
  const googleBooks = await fetchFromGoogleBooks()
  return (
    <main className={styles.main}>
      {
        getRandomSubArray(googleBooks, 3).map((book) => (
          <BookInfo key={book.title} initialLoadBook={book} />)
      )}
      <div>
        <Navigate />
      </div>
    </main>
  );
}

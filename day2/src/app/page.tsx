import styles from "./page.module.css";
import { books } from "../data/books";
import BookInfo from "../components/book-info/book-info";
import Link from "next/link";
import { useRouter } from "next/navigation";
import RefreshBook from "../components/refresh-book/refresh-book";


export default function Home() {
  const book = books[Math.floor(Math.random() * books.length)]
  // const router = useRouter()
  // const refreshPage = () => router.refresh()
  return (
    <main className={styles.main}>
      <BookInfo book={book} />
      <div>
        <RefreshBook />
      </div>
    </main>
  );
}

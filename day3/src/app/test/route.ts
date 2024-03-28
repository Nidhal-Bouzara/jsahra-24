import { fetchFromGoogleBooks } from "../../data/3rd-party-fetchers/fetchFromGoogleBook"
import { generateRandomNumberInRange } from "../page"

export const GET = async (req: Request) => {
  const books = await fetchFromGoogleBooks()
  const book = books[generateRandomNumberInRange(0, books.length - 1)]
  return Response.json(book)
}
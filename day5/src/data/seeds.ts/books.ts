import { Book } from "@prisma/client";

async function seedBooks() {
  // the books I want to seed are: Patterns of Enterprise Application Architecture, Domain-Driven Design, Clean Code, The startup owner's manual, becoming an effective software engineering manager
  const books: Book[] = [
    {
      title: 'Patterns of Enterprise Application Architecture',
      author: 'Martin Fowler',
      coverUrl: 'https://qqzukhdjwzoezvtypwrs.supabase.co/storage/v1/object/public/book-covers/patterns.jpg',
    }
  ]
}
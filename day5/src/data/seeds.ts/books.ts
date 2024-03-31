const { PrismaClient } = require("@prisma/client");

async function seedBooks() {
  const prisma = new PrismaClient()
  // the books I want to seed are: Patterns of Enterprise Application Architecture, Domain-Driven Design, Clean Code, The startup owner's manual, becoming an effective software engineering manager
  const books = [
    {
      title: 'Patterns of Enterprise Application Architecture',
      author: 'Martin Fowler',
      coverUrl: 'https://qqzukhdjwzoezvtypwrs.supabase.co/storage/v1/object/public/book-covers/patterns.jpg',
      isbn10: '0321127420',
      isbn13: '978-0321127426'
    },
    {
      title: 'Clean Architecture',
      author: 'Robert C. Martin',
      coverUrl: 'https://qqzukhdjwzoezvtypwrs.supabase.co/storage/v1/object/public/book-covers/clean.jpg',
      isbn10: '0134494164',
      isbn13: '978-0134494166'
    },
    {
      title: 'The Startup Owner\'s Manual',
      author: 'Steve Blank, Bob Dorf',
      coverUrl: 'https://qqzukhdjwzoezvtypwrs.supabase.co/storage/v1/object/public/book-covers/startup.jpg',
      isbn10: '1119690684',
      isbn13: '9781119690689'
    },
    {
      title: 'Becoming an Effective Software Engineering Manager',
      author: 'James Stanier',
      coverUrl: 'https://qqzukhdjwzoezvtypwrs.supabase.co/storage/v1/object/public/book-covers/manager.jpg',
      isbn10: '1680507249',
      isbn13: '9781680507249' 
    }
  ]

  await prisma.book.createMany({
    data: books
  })
}

seedBooks().then(() => {
  console.log('Books seeded');
  process.exit(0);
});
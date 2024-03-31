const { PrismaClient } = require("@prisma/client");

async function seedBooks() {
  const prisma = new PrismaClient()
  // the books I want to seed are: Patterns of Enterprise Application Architecture, Domain-Driven Design, Clean Code, The startup owner's manual, becoming an effective software engineering manager
  const user = {

  }

  await prisma.user.create({ data: user })
}

seedBooks().then(() => {
  console.log('Users seeded');
  process.exit(0);
});
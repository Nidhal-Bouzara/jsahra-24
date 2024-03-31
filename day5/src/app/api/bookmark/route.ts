import 'server-only'
import prisma from '../../../data/prisma'

export const userBookmarkExists = async ( isbn10: string | number ) => {
  isbn10 = String(isbn10).trim()
  // todo remove user id hardcoding
  const bookmark = await prisma.user.findUnique({
    where: { id: 1 },
    select: { id: true, BookmarkedBook: { where: { bookIsbn: isbn10 } } }
  })
  return (bookmark?.BookmarkedBook.length ?? 0) > 0
}

export const deleteUserBookmark = async ( isbn10: string | number ) => {
  isbn10 = String(isbn10).trim()
  // todo remove user id hardcoding
  await prisma.user.update({
    where: { id: 1 },
    data: {
      BookmarkedBook: {
        delete: { userId_bookIsbn: {
          userId: 1,
          bookIsbn: isbn10
        } }
      }
    }
  })
}

export const createUserBookmark = async ( isbn10: string | number ) => {
  isbn10 = String(isbn10).trim()
  // todo remove user id hardcoding
  await prisma.user.update({
    where: { id: 1 },
    data: {
      BookmarkedBook: {
        create: {
          bookIsbn: isbn10
        }
      }
    }
  })
}

export interface BookmarkResponse {
  message: string
  bookmarked: boolean | null

}

export const POST = async (req: Request) => {
  // get the isbn10 from the request
  // todo add support for isbn 13
  // todo add validation for isbn format
  const { isbn: isbn10 } = await req.json()

  // try to delete the bookmark, if it doesn't exist, create it
  try {
    const bookmarkExists = await userBookmarkExists(isbn10)
    if (bookmarkExists) {
      await deleteUserBookmark(isbn10)
      return Response.json({ message: 'Bookmark removed', bookmarked: false })
    } else {
      await createUserBookmark(isbn10)
      return Response.json({ message: 'Bookmark created', bookmarked: true })
    }
  } catch (e) {
    console.log(e)
    return Response.json({ message: 'Error', bookmarked: null })
  }
}
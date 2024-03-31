'use server'

export async function bookmarkBook() {
  return new Promise((resolve, reject) => {
    console.log('Bookmarking book');
    setTimeout(() => {
      resolve('done');
    }, 3000);
  })
}
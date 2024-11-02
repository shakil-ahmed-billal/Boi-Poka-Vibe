import { useLoaderData, useParams } from "react-router-dom"

const BookDetails = () => {
    const id = useParams()
    const book = useLoaderData()
    const newBook = book.find(item => id.bookId == item.bookId)

    console.log(id);

    console.log(newBook);

  return (
    <div>
       
    </div>
  )
}

export default BookDetails
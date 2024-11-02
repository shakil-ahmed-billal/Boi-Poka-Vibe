import { useLoaderData } from "react-router-dom"
import Book from "./Book";
import Banner from "../Banner/Banner";

const Books = () => {

    const data = useLoaderData()

  return (
    <div>
        <Banner></Banner>
        <div className="grid grid-cols-3 gap-5 cursor-pointer">
            {
                data.map(book => <Book key={book.bookId} book={book}></Book>)
            }
        </div>
    </div>
  )
}

export default Books
import { useLoaderData, useParams } from "react-router-dom"
import { addDataDb } from "../LocalDB/LocalData"

const BookDetails = () => {
    const id = useParams()
    const book = useLoaderData()
    const newBook = book.find(item => id.bookId == item.bookId)

    const {author, bookName , image, rating ,tags ,category, bookId ,review , yearOfPublishing ,publisher, totalPages} = newBook ;

    const handleRead = (id) =>{
      /**
         * 1. understand what to store or save: => bookId
         * 2. Where to store: database
         * 3. array, list, collection: 
         * 4. check: if the book is already in the readList. 
         * 5. if not, then add the book to the list
         * 6. if yes, do not add the book 
        */

      addDataDb(id)
    }
  return (
    <div>
       <div className="grid grid-cols-2 my-5 gap-10">
        <div className="bg-gray-300 flex justify-center items-center py-10 px-20 rounded-xl">
          <img className="rounded-lg" src={image} alt="" />
        </div>
        <div className="">
          <p className="text-4xl font-bold">{bookName}</p>
          <p className="text-xl font-semibold my-2">By: {author}</p>
          <hr  className="my-5"/>
          <p className="text-lg">{category}</p>
          <hr  className="my-5"/>
          <p><span className="text-lg font-bold">Review:</span> {review}</p>
          <div className="flex gap-5 my-3">
                {
                    tags.map((tag ,idx) => <p className="bg-green-100 p-1 px-5 flex items-center text-blue-800 rounded-3xl" key={idx}>{tag}</p>)
                }
            </div>
          <hr  className="my-5"/>
          <div className=" space-y-3">
          <p>Number of Page: {totalPages}</p>
          <p>Publisher: {publisher}</p>
          <p>Year of Publisher: {yearOfPublishing}</p>
          <p>Rating: {rating}</p>
          </div>
          <div className="flex gap-10 my-5">
            <button onClick={()=>handleRead(bookId)} className="btn bg-transparent border-2 border-white px-7">Read</button>
            <button className="btn  bg-blue-500 border-none">Wishlist</button>
          </div>
        </div>
       </div>
    </div>
  )
}

export default BookDetails
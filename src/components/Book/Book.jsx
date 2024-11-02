import { Link } from "react-router-dom"

const Book = ({book}) => {
    const {author, bookName , image, rating ,tags ,category, bookId} = book ;

  return (
    <div>
        <Link to={`/bookDetails/${bookId}`}>
        <div className="border-2 p-5 rounded-3xl">
            <div className="rounded-lg flex justify-center items-center py-5 bg-gray-400">
                <img className="h-36" src={image} alt="" />
            </div>
            <div className="flex gap-5">
                {
                    tags.map((tag ,idx) => <p className=" my-3 bg-lime-200 rounded-lg" key={idx}>{tag}</p>)
                }
            </div>
            <p className="text-xl font-bold">{bookName}</p>
            <p className="mt-2">By : {author}</p>
            <hr className="my-3" />
            <div className="flex justify-between">
                <p>{category}</p>
                <p>{rating}</p>
            </div>
        </div></Link>
    </div>
  )
}

export default Book

const ReadMarks = ({book}) => {

    const {author, bookName , image, rating ,tags ,category, bookId ,review , yearOfPublishing ,publisher, totalPages} = book ;

    // console.log(book);

  return (
    <div>
        <div className="flex gap-10 border-2 p-4 rounded-3xl">
            <div className="bg-gray-300 py-10 px-16 rounded-2xl">
                <img className="h-40" src={image} alt="" />
            </div>
            <div className="">
                <p className="text-3xl font-bold">{bookName}</p>
                <p className="text-lg my-3 font-bold">By: {author}</p>
                <div className="flex gap-5 my-3 items-center">
                    <p>Tags: </p>
                {
                    tags.map((tag ,idx) => <p className=" bg-green-100 p-1 px-5 flex items-center text-blue-800 rounded-3xl" key={idx}>#{tag}</p>)
                }
                <p>{yearOfPublishing}</p>
                </div>
                <div className="flex gap-10">
                    <p>Publisher: {publisher}</p>
                    <p>TotalPages: {totalPages}</p>
                </div>
                <div className="flex gap-10 my-5 items-center">
                    <p className="bg-blue-200 p-2 px-10 flex items-center text-blue-800 rounded-3xl">{category}</p>
                    <p className="bg-yellow-100 p-2 px-10 flex items-center text-yellow-700 rounded-3xl">{rating}</p>
                    <button className="btn bg-green-400 rounded-3xl text-white">View More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReadMarks
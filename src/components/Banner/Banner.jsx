import image from '../../assets/books.jpg'

const Banner = () => {
  return (
    <div>
        <div className="flex mx-auto justify-center gap-20 items-center bg-gray-200  rounded-lg  py-40 mb-20">
            <div className="">
            <p className="text-5xl mb-5 text-black  font-bold">Books to freshen up <br /> your bookshelf</p>
            <button className="btn bg-green-500 text-white">View The List</button>
            </div>
            <div className="">
                <img className='w-72' src={image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Banner
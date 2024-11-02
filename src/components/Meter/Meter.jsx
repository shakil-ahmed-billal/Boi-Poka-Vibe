import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreData } from "../LocalDB/LocalData";
import Test from "./Test";

const Meter = () => {

    const [readList, setReadList] = useState([])
    const allBook = useLoaderData();

    console.log(readList);


    useEffect(() => {
        const storeRead = getStoreData()
        const filterBook = allBook.filter(book => storeRead.includes(book.bookId))

        setReadList(filterBook)
    }, [allBook])

  return (
    <div>
        <Test BookData={readList}></Test>
    </div>
  )
}

export default Meter
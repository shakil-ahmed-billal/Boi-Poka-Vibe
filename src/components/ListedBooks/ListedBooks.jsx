import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreData } from "../LocalDB/LocalData";
import ReadMarks from "./ReadMarks";

const ListedBooks = () => {

    const [readList, setReadList] = useState([])
    const allBook = useLoaderData();



    useEffect(() => {
        const storeRead = getStoreData()
        const filterBook = allBook.filter(book => storeRead.includes(book.bookId))

        setReadList(filterBook)
    }, [allBook])

    return (
        <div>
            <div role="tablist" className="tabs tabs-lifted">
                <input 
                type="radio" 
                name="my_tabs_2" 
                role="tab" 
                className="tab" 
                aria-label="Read Book" defaultChecked/>
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 space-y-6">
                    {
                        readList.map(read => <ReadMarks key={read.bookId} book={read}></ReadMarks>)
                    }
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="Wishlist Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    Tab content 2
                </div>
            </div>
        </div>
    )
}

export default ListedBooks
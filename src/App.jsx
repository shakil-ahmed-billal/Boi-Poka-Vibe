import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home/Home"
import Books from "./components/Book/Books"
import BookDetails from "./components/BookDetails/BookDetails"
import ListedBooks from "./components/ListedBooks/ListedBooks"
import Meter from "./components/Meter/Meter"


function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Home></Home>,
      children :[
        {
          path: '/',
          loader: ()=>fetch('/booksData.json'),
          element:<Books></Books>
        },
        {
          path: '/bookDetails/:bookId',
          loader: ()=>fetch('/booksData.json'),
          element: <BookDetails></BookDetails>
        },
        {
          path: '/listedBooks',
          loader: ()=> fetch('/booksData.json'),
          element: <ListedBooks></ListedBooks>
        },
        {
          path: '/dashboard',
          loader: ()=> fetch('/booksData.json'),
          element: <Meter></Meter>
        }
      ]
    }
  ])

  return <RouterProvider router={router}></RouterProvider>
}

export default App

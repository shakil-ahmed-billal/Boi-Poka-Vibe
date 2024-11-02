import { Outlet } from "react-router-dom"
import Header from "../Header/Header"

const Home = () => {
  return (
    <div>
        <Header></Header>
        <div className="w-10/12 mx-auto">
        <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Home
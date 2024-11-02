import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center w-10/12 mx-auto py-5">
        <p>Book Vibe</p>
        <ul className="flex gap-5">
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/'}>Listed Books</NavLink>
            <NavLink to={'/'}>Pages to Read</NavLink>
        </ul>
        <div className="flex gap-5">
            <button className="btn">Sing Up</button>
            <button className="btn">Sing in</button>
        </div>
    </div>
    </div>
  )
}

export default Header
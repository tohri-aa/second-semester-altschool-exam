import SearchBar from "./searchBar"
import useFetch from "./useFetch"
import { Link } from 'react-router-dom'

const Navbar = ({inputValue, setInputValue}) => {
    const {data: user, isPending, error} = useFetch("https://api.github.com/users/tohri-aa")
    return(
        <div className="intro">
            {error && "Tohri-aa"}
            {isPending && "Loading Victoria"}
            {user && 
            <div>
                <nav className="navbar">
                    <h3 className="nav-logo">{user.login}</h3>
                    <SearchBar inputValue={inputValue} setInputValue={setInputValue}/>
                    <ul className="navbar-btn">
                        <Link className="link nav-link-1" to={"/"}>All Repositories</Link>
                        <Link className="link nav-link-2" to={"https://github.com/new"}>Create</Link>
                    </ul>
                </nav>
            </div>}
        </div>
    )
}

export default Navbar
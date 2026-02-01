import { Link, Outlet } from "react-router"

export default function FrontEndLayout(){
    return (
        <>
            <header>
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/products'>Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/cart'>Cart</Link>
                    </li>
                </ul>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer></footer>
        </>
    )
}

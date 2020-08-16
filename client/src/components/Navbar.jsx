import React, {useContext} from "react";
import {NavLink,useHistory} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

const Navbar = () =>{
    const history = useHistory();
    const auth = useContext(AuthContext);
    const logoutHendler = (event) => {
        event.preventDefault();
        auth.logout()
        history.push("/")
    };

    return(
        <nav>
            <div className="nav-wrapper grey">
                <a className="brand-logo">FullStack</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                   {/* <li><NavLink>Sass</NavLink></li>*/}

                    <li><NavLink to = "/create">Создать</NavLink></li>
                    <li><NavLink to = "/links">Ссылки</NavLink></li>
                    <li onClick={logoutHendler}><a href="/">Выход</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
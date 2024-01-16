import { Link } from "react-router-dom"
import "../styles/Header.scss"
import logo from '../img/logo_test_1.png'
import PathConstants from "../routes/pathConstants";

export default function Header() {
    return (
        <div class='header'>
        <span>
        <Link to={PathConstants.MAIN}><img class="logo" src={logo} alt="logo" /></Link>
        </span>
        <span class='menu'>
            <Link to={PathConstants.MAIN}><button class='main-b'>Головна</button></Link>
            <Link to={PathConstants.CABINET}><button class='cabinet-b'>Кабінет користувача</button></Link>
            <Link to={PathConstants.AUTH}><button class='exit-b'>Вийти</button></Link>
            <select class='select' name="lang" id="lang">
                <option value="uah">Українська</option>
                <option value="eng">English</option>
                <option value="deu">Deutshe</option>
                <option value="pol">Poland</option>
            </select>
        </span>
      </div>
    );
}

import { Link } from "react-router-dom"
import "../styles/Auth.scss"
import PathConstants from "../routes/pathConstants";

export default function Auth() {
    return (
        <div class='Auth'>
        <p class='header'>Авторизація</p>
        <p class='logpass'>
            <p class='login'>Ім'я користувача</p>
            <input class='text'></input>
            <p class='pass'>Пароль</p>
            <input class='password'></input>
        </p>
        <Link to={PathConstants.MAIN}><button>Увійти</button></Link>
    </div>
    )
}

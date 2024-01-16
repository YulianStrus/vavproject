import "../styles/Cabinet.scss"

export default function Cabinet() {
    return (
        <div class='cabinet'>
        <p class='head'>Деталі користувача</p>
        <p class='form'>
            <p>Статус:</p>
            <p>Спеціальність:</p>
            <p>Тип договору:</p>
            <p>Телефон:</p>
            <p>Фірма:</p>
            <p>Агенція:</p>
            <p>Персональний менеджер по роботі з співробітником:</p>

                <input type="file" id="actual-btn" hidden/>
                <button><label for="actual-btn">Звіт</label></button>
                <li id="file-chosen">No file chosen</li>
           
        </p>
    </div>
    )
}

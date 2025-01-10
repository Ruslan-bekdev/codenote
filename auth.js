import bcrypt from "bcryptjs";

const storedHash = "$2a$10$GgAKoXNXIq0oytspbgYw9ObOY70sFISK3UR0FYAb8C59yDIBskeVa";

function authenticateUser() {
    const userPassword = prompt("Введите пароль для доступа:");

    if (!userPassword) {
        document.body.innerHTML = "<h1>Доступ запрещен</h1>";
        return;
    }

    const isMatch = bcrypt.compareSync(userPassword, storedHash);

    if (isMatch) {
        alert("Пароль верный! Добро пожаловать.");
    } else {
        alert("Неверный пароль! Доступ запрещен.");
        document.body.innerHTML = "<h1>Доступ запрещен</h1>";
    }
}

export default authenticateUser;
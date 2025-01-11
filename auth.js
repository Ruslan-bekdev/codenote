import bcrypt from "bcryptjs";

const storedHash = "$2a$10$GgAKoXNXIq0oytspbgYw9ObOY70sFISK3UR0FYAb8C59yDIBskeVa";

function authenticateUser() {
    const userPassword = prompt("Введите пароль для доступа:");
    const passwordErrorHandler = () => document.body.innerHTML = "<h1>Доступ запрещен</h1>";

    if (!userPassword){
        passwordErrorHandler();
        return;
    }

    const isMatch = bcrypt.compareSync(userPassword, storedHash);


    isMatch
        ?alert("Пароль верный! Добро пожаловать.")
        :passwordErrorHandler();
}

export default authenticateUser;
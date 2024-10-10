import React from 'react';
import './login.css'; // Certifique-se de ter um CSS específico para o Login, se necessário.

function Login() {
    function handleLogin(event) {
        event.preventDefault();
        // Aqui você pode adicionar a lógica de autenticação
        alert('Login efetuado com sucesso!');
    }

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="senha">Senha</label>
                <input type="password" id="senha" name="senha" required />

                <button type="submit">Entrar</button>
            </form>

            <div className="register-link">
                <p>Não tem uma conta? <a href="/registre">Crie uma aqui</a></p>
            </div>
        </div>
    );
}

export default Login;

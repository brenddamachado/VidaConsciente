import React, { useState } from 'react'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import '../RegisterForm/registre.css'; 
import NavBarOut from "../../components/NavBarOut/NavBarOut";

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); 

    const handleLogin = (event) => {
        event.preventDefault();

        axios.post('http://localhost:3000/login', {
            email: email,
            password: senha
        })
        .then((response) => {
            if (response.status === 200) {
                const { name, email: userEmail } = response.data.user;

                localStorage.setItem('userName', name);
                localStorage.setItem('userEmail', userEmail);  

                console.log('Usuário logado:', userEmail); 

                navigate('/dashboard');
            } else {
                setErrorMessage('Erro ao logar. Tente novamente.');
            }
        })
        .catch((error) => {
            console.error('Erro de login:', error);
            setErrorMessage('E-mail ou senha incorretos.');
        });
    };

    return (
        <div className='reg-container'>
            <NavBarOut />
            <section className="forms-container">
                <form onSubmit={handleLogin}>
                    <h2>Login</h2>
                    <div className="form-container">
                        <div className="form-column">
                            <div className="form-row">
                                <label htmlFor="e-mail">E-mail</label>
                                <input 
                                    type="email" 
                                    id="e-mail" 
                                    name="e-mail" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className="form-row">
                                <label htmlFor="senha">Senha</label>
                                <input 
                                    type="password" 
                                    id="senha" 
                                    name="senha" 
                                    value={senha} 
                                    onChange={(e) => setSenha(e.target.value)} 
                                    required 
                                />
                            </div>
                        </div>
                    </div>
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    <div className="form-btn">
                        <button type="submit">Entrar</button>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Login;

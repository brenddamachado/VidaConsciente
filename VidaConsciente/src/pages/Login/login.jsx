import React, { useState } from 'react'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { 
    RegContainer, 
    LoginContainer , 
    Form, 
    FormRow, 
    FormBtn, 
    Button 
} from '../RegisterForm/registre.style.js'; 
import NavBarOut from '../../components/NavBarOut/navbarout.jsx';

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
               
                const { id, name, email: userEmail, token } = response.data.user;

                
                localStorage.setItem('userId', id); 
                localStorage.setItem('userName', name);
                localStorage.setItem('userEmail', userEmail);  
                localStorage.setItem('token', token); 

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
        <RegContainer>
          <NavBarOut currentPage="login" />
            <LoginContainer >
                <Form onSubmit={handleLogin}>
                    <h2>Login</h2>
                    <div className="form-container">
                        <div className="form-column">
                            <FormRow>
                                <label htmlFor="e-mail">E-mail</label>
                                <input 
                                    type="email" 
                                    id="e-mail" 
                                    name="e-mail" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required 
                                />
                            </FormRow>
                            <FormRow>
                                <label htmlFor="senha">Senha</label>
                                <input 
                                    type="password" 
                                    id="senha" 
                                    name="senha" 
                                    value={senha} 
                                    onChange={(e) => setSenha(e.target.value)} 
                                    required 
                                />
                            </FormRow>
                        </div>
                    </div>
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    <FormBtn>
                        <Button type="submit">Entrar</Button>
                    </FormBtn>
                </Form>
            </LoginContainer >
        </RegContainer>
    );
}

export default Login;

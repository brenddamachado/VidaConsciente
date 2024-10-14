import React, { useState } from 'react'; 
import axios from 'axios';
import NavBarOut from '../../components/NavBarOut/navbarout.jsx';
import { useNavigate } from 'react-router-dom';
import { 
    RegContainer, 
    FormsContainer, 
    Form,   
    FormRow, 
    FormDuoRow, 
    FormBtn, 
    Button 
} from './registre.style.js';

function Registre() {
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    
    const [cep, setCep] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [endereco, setEndereco] = useState('');
    
    const [telefone, setTelefone] = useState('');
    const [genero, setGenero] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    
    const [erroSenha, setErroSenha] = useState(''); 
    const [mensagem, setMensagem] = useState(''); 
    
    function limparCep() {
        setEndereco('');
        setCidade('');
        setEstado('');
    }
    
    function preencherCampos(dados) {
        if (!dados.erro) {
            setEndereco(dados.logradouro);
            setCidade(dados.localidade);
            setEstado(dados.uf);
        } else {
            limparCep();
            setMensagem("CEP não encontrado.");
        }
    }
    
    function buscarCep(event) {
        const cepValue = event.target.value.replace(/\D/g, '');
        setCep(cepValue);
    
        if (cepValue.length === 8) {
            setEndereco('...');
            setCidade('...');
            setEstado('...');
            
            fetch(`https://viacep.com.br/ws/${cepValue}/json/`)
                .then(response => response.json())
                .then(data => preencherCampos(data))
                .catch(() => limparCep());
        } else {
            limparCep();
        }
    }
    
    function handleSubmit(event) {
        event.preventDefault();
    
        if (senha !== confirmarSenha) {
            setErroSenha('As senhas não são iguais');
            return; 
        }
    
        setErroSenha(''); 
    
        axios.post('http://localhost:3000/registerUser', { 
            name: nome, 
            email: email,
            password: senha,
            birthDate: dataNascimento,
            gender: genero,
            phone: telefone,
            cep: cep,
            city: cidade,
            state: estado,
            address: endereco
        })
        .then((response) => {
            if (response.status === 201) {
                setMensagem('Usuário cadastrado com sucesso!');
                navigate('/login'); 
            } else {
                setMensagem('Algo deu errado ao cadastrar o usuário.');
            }  
              })
        .catch(() => {
            setMensagem('Erro ao cadastrar o usuário. Verifique os dados e tente novamente.');
        });
    }
    
    return (
        <RegContainer>
             <NavBarOut currentPage="register" />

            <FormsContainer>
                <Form onSubmit={handleSubmit}>
                    <h2>Cadastre-se</h2>
                  
                    {erroSenha && <p style={{ color: 'red' }}>{erroSenha}</p>}
                    {mensagem && <p style={{ color: mensagem.includes('sucesso') ? 'green' : 'red' }}>{mensagem}</p>}

                    <div className="form-container">
                        <div className="form-column">
                            <FormRow>
                                <label htmlFor="nome">Nome Completo</label>
                                <input type="text" id="nome" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
                            </FormRow>
                            <FormRow>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </FormRow>
                            <FormDuoRow>
                                <FormRow>
                                    <label htmlFor="dataNascimento">Data de Nascimento</label>
                                    <input type="date" id="dataNascimento" name="dataNascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} required />
                                </FormRow>
                                <FormRow>
                                    <label htmlFor="genero">Gênero</label>
                                    <select id="genero" name="genero" value={genero} onChange={(e) => setGenero(e.target.value)} required>
                                        <option value="selecionar">Selecionar</option>
                                        <option value="masculino">Masculino</option>
                                        <option value="feminino">Feminino</option>
                                        <option value="transgenero">Transgênero</option>
                                        <option value="nao-binario">Não-binário</option>
                                        <option value="outro">Outro</option>
                                        <option value="prefiro-nao-dizer">Prefiro não dizer</option>
                                    </select>
                                </FormRow>
                                <FormRow>
                                    <label htmlFor="telefone">Telefone</label>
                                    <input type="tel" id="telefone" name="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
                                </FormRow>
                            </FormDuoRow>
                        </div>
                        <div className="form-column">
                            <FormDuoRow>
                                <FormRow>
                                    <label htmlFor="cep">CEP</label>
                                    <input type="text" id="cep" name="cep" value={cep} onChange={buscarCep} required />
                                </FormRow>
                                <FormRow>
                                    <label htmlFor="cidade">Cidade</label>
                                    <input type="text" id="cidade" name="cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} required />
                                </FormRow>
                                <FormRow>
                                    <label htmlFor="estado">Estado</label>
                                    <input type="text" id="estado" name="estado" value={estado} onChange={(e) => setEstado(e.target.value)} required />
                                </FormRow>
                            </FormDuoRow>
                            <FormRow>
                                <label htmlFor="endereco">Endereço</label>
                                <input type="text" id="endereco" name="endereco" value={endereco} onChange={(e) => setEndereco(e.target.value)} required />
                            </FormRow>
                       <FormDuoRow>
                            <FormRow>
                                <label htmlFor="senha">Senha</label>
                                <input type="password" id="senha" name="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                            </FormRow>
                            <FormRow>
                                <label htmlFor="confirmarSenha">Confirmação de Senha</label>
                                <input type="password" id="confirmarSenha" name="confirmarSenha" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} required />
                            </FormRow>
                        </FormDuoRow>
                        </div>
                    </div>
                    <FormBtn><Button type="submit">Cadastrar</Button></FormBtn>
                </Form>
            </FormsContainer>
        </RegContainer>
    );
}

export default Registre;

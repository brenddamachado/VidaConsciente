import React from 'react';
import './registre.css';
import NavBar from '../../components/NavBar/NavBar';

function Registre() {

    function limparCep() {
        document.getElementById('endereco').value = '';
        document.getElementById('cidade').value = '';
        document.getElementById('estado').value = '';
        document.getElementById('endereco').value = '';
        document.getElementById('cidade').value = '';
        document.getElementById('estado').value = '';
    }


    function preencherCampos(dados) {
        if (!("erro" in dados)) {
            document.getElementById('endereco').value = dados.logradouro;
            document.getElementById('cidade').value = dados.localidade;
            document.getElementById('estado').value = dados.uf;
            document.getElementById('endereco').value = dados.logradouro;
            document.getElementById('cidade').value = dados.localidade;
            document.getElementById('estado').value = dados.uf;
        } else {
            limparCep();
            alert("CEP não encontrado.");
            limparCep();
            alert("CEP não encontrado.");
        }
    }


    function buscarCep(event) {
        const cep = event.target.value.replace(/\D/g, '');

        if (cep !== "" && /^[0-9]{8}$/.test(cep)) {
            document.getElementById('endereco').value = "...";
            document.getElementById('cidade').value = "...";
            document.getElementById('estado').value = "...";
            document.getElementById('endereco').value = "...";
            document.getElementById('cidade').value = "...";
            document.getElementById('estado').value = "...";

            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => response.json())
                .then(data => preencherCampos(data))
                .catch(e => limparCep());
        } else {
            limparCep();
            limparCep();
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        alert("Cadastro realizado com sucesso!");
    }

    function handleSubmit(event) {
        event.preventDefault();
        alert("Cadastro realizado com sucesso!");
    }

    return (
        <div className='reg-container'>

            <NavBar />

            <section className="forms-container">

                <form onSubmit={handleSubmit}>
                    <h2>Cadastre-se</h2>
                    
                    <div className="form-container">
                        <div className="form-column">
                            <div className="form-row">
                                <label htmlFor="nome">Nome Completo</label>
                                <input type="text" id="nome" name="nome" required />
                            </div>
                            <div className="form-row">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-duo-row">
                                <div className="form-row">
                                    <label htmlFor="dataNascimento">Data de Nascimento</label>
                                    <input type="date" id="dataNascimento" name="dataNascimento" required />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="genero">Gênero</label>
                                    <select id="genero" name="genero" required>
                                        <option value="selecionar">Selecionar</option>
                                        <option value="masculino">Masculino</option>
                                        <option value="feminino">Feminino</option>
                                        <option value="transgenero">Transgênero</option>
                                        <option value="nao-binario">Não-binário</option>
                                        <option value="outro">Outro</option>
                                        <option value="prefiro-nao-dizer">Prefiro não dizer</option>
                                    </select>
                                </div>
                                <div className="form-row">
                                    <label htmlFor="telefone">Telefone</label>
                                    <input type="tel" id="telefone" name="telefone" required />
                                </div>
                            </div>
                        </div>
                        <div className="form-column">
                            <div className="form-duo-row">
                                <div className="form-row">
                                    <label htmlFor="cep">CEP</label>
                                    <input type="text" id="cep" name="cep" onBlur={buscarCep} required />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="cidade">Cidade</label>
                                    <input type="text" id="cidade" name="cidade" required />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="estado">Estado</label>
                                    <input type="text" id="estado" name="estado" required />
                                </div>
                            </div>
                            <div className="form-row">
                                <label htmlFor="endereco">Endereço</label>
                                <input type="text" id="endereco" name="endereco" required />
                            </div>

                            <div className="form-row">
                                <label htmlFor="senha">Senha</label>
                                <input type="password" id="senha" name="senha" required />
                            </div>
                            <div className="form-row">
                                <label htmlFor="confirmarSenha">Confirmação de Senha</label>
                                <input type="password" id="confirmarSenha" name="confirmarSenha" required />
                            </div>
                        </div>
                    </div>
                    <div className="form-btn"><button type="submit">Cadastrar</button></div>
                </form>
            </section>
        </div>
    );
}

export default Registre;

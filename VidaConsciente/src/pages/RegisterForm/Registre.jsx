import React from 'react'
import './registre.css'

function Registre() {


    function limparCep() {
        document.getElementById('endereco').value = ''
        document.getElementById('cidade').value = ''
        document.getElementById('estado').value = ''
    }

   
    function preencherCampos(dados) {
        if (!("erro" in dados)) {
            document.getElementById('endereco').value = dados.logradouro
            document.getElementById('cidade').value = dados.localidade
            document.getElementById('estado').value = dados.uf
        } else {
            limparCep() 
            alert("CEP não encontrado.")
        }
    }

    
    function buscarCep(event) {
        const cep = event.target.value.replace(/\D/g, ''); 

        if (cep !== "" && /^[0-9]{8}$/.test(cep)) {
            document.getElementById('endereco').value = "..."
            document.getElementById('cidade').value = "..."
            document.getElementById('estado').value = "..."

            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => response.json())
                .then(data => preencherCampos(data))
                .catch(e => limparCep());
        } else {
            limparCep(); 
        }
    }

    return (
        <>
            <label htmlFor="nome">Nome Completo</label>
            <input type="text" id="nome" name="nome" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="dataNascimento">Data de Nascimento</label>
            <input type="date" id="dataNascimento" name="dataNascimento" />

            <label htmlFor="genero">Gênero</label>
            <select id="genero" name="genero">
                <option value="selecionar">Selecionar</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="transgenero">Transgênero</option>
                <option value="nao-binario">Não-binário</option>
                <option value="outro">Outro</option>
                <option value="prefiro-nao-dizer">Prefiro não dizer</option>
            </select>

            <label htmlFor="telefone">Telefone</label>
            <input type="tel" id="telefone" name="telefone" />

            <label htmlFor="cep">CEP</label>
            <input type="text" id="cep" name="cep" onBlur={buscarCep} />

            <label htmlFor="endereco">Endereço</label>
            <input type="text" id="endereco" name="endereco" />

            <label htmlFor="cidade">Cidade</label>
            <input type="text" id="cidade" name="cidade" />

            <label htmlFor="estado">Estado</label>
            <input type="text" id="estado" name="estado" />

            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" name="senha" />

            <label htmlFor="confirmarSenha">Confirmação de Senha</label>
            <input type="password" id="confirmarSenha" name="confirmarSenha" />
        </>
    )
}

export default Registre;

import styled from 'styled-components';

export const RegContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    height: 100vh;
    align-items: center;
    padding-bottom: 3rem;
    background-color: #f6f6f6;
`;

export const FormsContainer = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;
    justify-content: center;
    align-items: flex-start;
    border-radius: 35px;
    background-color: #e1e1e1;
    border: none;
    padding: 0.5rem 4rem;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
`;

export const FormBtn = styled.div`
   width: 100%;
`;
export const LoginContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 50%;
    border-radius: 20px;
    margin-top: 100px;
    background-color: #e1e1e1;
    padding: 1rem 3rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
export const Button = styled.button`
    border-radius: 5px;
    border: none;
    cursor: pointer;
      width: 100px;
    height: 40px;
    transition: .2s all ease-in;
    border: .5px solid #cccccc4d;
`;

export const FormRow = styled.div`
    padding: 5px 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-direction: column;

    label {
        margin-bottom: 5px;
    }

    input, select {
        width: 100%;  /* Garante que o input ocupe todo o espaço disponível */
        padding: 3px;
        border-radius: 5px;
        border: 1px solid #ccc;
        box-sizing: border-box; /* Garante que o padding não afete a largura total */
        font-size: 1rem;
    }
`;

export const FormDuoRow = styled.div`
    display: flex;
    gap: 4rem;
    width: 100%;

    & > div {
        flex: 1; /* Garante que as colunas dentro de um FormDuoRow tenham tamanhos iguais */
    }
`;

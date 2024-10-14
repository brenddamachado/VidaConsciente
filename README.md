# Vida Consciente
## 📋 Sobre o projeto
Este projeto foi desenvolvido no Módulo 5 do programa [Programadores do Amanhã](https://programadoresdoamanha.org/), pela Squad 1, composta por Alexsandro Filho, Ana Carolina Neves, Brenda Machado, Elzo Íthallo, Hewel Vieira, Jamyle Elen, Joicy Kelly e Rodrigo Átila. O projeto aplica os conhecimentos adquiridos no Módulo 4 sobre APIs REST, com o objetivo de fornecer uma plataforma educativa e acessível que promova a saúde e o conhecimento sobre infecções sexualmente transmissíveis (DSTs/ISTs).

Este repositório contém o front-end do site Vida Consciente, responsável por gerenciar telas intuitivas e dinâmicas, onde o usuário pode se cadastrar, logar e terá gráficos, cards e mapa dinâmico. O Back-end do projeto, desenvolvido paralelamente, pode ser acessado no seguinte repositório: [Vida Consciente - Back-end](https://github.com/brenddamachado/VidaConsciente_Back).

## 🚫 Problematização
As infecções sexualmente transmissíveis continuam sendo um desafio de saúde pública, em grande parte devido à falta de conhecimento e conscientização da população. Muitas pessoas não têm acesso facilitado a informações confiáveis sobre prevenção e cuidados, o que contribui não apenas para a disseminação dessas doenças, mas também para a propagação de informações falsas e mitos sobre o tema. Essa desinformação pode gerar comportamentos de risco, atrasar diagnósticos e prejudicar o tratamento adequado.

- **O que é DST/ISTs?**  
  DSTs (Doenças Sexualmente Transmissíveis) ou ISTs (Infecções Sexualmente Transmissíveis) são doenças ou infecções que são transmitidas principalmente por meio do contato sexual sem proteção, seja vaginal, anal ou oral. Elas podem ser causadas por bactérias, vírus, fungos ou parasitas. O termo "IST" é mais recente e vem sendo usado com mais frequência, pois destaca que uma pessoa pode estar infectada e transmitir a doença mesmo sem apresentar sintomas aparentes.

  Entre as DSTs/ISTs mais comuns estão: HIV/AIDS, sífilis, gonorreia, clamídia, herpes genital, HPV e tricomoníase. A prevenção dessas doenças é feita principalmente com o uso de preservativos e pela educação sobre práticas sexuais seguras.

## 💡 Solução
Vida Consciente propõe uma solução educativa e acessível, centralizando informações sobre DSTs/ISTs de forma prática e clara. O site oferece dados sobre sintomas, tratamentos, prevenção, tipos e casos de DSTs/ISTs, entre outras informações que podem ajudar na conscientização e promoção da saúde.

## 🚀 Tecnologias Utilizadas
- **React**: Utilizado para construção da interface de usuário, garantindo uma experiência dinâmica e responsiva.
- **Express.js**: Framework back-end utilizado para construir a API REST.
- **Node.js**: Ambiente de execução para o back-end, permitindo a criação de uma API eficiente.
- **Leaflet**: Biblioteca de mapas interativos utilizada para exibir os locais de testagem de DSTs.
- **Chart.js**: Utilizado para criar gráficos que exibem a evolução dos casos de DSTs ao longo do tempo.
- **Axios**: Biblioteca de requisições HTTP usada para comunicação entre o front-end e o back-end.
- **Styled Components**: Para a estilização de componentes com CSS-in-JS, permitindo uma interface customizável e moderna.


## 🚫 Problema com o Deploy
Infelizmente, não foi possível realizar o deploy da aplicação nesta versão. Portanto, para rodar o projeto localmente, é necessário baixar e executar **tanto o repositório do front-end quanto o do back-end**.

### ▶ Como rodar o projeto (front-end e back-end)
Para clonar e rodar este projeto, siga os passos abaixo:

1. **Clone os repositórios (front e back-end)**:
   - Front-end:
     ```bash
     git clone https://github.com/brenddamachado/VidaConsciente
     ```
   - Back-end:
     ```bash
     git clone https://github.com/brenddamachado/VidaConsciente_Back
     ```

2. **Instale as dependências**:
   - Acesse as pastas do projeto e instale as dependências tanto no front-end quanto no back-end:
     ```bash
     cd VidaConsciente
     npm install
     ```
     ```bash
     cd ../VidaConsciente_Back
     npm install
     ```

3. **Execute o front-end**:
   - Após instalar as dependências, execute o comando abaixo para rodar o front-end:
     ```bash
     npm run dev
     ```

4. **Execute o back-end**:
   - Em outra aba do terminal, acesse a pasta do back-end e rode o servidor:
     ```bash
     npm run dev
     ```

5. **Abra o navegador**:
   - Acesse o projeto rodando em `http://localhost:3000` para visualizar o front-end.

## 📅 Conclusão
O projeto Vida Consciente foi desenvolvido com o objetivo de oferecer uma plataforma educativa e acessível, promovendo a conscientização e o autocuidado em relação às infecções sexualmente transmissíveis (DSTs/ISTs). Através das funcionalidades CRUD implementadas nas quatro APIs principais, os usuários podem gerenciar informações pessoais, acessar dados sobre DSTs, localizar centros de testagem e tratamento, além de visualizar casos registrados. Esse projeto tem um papel fundamental ao tornar informações confiáveis mais acessíveis, contribuindo para a educação e a prevenção dessas doenças.

Uma melhoria significativa para o futuro desenvolvimento do projeto seria a implementação de um banco de dados real para armazenar as informações, substituindo os dados atualmente mocados. Isso permitiria maior escalabilidade, segurança e flexibilidade na gestão dos dados, além de proporcionar uma experiência mais robusta para os usuários da plataforma.

## 💻 Colaboradores
- [Brenda Machado](https://github.com/brenddamachado)
- [Jamyle Elen](https://github.com/Jamyle-Elen)
- [Ana Neves ](https://github.com/Ana-Neves)


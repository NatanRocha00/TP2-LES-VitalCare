# Trabalho 2 – Laboratório de Engenharia de Software I - CEFET-MG
Neste projeto prático, nosso grupo desenvolveu uma aplicação Web para uma Clínica Médica.

## Integrantes
**Gabriel Andrade Quezada / 20183021240** 

**Giovanni Suriani Ferreira / 20213010413**

**Natan Rodrigues Rocha / 20203013242**

**Samuel Viana Santana / 20203019863** 

# Vital Care

Este é um projeto que implementa um sistema de gerenciamento para uma clínica médica. Ele utiliza o pgAdmin4 para o banco de dados e hospeda o banco de dados na nuvem usando o Aiven console. O backend e o frontend são separados, e a execução do programa requer a instalação das dependências especificadas nos arquivos `package.json` do backend e do frontend.

---

## Instalação do Node.js

### Windows

1. Acesse o site oficial do Node.js em [nodejs.org](https://nodejs.org/).
2. Baixe a versão LTS (Long-Term Support) recomendada para a maioria dos usuários.
3. Execute o instalador baixado e siga as instruções do assistente de instalação.
4. Após a instalação, abra o terminal e execute o comando `node -v` para verificar a instalação.

### Linux

1. Utilize o gerenciador de pacotes de sua distribuição. Por exemplo, para o Ubuntu, execute:
   ```bash
   sudo apt-get update
   sudo apt-get install nodejs

## Instalação do PostegreSQL

### Windows

1. Acesse o site oficial do PostgreSQL em postgresql.org/download/windows.
2. Baixe o instalador apropriado para o seu sistema operacional.
3. Execute o instalador e siga as instruções. Durante a instalação, anote a senha do superusuário.
4. Após a instalação, abra o PGAdmin (incluído na instalação) para gerenciar o PostgreSQL.

### Linux

1. Utilize o gerenciador de pacotes de sua distribuição. Por exemplo, para o Ubuntu, execute:
   ```bash
   sudo apt-get update
   sudo apt-get install postgresql postgresql-contrib

2. Inicie o PostgreSQL:
   ```bash
   sudo service postgresql start

3. Anote a senha do superusuário configurada durante a instalação.

### Verificação da Instalação

1. Abra um novo terminal e execute os comandos:
   
   `node -v` para verificar a versão do Node.js.
   
   `npm -v` para verificar a versão do npm (gerenciador de pacotes do Node.js).
   
   `psql --version` para verificar a versão do PostgreSQL.
   
---

## Configurações

### Configuração do Banco de Dados

1. Acesse o [Aiven console](https://console.aiven.io/) e crie uma instância de banco de dados [PostgreSQL](https://www.postgresql.org/download/).
2. Anote as credenciais de conexão (host, usuário, senha, etc.).
3. Abra o pgAdmin4 e conecte-se ao banco de dados usando as credenciais fornecidas.

### Configuração do Backend

1. Navegue até o diretório `backend` usando o terminal.
2. Execute o seguinte comando para instalar as dependências:

   ```bash
   npm install

### Configuração do Frontend

1. Navegue até o diretório `frontend` usando o terminal.
2. Execute o seguinte comando para instalar as dependências:

   ```bash
   npm install
   
---

## Execução do Backend

1. Navegue até o diretório `backend` usando o terminal.
2. Execute o seguinte comando para executar o servidor:

   ```bash
   npm run start

## Execução do Frontend

1. Navegue até o diretório `Frontend` usando o terminal.
2. Execute o seguinte comando para executar o servidor:

   ```bash
   npm run start

---

## Conclusão 

O projeto "Vital Care" apresenta uma abordagem completa para o desenvolvimento de uma aplicação Web para uma clínica médica, incluindo instruções detalhadas desde a instalação das ferramentas necessárias até a execução do sistema. A escolha de tecnologias modernas, a separação clara entre o backend e frontend, e a hospedagem na nuvem demonstram um comprometimento com as melhores práticas de desenvolvimento.

Além disso, a documentação fornece uma base sólida para a continuidade do desenvolvimento, manutenção e escalabilidade do sistema. No geral, o projeto reflete uma compreensão sólida dos conceitos de Engenharia de Software e demonstra a capacidade do grupo em aplicar esses conhecimentos de forma prática.

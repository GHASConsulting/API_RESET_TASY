# Guia de Instalação da API

### Passos antes de instalar a API

1. **Baixar o Oracle Instant Client:**
   - Faça o download do pacote `instantclient_21_15` no link oficial da Oracle [aqui](https://download.oracle.com/otn_software/nt/instantclient/2115000/instantclient-basic-windows.x64-21.15.0.0.0dbru.zip).
   
2. **Configurar variável de ambiente:**
   - Capture o caminho de instalação do **Oracle Instant Client**.
   - Adicione o caminho à variável de ambiente `LIBRARY_ORACLE`.

   **Exemplo no Windows:**
   - Vá em "Painel de Controle" -> "Sistema" -> "Configurações Avançadas do Sistema" -> "Variáveis de Ambiente".
   - Crie uma nova variável de usuário ou sistema chamada `LIBRARY_ORACLE` e coloque o caminho do Oracle Instant Client.

   **Exemplo no Linux:**
   - No terminal, adicione a variável ao arquivo `.bashrc` ou `.bash_profile`:
     ```bash
     export LIBRARY_ORACLE=/caminho/para/oracle/instantclient_21_13
     ```

---

### Requisitos

- **Node.js**: Versão 20.10.0
  - Certifique-se de que você tenha o Node.js na versão 20.10.0 instalada. Para verificar, execute:
    ```bash
    node -v
    ```

---

### Instalação

1. **Clone o repositório da API:**
   - Clone o projeto para o seu ambiente local:
     ```bash
     git clone https://github.com/gcamillozzi/API_RESET_TASY.git
     cd api
     ```

2. **Instale as dependências:**
   - Execute o seguinte comando para instalar as dependências da API:
     ```bash
     npm install
     ```

3. **Configurar o arquivo `.env`:**
   - Crie um arquivo `.env` na raiz do projeto com as seguintes informações:
     ```bash
     DATABASE_URL=<sua_url_de_conexao_com_o_banco>
     BASE_USER=<seu_usuario_do_banco>
     BASE_PASSWORD=<sua_senha_do_banco>
     LIBRARY_ORACLE=<caminho_para_o_instantclient_oracle>

     USER_SERVICE=<seu_usuario_de_servico>
     PASSWORD=<sua_senha_de_servico>

     AUTH_SECRET=<seu_segredo_de_autenticacao>
     ```

---

### Comandos de Execução

- **Iniciar API em produção:**
  ```bash
  npm run start
  ```

- **Iniciar API automaticamente:**

  - **Windows:**
    ```bash
    npm startup-install
    ```

  - **Linux:**
    ```bash
    pm2 startup
    ```

---

### Testando a Conexão

Após iniciar a API, você verá uma mensagem de que a aplicação está conectada com o banco de dados.

Para testar a API, use o endereço configurado no `.env`:
```
http://localhost:<porta_configurada_no_env>
```

Agora sua API está pronta para uso!

# Guia de Instalação da API

### Instalação Automatizada com Docker e Portainer

A maneira mais fácil de instalar e executar a API é usando o script automatizado que configura o Docker, Portainer e a API.

1. **Configure o arquivo .env:**

   - Copie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente.
   - Crie um arquivo `.env` na raiz do projeto com as seguintes informações:
     comando para copiar o arquivo .env.example para .env:

   ```bash
   cp .env.example .env
   ```

   ```bash
   ORACLE_USER=<seu_usuario_do_banco>
   ORACLE_PASSWORD=<sua_senha_do_banco>
   ORACLE_TNS_ALIAS=(DESCRIPTION=(ADDRESS_LIST=(ADDRESS = (PROTOCOL = TCP)(HOST = )(PORT = )))(CONNECT_DATA=(SERVICE_NAME = )))

   USER_SERVICE=<seu_usuario_de_servico>
   PASSWORD=<sua_senha_de_servico>

   AUTH_SECRET=<seu_segredo_de_autenticacao>
   ```

2. **Execute o script de instalação:**

   - Execute o script de instalação linux:
   ```bash
   chmod +x setup-docker-portainer.sh
   ./setup-docker-portainer.sh
   ```

   - Execute o script de instalação windows:
   ```bash
   setup-docker-portainer.bat
   ```

3. **O script irá:**

   - Instalar o Docker e Docker Compose
   - Configurar e iniciar o Portainer
   - Configurar e iniciar a API-AVA

4. **Após a execução, você terá acesso a:**
   - Portainer: https://localhost:9443 ou http://localhost:9000
     - Usuário: admin # Configurado no script setup-docker-portainer.sh
     - Senha: admin123 # Configurado no script setup-docker-portainer.sh
   - API-AVA: http://localhost:5000 # Configurado no script setup-docker-portainer.sh



### Instalação Manual da API da API_RESET_TASY (sem docker)


### Passos antes de instalar a API

1. **Baixar o Oracle Instant Client:**
   - Faça o download do pacote `instantclient_21_17` no link oficial da Oracle [aqui](https://download.oracle.com/otn_software/linux/instantclient/2117000/instantclient-basic-linux.x64-21.17.0.0.0dbru.zip).
2. **Configurar variável de ambiente:**

   - Capture o caminho de instalação do **Oracle Instant Client**.
   - Adicione o caminho à variável de ambiente `ORACLE_LIB_DIR`.

   **Exemplo no Windows:**

   - Vá em "Painel de Controle" -> "Sistema" -> "Configurações Avançadas do Sistema" -> "Variáveis de Ambiente".
   - Crie uma nova variável de usuário ou sistema chamada `ORACLE_LIB_DIR` e coloque o caminho do Oracle Instant Client.

   **Exemplo no Linux:**

   - No terminal, adicione a variável ao arquivo `.bashrc` ou `.bash_profile`:
     ```bash
     export ORACLE_LIB_DIR=/caminho/para/oracle/instantclient_21_17
     ```

---

### Requisitos

- **Node.js**: Versão 20.10.0

 Faça o download do pacote `node.js` no link oficial da Oracle [aqui](https://nodejs.org/en/download/).
  - Certifique-se de que você tenha o Node.js na versão 20.10.0 instalada. Para verificar, execute:
    ```bash
    node -v
    ```

---

### Instalação

1. **Clone o repositório da API:**

   - Clone o projeto para o seu ambiente local:
     ```bash
     git clone git@github.com:GHASConsulting/API_RESET_TASY.git
     cd API_RESET_TASY
     ```

---

#### Comandos de Execução

2. **Instale as dependências:**

   - Execute o seguinte comando para instalar as dependências da API:
     ```bash
     npm install
     ```

3. **Configurar o arquivo `.env`:**

   - Crie um arquivo `.env` na raiz do projeto com as seguintes informações:

     ```bash
     ORACLE_USER=<seu_usuario_do_banco>
     ORACLE_PASSWORD=<sua_senha_do_banco>
     ORACLE_TNS_ALIAS=(DESCRIPTION=(ADDRESS_LIST=(ADDRESS = (PROTOCOL = TCP)(HOST = )(PORT = )))(CONNECT_DATA=(SERVICE_NAME = )))

     USER_SERVICE=<seu_usuario_de_servico>
     PASSWORD=<sua_senha_de_servico>

     AUTH_SECRET=<seu_segredo_de_autenticacao>
     ```

---

#### Comandos de Execução

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
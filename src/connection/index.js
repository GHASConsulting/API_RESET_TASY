const oracledb = require('oracledb');
require("dotenv/config")


async function connectionTasy() {
  try {
    oracledb.initOracleClient({ libDir: process.env.ORACLE_LIB_DIR });

    const connection = await oracledb.getConnection({
      user: process.env.ORACLE_USER,
      password: process.env.ORACLE_PASSWORD,
      connectString: process.env.ORACLE_TNS_ALIAS,
    });

    console.log("Conexão com o banco de dados estabelecida com sucesso!");
    return connection;
  } catch (error) {
    console.error("Erro ao conectar com o banco de dados:", error);
    throw error;
  }
}

module.exports = connectionTasy;

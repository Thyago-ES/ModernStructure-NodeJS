// Configurar principalmente o dialeto e quais são as credenciais para se comunicar/conectar com o banco de dados

module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "secret",
  database: "nodedb",
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};

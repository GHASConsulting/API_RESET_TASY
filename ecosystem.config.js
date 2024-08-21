module.exports = {
    apps : [{
      name: "app",
      script: "./src/server.js",
      pre_start: "knex migrate:latest",
      instances: "max",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      }
    }]
  }
module.exports = {
  apps: [
    {
      name: "backend",
      script: "./backend/src/app.js",
      env_development: {
        NODE_ENV: "development",
        PORT: 3010,
        watch: true,
        ignore_watch: ["./node_modules", "./.DS_Store", "./package.json"],
      },
    },
  ],
};

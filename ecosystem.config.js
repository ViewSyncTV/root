module.exports = {
  apps: [
    {
      name: "backend",
      script: "app.js",
      cwd: "./backend",
      watch: true,
      ignore_watch: ["./node_modules"],
      env: {
        NODE_ENV: "development",
        PORT: 3010,
      },
    },
  ],
};

module.exports = {
  apps: [
    {
      name: "process-centric-service-layer",
      script: "app.js",
      cwd: "./process-centric-service-layer",
      watch: true,
      ignore_watch: ["./node_modules"],
      env: {
        NODE_ENV: "development",
        PORT: 3010,
        BUSINESS_PROCESS_SERVICE_URL: "http://localhost:3020",
      },
    },
    {
      name: "business-logic-service-layer",
      script: "app.js",
      cwd: "./business-logic-service-layer",
      watch: true,
      ignore_watch: ["./node_modules"],
      env: {
        NODE_ENV: "development",
        PORT: 3020,
        ADAPTER_SERVICE_URL: "http://localhost:3030",
      },
    },
  ],
};

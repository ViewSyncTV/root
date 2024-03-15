module.exports = {
  apps: [
    {
      name: "frontend",
      script: "npm",
      args: "run dev",
      cwd: "./frontend",
      // watch: true,
      ignore_watch: ["./node_modules"],
      env: {
        NODE_ENV: "development",
        PORT: 3000,
        PROCESS_CENTRIC_SERVICE_URL: "http://localhost:3010",
      },
    },
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
        DATA_SERVICE_URL: "http://localhost:3030",
      },
    },
    {
      name: "data-service-layer",
      script: "app.js",
      cwd: "./data-service-layer",
      watch: true,
      ignore_watch: ["./node_modules"],
      env: {
        NODE_ENV: "development",
        PORT: 3030,
        ADAPTER_SERVICE_LAYER: "http://localhost:3040",
      },
    },
    {
      name: "adapter-service-layer",
      script: "app.js",
      cwd: "./adapter-service-layer",
      watch: true,
      ignore_watch: ["./node_modules"],
      env: {
        NODE_ENV: "development",
        PORT: 3040,
        SUPABASE_URL: "https://ippynrgkwygyysedwjyy.supabase.co",
        SUPABASE_KEY:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlwcHlucmdrd3lneXlzZWR3anl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyMDU0NDMsImV4cCI6MjAyNDc4MTQ0M30.5eV0v0pnVxtBPmVw5XDnHU1iB3JKVibMSL9UUkbhAbY",
      },
    },
  ],
};

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
        VITE_PROCESS_CENTRIC_SERVICE_URL: "http://localhost:3010",
        VITE_AUTH0_DOMAIN : "dev-axq8uw2w5u4wzzfs.us.auth0.com",
        VITE_AUTH0_CLIENTID : "3huaI1RBJu9He7oNlwdazPjz6lW7mric",
        VITE_AUTH0_AUDIENCE : "https://viewsynctv.com/api",
        VITE_AUTH0_SCOPE : "write:comments",
        VITE_AUTH0_RESPONSE_TYPE : "code",
        VITE_AUTH0_REDIRECT_URI : "http://localhost:3000/callback",
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
        AUTH0_CLIENT_ID : "3huaI1RBJu9He7oNlwdazPjz6lW7mric",
        AUTH0_CLIENT_SECRET: "1HB4M_U058T03OSqT8bwxvCrUJhx0M8Pey6GIISjqRtC9ZkKxag6CYnnNJAzsLF_",
        AUTH0_DOMAIN : "dev-axq8uw2w5u4wzzfs.us.auth0.com",
        AUTH0_AUDIENCE : "https://viewsynctv.com/api",
        AUTH0_ISSUER_BASE_URL: "https://dev-axq8uw2w5u4wzzfs.us.auth0.com/",
        SESSION_SECRET: "co2kaqGGbQGjCxuBzHlR7LQkkVknlb5X",

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
        THE_MOVIE_DB_API_KEY:
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODY4NTJiYzBlOTE1NGQ0ZGMzYWE1NTEzZWJkMTg1MiIsInN1YiI6IjY2MDgxZmM3YTg5NGQ2MDE3YzY1ODY5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KIMrhfIRN48aa0JKivf4CZhKO39yMDfFM7ZMM00UDF0",
      },
    },
  ],
};

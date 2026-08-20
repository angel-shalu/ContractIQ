const isLocal =
  typeof window !== "undefined" &&
  (window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1");

export const API_BASE =
  process.env.REACT_APP_API_BASE_URL ||
  (isLocal ? "/api" : "https://contractiq-deployment.onrender.com/api");
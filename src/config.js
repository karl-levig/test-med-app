export const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "https://sylveuskarl5-5000.theiadocker...proxy.cognitiveclass.ai";

console.log("API_URL :", API_URL);

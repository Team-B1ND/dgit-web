import config from "../../../config/config.json";

export const authURL = `https://dauth.b1nd.com/login?client_id=${config.clientId}&redirect_uri=http://localhost:3000/callback`;

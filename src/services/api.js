import axios from "axios";
import { langColors } from "./config";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export default api;

export const getLangsFrom = (repositories) => {

  let stats = repositories
    .map((repo) => repo.language)
    .reduce((contador, nome) => ({
      ...contador,
      [nome]: (contador[nome] || 0) + 1
    }), {});

 
  delete stats.null;


  // transforma o objeto em um array
  stats = Object.keys(stats)
  .map((languages) => ({
    name: languages,
    count: stats[languages],
    color: langColors[languages],
  }))
  .sort((a, b) => b.count - a.count);

  return stats;
}
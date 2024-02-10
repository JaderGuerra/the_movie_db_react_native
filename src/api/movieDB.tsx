import axios from "axios";

const movieDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "a97061e35b0b95cc28f22973518df71c",
    language: "es-ES",
  },
});

export default movieDB;

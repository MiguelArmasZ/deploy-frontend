import { useEffect, useState } from "react";

export const App = () => {
  const [deporte, setDeporte] = useState({ deporte: "", nivel: "6" });
  useEffect(() => {
    console.log(import.meta.env.VITE_BACKEND_URL);
    async function callApi() {
      const url = `https://deploy-example-juzk.onrender.com/api`;

      fetch(url)
        .then((res) => res.json())
        .catch((error) => console.error(error))
        .then((res) => setDeporte(res));
    }
    callApi();
  }, []);

  return (
    <div>
      <h2>hola mundo</h2>
      <p>{deporte.deporte}</p>
      <p>{deporte.nivel}</p>
    </div>
  );
};

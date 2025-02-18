import { useState, useEffect } from "react";


function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const obtenerCaracters = async () => {
    try {
      const response = await fetch("https://dragonball-api.com/api/characters");
      const data = await response.json();

      if (Array.isArray(data.items)) {
        setCharacters(data.items);
      } else {
        console.error("No se encontraron personajes en `data.items`:", data);
      }
    } catch (error) {
      console.error("Error al obtener los personajes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerCaracters();
  }, []);



  return (
    <div className="container text-center bg-dark text-warning py-4">
      <h1>Personajes de Dragon Ball</h1>
      {loading ? (
        <p>Cargando personajes...</p>
      ) : characters.length === 0 ? (
        <p>No se encontraron personajes.</p>
      ) : (
        <div className="row justify-content-center">
          {characters.map((character) => (
            <div key={character.id} className="col-md-4 col-sm-6 mb-3">
              <div className="card bg-secondary text-light text-center">
                <img
                  src={character.image}
                  className="card-img-top mx-auto"
                  alt={character.name}
                  style={{ width: "200px", height: "200px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{character.name}</h5>
                  <p className="card-text">{character.description || "Sin descripción"}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
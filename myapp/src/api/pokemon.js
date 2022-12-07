export const getAll = async () => {
    const response = await fetch(
        'http://localhost:4444/pokemon/read', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const pokemons = await response.json()
    return pokemons
}

const [ pokemons, setPokemons ] = useState([]);

//va s'executer seulement au lancement du composant (dep: [])
useEffect(async () => {
  // récupérer la liste des users seulement au chargement du composant ! 
  const pokemons = await getAll();
  setPokemons(pokemons);
},[]);

return <div className="pokemon-list">
    <div class="flex">
      {
        pokemons.map((pokemon,key) =>{
          return <div key={key} className="bloc-pokemon">
            <img className="avatar" src={pokemon.img} />
            <h2>{pokemon.name}</h2>
            <button onClick={()=>addToPokedex(pokemon._id)}>Capturer !</button>
          </div>
        })
      }
     </div>
</div>;
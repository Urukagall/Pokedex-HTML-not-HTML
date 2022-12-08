export const getAll = async () => {
    const response = await fetch(
        'http://localhost:4444/pokemon/list', {
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
    
export const getAllPokedex = async () => {
    const response = await fetch(
        'http://localhost:4444/pokedex/list', {
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

export const addToPokedex = async (pokemon) => {
    const response = await fetch(
        'http://localhost:4444/pokedex/insert', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(pokemon)
        }
    )
}

export const deleteFromPokedex = async (pokemon) => {
    const response = await fetch(
        'http://localhost:4444/pokedex/delete', {
            method: 'DELETE', 
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(pokemon)
        }
    )
}
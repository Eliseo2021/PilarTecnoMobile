const BASE_URL = 'https://pokeapi.co/api/v2/'

export const IMG_URL = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'

export const IMG_URL_POKE = 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/'


export const getPokemonList = () => {
    return fetch(`${BASE_URL}/pokemon/?limit=10`)
        .then(res => res.json())
        .then(data => {
            return Promise.resolve(data)
        })
        .catch(err => {
            throw err
        })
}


export const getPokemon = (url) => {
    return fetch(`${url}`)
        .then(res => res.json())
        .then(data => {
            //console.log('datosss:'+JSON.stringify(data)) 
            return Promise.resolve(data)
        })
        .catch(err => {
            throw err
        })
}

export const getPokemonDetails = (pokemon) => {
    fetch(`${BASE_URL}/pokemon/${pokemon}`)
        .then(res => res.json())
        .then(data => {
            //console.log('datosss:'+JSON.stringify(data)) 
            return Promise.resolve(data)
        })
        .catch(err => {
            throw err
        })
}

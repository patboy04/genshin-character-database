export const getCharacters = async() => {
    const res = await fetch('https://api.genshin.dev/characters')
    if(!res.ok) {
        throw new Error(("Failed to load characters"))
    }
    const data = await res.json()
    return data
}

export const getCharacter = async(character) => {
    const res = await fetch(`https://api.genshin.dev/characters/${character}`)
    if(!res.ok) {
        throw new Error(("Failed to load character"))
    }
    const data = await res.json()
    return data
}
export const getData = async(type, value) => {
    const url = value ? `https://api.genshin.dev/${type}/${value}` : `https://api.genshin.dev/${type}`
    console.log(url)
    const res = await fetch(url)
    if(!res.ok) {
        throw new Error(`Failed to load ${type}`)
    }
    const data = await res.json()
    return data
}
export const retrieveCache = (key: string) => {
    return localStorage.getItem(key)
}

export const writeToCache = (key: string, contents: unknown) => {
   localStorage.setItem(key, JSON.stringify(contents))
}

export const wipeCache = (key: string) => {
    localStorage.removeItem(key)
}
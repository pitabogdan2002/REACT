import { CellId } from "./hooks/gameContext";


const baseULR = 'http://163.172.177.98:8081'

const headers = {
    "Content-Type": 'application/json',
    "Accept": 'application/json'
}

export const register = async (email: string, password: string) => {

    const response =await fetch(`${baseULR}/auth/register`, {
        method: 'POST',
        headers:
            {
                ...headers
            },
        body: JSON.stringify({
            email,
            password
        }),
    })

    const data =  await response.json()
    return data.accessToken
}


export const login = async (email: string, password: string):Promise<string> => {
    const result = await fetch(`${baseULR}/auth/login`, {
        method: 'POST',
        headers: {
            ...headers
        },
        body: JSON.stringify({
            email, password
        })
    })

    const data = await result.json()

    return data.accessToken

}


export const listGames = async (token: string) => {
    const result = await fetch(`${baseULR}/game`, {
        method: 'get',
        headers: {
            ...headers,
            'Authorization': `Bearer ${token}`
        }

    })

    const data = await result.json();
    return data.games
}

export const createGame = async (token: string) => {
    const result = await fetch(`${baseULR}/game`, {
        method: 'POST',
        headers: {
            ...headers,
            'Authorization': `Bearer ${token}`
        }
    })

    const data = await result.json();
    return data
}

export const loadGame = async (token: string, gameId: number) => {
    const result = await fetch(`${baseULR}/game/${gameId}`, {
        method: 'get',
        headers: {
            ...headers,
            'Authorization': `Bearer ${token}`
        }
    })

    const data = await result.json();

    return data
}

export const sendMove = async (token: string, gameId: number, cell: CellId) => {
    const result = await fetch(`${baseULR}/game/move/${gameId}`, {
        method: 'post',
        headers: {
            ...headers,
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            cell
        })
    })

    const data = await result.json();

    return data
}
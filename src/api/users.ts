import type { UsersResponse } from '../types/user'

const API_URL = import.meta.env.VITE_API_URL

export async function getUsers(): Promise<UsersResponse> {
    const response = await fetch(`${API_URL}/users`)

    if (!response.ok) {
        throw new Error(`Failed to fetch users: ${response.status}`)
    }

    return response.json()
}
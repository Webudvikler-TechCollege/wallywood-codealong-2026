import { API_URL } from "../config/api"
import type { Poster } from "../types/api.types"
import { useFetch } from "./useFetch"

export interface PosterQuery {
    genre?: string
    limit?: number
    random?: boolean
}

export const usePosters = () => {
    const { data, error } = useFetch<Poster[]>(`${API_URL}/posters`)

    return {
        posters: data ?? [],
        isLoading: data === null && error === null,
        error
    }
}

export const useRandomPosters = () => {
    const { data, error } = useFetch<Poster[]>(`${API_URL}/posters?random=true&limit=4`)

    return {
        posters: data ?? [],
        isLoading: data === null && error === null,
        error
    }
}

export const usePostersByGenre = ({genre}:{genre: string}) => {
    const { data, error } = useFetch<Poster[]>(`${API_URL}/posters?genreSlug=${genre}`)

    return {
        posters: data ?? [],
        isLoading: data === null && error === null,
        error
    }
}

export const usePoster = (slug: string) => {
    const { data, error } = useFetch<Poster>(`${API_URL}/posters/bySlug/${slug}`)

    return {
        poster: data,
        isLoading: data === null && error === null,
        error
    }
}
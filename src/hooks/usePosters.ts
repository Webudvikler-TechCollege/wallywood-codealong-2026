import { API_URL } from "../config/api"
import type { Poster } from "../types/api.types"
import { useFetch } from "./useFetch"

// Parametre, der kan bruges til at filtrere eller styre poster-forespørgsler.
// genre: filtrerer på genre-slug, limit: maks antal resultater, random: bland resultater.
export interface PosterQuery {
    genre?: string
    limit?: number
    random?: boolean
}

// Hook til at hente en liste af random sorterede plakater.
// Returnerer poster-array, loading-status og eventuelle fejl.
export const useRandomPosters = () => {
    const { data, error } = useFetch<Poster[]>(`${API_URL}/posters?random=true&limit=4`)

    return {
        posters: data ?? [],
        isLoading: data === null && error === null,
        error
    }
}

// Hook til at hente en liste af random sorterede plakater.
// Returnerer poster-array, loading-status og eventuelle fejl.
export const usePostersByGenre = ({genre}:{genre: string}) => {
    const { data, error } = useFetch<Poster[]>(`${API_URL}/posters?genreSlug=${genre}`)

    return {
        posters: data ?? [],
        isLoading: data === null && error === null,
        error
    }
}

// Hook til at hente et enkelt plakats objekt baseret på slug.
// Bruges typisk på en detaljevisning, hvor kun én poster skal vises.
export const usePoster = (slug: string) => {
    const { data, error } = useFetch<Poster>(`${API_URL}/posters/bySlug/${slug}`)

    return {
        poster: data,
        isLoading: data === null && error === null,
        error
    }
}
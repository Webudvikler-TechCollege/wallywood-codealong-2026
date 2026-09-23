import { NavLink } from "react-router-dom";
import { useGenres } from "../../../hooks/useGenre";

export const GenreList = () => {
    const { genres } = useGenres()

    return (
        <nav>
            {genres.map(genre => {
                return (                    
                    <li key={genre.id}>
                        <NavLink to={`${genre.slug}`}>
                            {genre.title}
                        </NavLink>
                    </li>
                )
            })}
        </nav>
    );
};
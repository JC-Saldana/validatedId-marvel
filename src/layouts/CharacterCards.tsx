import CharacterCard from "../components/CharacterCard"
import { CircularProgress, Grid } from "@mui/material"
import "./styles.scss"
import { Character } from "../interfaces/characters";

interface Props {
    isLoading: boolean;
    characters: [Character];
}

export default function CharactersCards({ isLoading, characters }: Props) {
    return (
        <Grid className="cards-grid" container spacing={2}>
            {isLoading ? <CircularProgress /> :
                characters.map((character: Character, i: number) => (
                    <Grid key={i} item xs={6} sm={4} md={3}>
                        <CharacterCard character={character} />
                    </Grid>
                ))}
        </Grid>
    )
}
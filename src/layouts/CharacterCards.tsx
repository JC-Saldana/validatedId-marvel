import CharacterCard from "../components/CharacterCard"
import { CircularProgress, Grid } from "@mui/material"
import "./styles.scss"

export default function CharactersCards({ isLoading, characters }: any) {

    return (
        <Grid className="cards-grid" container spacing={2}>
            {isLoading ? <CircularProgress /> :
                characters.map((character: any, i: number) => (
                    <Grid key={i} item xs={6} sm={4} md={3}>
                        <CharacterCard character={character} />
                    </Grid>
                ))}
        </Grid>
    )
}
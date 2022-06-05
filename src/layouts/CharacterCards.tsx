import CharacterCard from "../components/CharacterCard"
import { CircularProgress, Grid } from "@mui/material"
import "./styles.scss"

export default function CharactersCards({ characters }: any) {

    return (
        <Grid container spacing={2} style={{ maxHeight: "600px", overflowY: "scroll" }}>
            {!characters ? <CircularProgress /> :
                characters.map((character: any) => (
                    <Grid key={character.id} item xs={6} sm={4} md={3}>
                        <CharacterCard character={character} />
                    </Grid>
                ))}
        </Grid>
    )
}
import { fetchCharacters } from "../api"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getCharactersByPage } from "../actions/characters"
import CharacterCard from "../components/CharacterCard"
import { CircularProgress, Grid, Pagination, Typography } from "@mui/material"
import { Container } from "@mui/system"
import "./styles.scss"
import CharacterForm from "./CharacterForm"
import CharactersCards from "./CharacterCards"

export default function Characters() {

    const initialFormData = {
        name: "",
        limit: 10,
        skip: 0
    }

    const dispatch = useDispatch()
    const characters = useSelector((state: any) => state.characters.results)
    const [formData, setFormData] = useState({ ...initialFormData })

    useEffect(() => {
        dispatch(getCharactersByPage(formData))
    }, [])

    useEffect(() => {
        console.log("characters", characters)
    }, [characters])

    return (
        <Container className="characters">
            <div className="container">
                <Typography mb={2} variant="h3" component="h3" fontWeight={"bold"}>
                    Characters
                </Typography>
                <Grid container spacing={3}>
                    <Grid item md={3} xs={12}>
                        <CharacterForm />
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <CharactersCards characters={characters} />
                    </Grid>
                </Grid>
                <Pagination className="pagination" count={10} color="primary" />
            </div>
        </Container>
    )
}
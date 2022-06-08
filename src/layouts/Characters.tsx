import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getCharactersByPage } from "../actions/characters"
import { getComics } from "../actions/comics"
import { Grid, Pagination, Typography } from "@mui/material"
import { AppDispatch, RootState } from '../main';
import { Container } from "@mui/system"
import "./styles.scss"
import CharacterForm from "./CharacterForm"
import CharactersCards from "./CharacterCards"
import { FormData } from "interfaces/characters"

export default function Characters() {

  

    const dispatch = useDispatch<AppDispatch>()
    const { isLoading, characters } = useSelector((state: RootState) => state.characters)
    const { comics } = useSelector((state: RootState) => state.comics)
    const initialFormData = {
        nameStartsWith: "",
        comics: comics,
        limit: 10,
        orderBy: "name"
    }
    const [formData, setFormData] = useState<FormData>({ ...initialFormData })
    const [page, setPage] = useState(1)
    const [offSet, setOffset] = useState(0)

    useEffect(() => {
        dispatch(getCharactersByPage({ ...formData, offset: offSet }))
        dispatch(getComics())
    }, [formData, offSet])

    useEffect(() => {
        setOffset(formData.limit * (page - 1))
    }, [page])

    const handlePagination = (event: React.ChangeEvent<unknown>, page: number) => {
        setPage(page)
    };

    return (
        <Container className="characters">
            <div className="container">
                <Typography mb={2} variant="h3" component="h3" fontWeight={"bold"}>
                    Characters
                </Typography>
                <Grid container spacing={3} className="test">
                    <Grid item md={4} xs={12} className="form-and-pagination">
                        <CharacterForm
                            page={page}
                            setOffset={setOffset}
                            isLoading={isLoading}
                            characters={characters}
                            comics={comics.results}
                            formData={formData}
                            setPage={setPage}
                            setFormData={setFormData} />
                        <Pagination
                            className="pagination"
                            count={Math.floor(characters.total / formData.limit) || 0}
                            color="primary"
                            page={page}
                            onChange={handlePagination}
                        />
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <CharactersCards isLoading={isLoading} characters={characters.results} />
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}
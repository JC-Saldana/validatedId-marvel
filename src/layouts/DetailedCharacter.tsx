import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Character } from "../interfaces/characters";
import { Button, Typography } from "@mui/material";
import { URL, Comic } from "../interfaces/comics";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import { RootState } from '../main';
import "./styles.scss"

export default function DetailedCharacter() {
    // Gets character from store by the id in params
    const { id } = useParams()
    const { characters } = useSelector((state: RootState) => state.characters)
    const [character, setCharacter] = useState<Character>()

    useEffect(() => {
        if (characters) {
            const foundCharacter = characters.results.find((character: any) => character.id === Number(id))
            setCharacter(foundCharacter)
        }
    }, [characters])
    
    return (
        <>
            {character ?
                <Container maxWidth="sm" className="detailed-character">
                    <Typography gutterBottom variant="h5" component="div" className="header">
                        {character.name}
                        <Button variant="contained" component={Link} to="/" startIcon={<ArrowBackIosIcon />}>
                            Characters
                        </Button>
                    </Typography>
                    <img className="image" src={`${character.thumbnail.path}/portrait_fantastic.${character.thumbnail.extension}`} alt="detailed-card-img" />
                    <Typography gutterBottom variant="h6" component="div">
                        <small>-</small> Description <small>-</small>
                    </Typography>
                    <Typography gutterBottom variant="subtitle2" component="div">
                        {character.description ? character.description : "No description"}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        <small>-</small> Relevant links <small>-</small>
                    </Typography>
                    {character.urls.map((url: URL, i: number) => (
                        <div key={i}>
                            <a href={url.url} target="_blank" className="link">{url.type}</a>
                        </div>
                    ))}
                    <Typography gutterBottom variant="h6" component="div">
                        <small>-</small> Comics <small>-</small>
                    </Typography>
                    {character.comics.items.map((comic: Comic, i: number) => (
                        <div key={i}>
                            {comic.name}
                        </div>
                    ))}
                    <br></br>
                    <sub>Id: {id}</sub>
                </Container> : "Characters does not exist"}
        </>)
}
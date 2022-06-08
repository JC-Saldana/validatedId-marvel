import { Button, Icon, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface Comic {
    name: string;
}

interface URL {
    url: string;
    type: string;
}

interface Character {
    name: string;
    thumbnail: any;
    description: string;
    urls: [URL];
    comics: {
        items: [Comic];
    }
}

export default function DetailedCharacter() {
    // Gets character from store by the id in params
    const { id } = useParams()
    const { characters } = useSelector((state: any) => state.characters)
    const [character, setCharacter] = useState<Character>()

    useEffect(() => {
        if (characters) {
            const foundCharacter = characters.results.find((character: any) => character.id === Number(id))
            console.log("foundCharacter", foundCharacter)
            setCharacter(foundCharacter)
        }
    }, [characters])

    return (
        <>
            {character ?
                <Container maxWidth="sm">
                    <Typography className="title" gutterBottom variant="h5" component="div">
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
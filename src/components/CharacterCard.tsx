import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Character } from "../interfaces/characters";
import { Link } from "react-router-dom"
import "./animations.scss"
import "./styles.scss"

interface Props {
    character: Character;
}

export default function CharacterCard({ character }: Props){
    const { id, name, thumbnail, series, stories } = character
    return (
        <>
            <Card sx={{ maxWidth: 345 }} className="scale-in-center character-card">
                <Link to={`/DetailedCharacter/${id}`} style={{ textDecoration: "none", color: "black" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image={`${thumbnail.path}/portrait_fantastic.${thumbnail.extension}`}
                            alt="img"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Series: {series.available}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Stories: {stories.available}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>
        </>
    )
}
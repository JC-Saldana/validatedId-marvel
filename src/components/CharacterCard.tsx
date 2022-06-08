import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import "./styles.scss"
import "./animations.scss"
import { Link } from "react-router-dom"

export default function CharacterCard({ character }) {
    const { id, name, description, thumbnail, urls } = character
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
                            <Typography gutterBottom variant="h5" component="div">
                                {name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {description}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Wiki: {urls[1].url}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>
        </>
    )
}
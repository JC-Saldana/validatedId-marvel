import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import "./styles.scss"
import "./animations.scss"

interface URL {
    type: string;
    url: string;
}

export default function DetailedCharacter({ character }) {
    const { name, id, description, thumbnail, urls } = character
    return (
        <Card sx={{ maxWidth: 345 }} className="scale-in-center detailed-character-card">
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
                <Typography gutterBottom variant="h6" component="div">
                    Description: {description}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    Wiki:
                </Typography>
                <Typography gutterBottom variant="subtitle2" component="div">
                    {urls[1].url}
                </Typography>
                {/* <Typography gutterBottom variant="h6" component="div">
                            Relevant links:
                        </Typography>
                        {urls.map((url: URL) => (
                            <div key={url.url}>
                                {url.type}: {url.url}
                            </div>
                        ))}
                        <sub>{id}</sub> */}
            </CardContent>
        </Card>
    )
}
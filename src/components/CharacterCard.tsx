import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

export default function CharacterCard({ character }) {
    const {name, id, description, thumbnail, urls} = character
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
               {/*  <Link to={`/beers/${_id}`} style={{ textDecoration: "none" }}> */}
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
                                {id}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {description}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Wiki: {urls[1].url}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
               {/*  </Link> */}
            </Card>
        </>
    )
}
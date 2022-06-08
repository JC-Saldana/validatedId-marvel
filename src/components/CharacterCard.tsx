import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import "./styles.scss"
import "./animations.scss"
import { useState } from "react";
import DetailedCharacter from "./DetailedCharacter";

export default function CharacterCard({ character }) {
    const { name, description, thumbnail, urls } = character
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    return (
        <>
            <Card onClick={handleToggle} sx={{ maxWidth: 345 }} className="scale-in-center character-card">
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
            </Card>
            <div>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                    onClick={handleClose}
                >
                    <DetailedCharacter character={character} />
                </Backdrop>
            </div>
        </>
    )
}
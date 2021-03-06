import { Autocomplete, FormControl, Grid, Input, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import { Character, FormData } from "../interfaces/characters";
import { Comic } from "../interfaces/comics";

interface Props {
    page: number;
    setOffset: (number: number) => any;
    setPage: (page: number) => any;
    isLoading: boolean;
    characters: {
        total: number;
        results: [Character];
    }
    comics: [Comic];
    formData: FormData;
    setFormData: (formData: FormData) => any;
}

export default function CharacterForm({ page, setOffset, setPage, isLoading, characters, comics, formData, setFormData }: Props) {

    const handleChange = (value: any, name: string) => {
        // If value changed is limit, adjust page offset
        if (name === "limit") {
            setFormData({
                ...formData,
                [name]: value
            })
            setOffset(value * (page - 1))
            setPage(1)
        } else {
            setFormData({ ...formData, [name]: value })
            setPage(1)
        }
    }
    console.log(comics)
    return (
        <Paper className="form-container">
            <Input placeholder={"Name"} className="form-element" fullWidth onChange={e => handleChange(e.target.value, "nameStartsWith")} />
            <Autocomplete
                multiple
                id="tags-standard"
                options={comics ? comics : []}
                getOptionLabel={(option: Comic) => option.title}
                onChange={(e, value) => handleChange(value.map((comic: Comic) => comic.id), "comics")}
                className="form-element"
                renderInput={params => (
                    <TextField
                        {...params}
                        variant="standard"
                        placeholder={"From comics..."}
                    />
                )}
            />
            <Grid container spacing={6} className="form-element">
                <Grid item xs={6} className="form-and-pagination">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Limit</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formData.limit}
                            label="Limit"
                            onChange={e => handleChange(e.target.value, "limit")}
                            variant="standard"
                        >
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={15}>15</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Order by</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formData.orderBy}
                            label="Age"
                            onChange={e => handleChange(e.target.value, "orderBy")}
                            variant="standard"
                        >
                            <MenuItem value={"name"}>Name</MenuItem>
                            <MenuItem value={"modified"}>Modified</MenuItem>
                            <MenuItem value={"-name"}>Name desc</MenuItem>
                            <MenuItem value={"-modified"}>Modified desc</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Typography gutterBottom variant="h5" component="div">
                {isLoading ? "Searching..." : `Found: ${characters.total}`}
            </Typography>
        </Paper>
    )
}
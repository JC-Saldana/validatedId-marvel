import { FormControl, Grid, Input, InputLabel, MenuItem, Select } from "@mui/material";

export default function CharacterForm({ page, formData, setFormData }: any) {

    const handleChange = (value: any, name: string) => {
        // If value changed is limit, adjust page offset
        if (name === "limit") {
            setFormData({
                ...formData,
                [name]: value,
                offset: (value * (page - 1))
            })
        } else {
            setFormData({ ...formData, [name]: value })
        }
    }

    return (
        <>
            <Input placeholder={"Name"} className="name-input" fullWidth  onChange={e => handleChange(e.target.value, "nameStartsWith")} />
            <Grid container spacing={3}>
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
        </>
    )
}
import { FormControl, Input, InputLabel, MenuItem, Select } from "@mui/material";

export default function CharacterForm() {
    return (
        <div className="form-container">
            <Input placeholder={"Name"} fullWidth/>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Limit</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={"age"}
                    label="Age"
                    onChange={() => {}}
                    variant="standard"
                >
                    <MenuItem value={10}>5</MenuItem>
                    <MenuItem value={20}>10</MenuItem>
                    <MenuItem value={30}>15</MenuItem>
                    <MenuItem value={30}>20</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Order by</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={"age"}
                    label="Age"
                    onChange={() => {}}
                    variant="standard"
                >
                    <MenuItem value={10}>name</MenuItem>
                    <MenuItem value={20}>modified</MenuItem>
                    <MenuItem value={30}>name desc</MenuItem>
                    <MenuItem value={30}>modified desc</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}
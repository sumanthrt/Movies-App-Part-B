import * as React from "react";

import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import { userSelection } from "./MovieFilter";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function GenreSelect(props) {
  const [genreName, setGenreName] = React.useState([]);

  const handleChange = (e) => {
    if (!userSelection.genres.includes(e.target.value)) {
      userSelection.genres = e.target.value;
    }
    setGenreName(e.target.value);
  };

  return (
    <div>
      <InputLabel id="demo-multiple-checkbox-label">Genres</InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={genreName}
        onChange={handleChange}
        input={<Input label="Tag" />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
        style={{ width: "240px" }}
      >
        {props.genres.map((genre) => (
          <MenuItem key={genre.id} value={genre.name}>
            <Checkbox checked={genreName.indexOf(genre.name) > -1} />
            <ListItemText primary={genre.name} />
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

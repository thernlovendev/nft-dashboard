import React from "react";
import { FormControl, MenuItem, Select } from "@mui/material";

function SoftSelect({values, select}:{values: any; select: any}) {
    const [ value, setValue] = React.useState(select);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        // <FormControl >
            <Select
                value={value}
                onChange={handleChange}
            >
                {
                    values.map((item,index)=>
                        <MenuItem value={item} key={item}>
                            {item}
                        </MenuItem>
                    )
                }
            </Select>
        // </FormControl>
    );
}

  export default SoftSelect
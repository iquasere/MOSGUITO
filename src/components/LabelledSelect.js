import {MenuItem, Select} from "@material-ui/core";
import React from "react";

const LabelledSelect = ({ label, value, onChange, options }) => {
  return <div style={{ margin: '0.5rem 0' }}>
        <span>{label}{'\t'}</span>
        <Select
            value={value}
            onChange={onChange}
        >
            {
                options.map((option) => {
                    return (
                        <MenuItem
                            key={option}
                            value={option}
                        >
                            {option}
                        </MenuItem>
                    )
                })
            }
        </Select></div>
}

export default LabelledSelect
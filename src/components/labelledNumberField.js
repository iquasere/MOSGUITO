import {TextField} from "@material-ui/core";

const LabelledNumberField = ({ label, value, onChange }) => {
    return <div>
        <span>{label}</span>
        <TextField
            type='number'
            fullWidth
            value={value}
            onChange={onChange}
            inputProps={{min: 1}}
        />
    </div>
}

export default LabelledNumberField
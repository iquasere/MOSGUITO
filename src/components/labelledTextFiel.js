import {TextField} from '@material-ui/core'

const LabelledTextField = ({ label, value, onChange }) => {
return <div><span>{label}</span>
        <TextField
          type='text'
          fullWidth
          value={value}
          onChange={onChange}
        /></div>
}

export default LabelledTextField
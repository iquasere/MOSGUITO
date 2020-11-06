import {TextField} from '@material-ui/core'

const LabelledTextField = ({ label, value, onChange, placeholder }) => {
return <div><span>{label}</span>
        <TextField
          type='text'
          fullWidth
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        /></div>
}

export default LabelledTextField
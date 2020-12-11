import {TextField} from '@material-ui/core'

const LabelledTextField = ({ label, value, onChange, placeholder }) => {
  return <div style={{ margin: '0.5rem 0' }}>
  <span>{label}</span>
        <TextField
          type='text'
          fullWidth
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        /></div>
}

export default LabelledTextField
import {TextField} from '@material-ui/core'

const LabelledTextField = ({ label, value, onChange, placeholder }) => {
  return <div class="container">
    <div class='left'>
      <span>{label}</span>
    </div>
    <div class='right'>
      <TextField
        type='text'
        fullWidth
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  </div>
}

export default LabelledTextField
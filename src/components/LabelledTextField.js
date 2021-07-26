import {TextField} from '@material-ui/core'

const LabelledTextField = ({ label, value, onChange, placeholder }) => {
  return <div class="container" style={{ margin: '0.5rem 0' }}>
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
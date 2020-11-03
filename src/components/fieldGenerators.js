import {
    Checkbox,
    TextField
} from '@material-ui/core'

const ACheckbox = ({ checked, setChecked, label }) => {
  return (
    <div>
      <span>{label}</span>
      <Checkbox
        checked={checked}
        onChange={setChecked}
      />
    </div>
  )
}

const ANumbersField = ({ defaultValue, updateValue, label }) => {
  return (
    <div>
      <span>{label}</span>
        <TextField
          type='number'
          fullWidth
          value={defaultValue}
          onChange={updateValue}
          inputProps={{ min: 1 }}
        />
    </div>
  )
}

export {
    ACheckbox,
    ANumbersField,
}
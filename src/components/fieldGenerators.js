import { Checkbox } from '@material-ui/core'

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

export default ACheckbox
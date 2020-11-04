import {Checkbox} from '@material-ui/core'

const LabelledCheckbox = ({ label, checked, setChecked }) => {
  return <div>
      <span>{label}</span>
      <Checkbox
        checked={checked}
        onChange={setChecked}
      />
    </div>
}

export default LabelledCheckbox
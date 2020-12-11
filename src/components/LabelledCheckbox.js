import {Checkbox} from '@material-ui/core'

const LabelledCheckbox = ({ label, checked, setChecked }) => {
  return <div >
      <Checkbox
        checked={checked}
        onChange={setChecked}
      />
      <span>{label}</span>
    </div>
}

export default LabelledCheckbox
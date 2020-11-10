import {Checkbox} from '@material-ui/core'

const LabelledCheckbox = ({ label, checked, setChecked }) => {
  return <div style={{ margin: '0.5rem 0' }}>
      <Checkbox
        checked={checked}
        onChange={setChecked}
      />
      <span>{label}</span>
    </div>
}

export default LabelledCheckbox
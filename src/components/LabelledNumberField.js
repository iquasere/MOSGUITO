import {TextField} from "@material-ui/core";

const LabelledNumberField = ({ label, value, onChange, minimum=1, step=1 }) => {
  const inputProps = {
    min: minimum,
    step: step,
  };

  return <div style={{ margin: '0.5rem 0' }}>
    <span>{label}</span>
    <TextField
      type='number'
      fullWidth
      value={value}
      onChange={onChange}
      inputProps={inputProps}
    />
    </div>
}

export default LabelledNumberField
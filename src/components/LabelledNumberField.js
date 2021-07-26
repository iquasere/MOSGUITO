import {TextField} from "@material-ui/core";

const LabelledNumberField = ({ label, value, onChange, minimum=1, step=1 }) => {
  const inputProps = {
    min: minimum,
    step: step,
  };

  return <div class="container" style={{ margin: '0.5rem 0' }}>
    <div class="left">
      <span>{label}</span>
    </div>
    <div class="right">
      <TextField
        type='number'
        fullWidth
        value={value}
        onChange={onChange}
        inputProps={inputProps}
      />
    </div>
  </div>
}

export default LabelledNumberField
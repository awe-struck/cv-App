import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function Toogle({label, handleChange, checked}) {
  return (
    <>
      <FormControlLabel control={<Switch color="dark" checked={checked} onChange={handleChange} />} label={label} labelPlacement="start" />
    </>
  );
}
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress'; 
import './button-component.css';

function ButtonComponent({ text = 'Click me',
                           onClickFunc = () => null,
                           type,
                           loading}) {

  let circularProgress;
  if (loading) {
    circularProgress = <CircularProgress size={20} color="inherit" />;
  };
  
  return (<Button color={type} onClick={onClickFunc} variant="contained">
            {text}
            &nbsp;
            {circularProgress}
          </Button>);
}

export default ButtonComponent;

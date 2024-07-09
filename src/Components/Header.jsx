import React from 'react';
import Toggle from './Toggle';
import Box from '@mui/material/Box';
import PrintTwoToneIcon from '@mui/icons-material/PrintTwoTone';
import '../styles/Header.css';


const Header = ({isDarkMode, isPreviewMode, changeColorMode, changePreviewMode, handlePrint}) => {

  return (
    <Box
    component="form"
    sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        marginBottom: '15px'
    }}
    noValidate
    autoComplete="off"
    > 
      <div className='headerSection'>
        <Toggle label="Preview Mode" checked={isPreviewMode} handleChange={changePreviewMode}/>
        {isPreviewMode && <Toggle label="Dark Mode" checked={isDarkMode}handleChange={changeColorMode}/>}
        {isPreviewMode && <div className='printIcon'><PrintTwoToneIcon onClick={handlePrint}/></div>}
      </div>
    </Box>
  );
};


export default Header
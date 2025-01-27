import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface TextFieldProps{
    helperText?: string;
    id: string;
    label: string;
}

function HelperTextAligned ({ helperText, id, label}: TextFieldProps){
    console.log('acessando a nova prop! label' +label, label);
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', '& > :not(style)': { m: 1 } }}>
      <TextField
        helperText={helperText}
        id={id}
        label={label}
      />
    </Box>
  );
}

export default HelperTextAligned ;
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Stack } from '@mui/material';

interface NewButtonProps {
  href: string;
  variant?: 'text' | 'outlined' | 'contained' | undefined;	 

}

const ScreenButton = ({variant, href}: NewButtonProps) => {
  return (
   
      <Button variant={variant} href={href}></Button>

  );
}

export default ScreenButton;

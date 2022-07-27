import React from 'react';
import { IconButton } from '@mui/material';

interface Props{
    children: JSX.Element;
    label: string;
    onClickCallback: any;
}

const CustomIconButton = ({children, label, onClickCallback}: Props) => {
    return (
        <IconButton
            size='large'
            arial-label={label}
            color='inherit'
            onClick={() => onClickCallback()}
        >
            {children}
        </IconButton>
    )
}

export default CustomIconButton;


import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import CustomIconButton from '../CustomIconButton';
import { Home as HomeIcon, Edit as EditIcon, Group as GroupIcon, AccountCircle as AccountCircleIcon } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

interface Props{
    title: string;
}

const CustomAppBar = ({title}: Props) => {
    const navigate = useNavigate();
    return (
        <div>
            <AppBar position='fixed'>
                <Toolbar>
                    <Typography
                        variant='h6'
                        noWrap
                        component='div'
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                       {title}
                    </Typography>
                    <Box sx={{ flexgrow: 1 }}></Box>
                    <Box sx={{ display: { xs: 'none', sm: 'flex' } }}></Box>
                    <CustomIconButton label='show home' onClickCallback={() => navigate('/home')}>
                        <HomeIcon />
                    </CustomIconButton>
                    <CustomIconButton label='show edit' onClickCallback={() => navigate('/new')}>
                        <EditIcon />
                    </CustomIconButton>
                    <CustomIconButton label='show profile' onClickCallback={() => navigate('/profile')}>
                        <GroupIcon />
                    </CustomIconButton>
                    <CustomIconButton label='show profiles' onClickCallback={() => navigate('/profiles')}>
                        <AccountCircleIcon />
                    </CustomIconButton>

                </Toolbar>
            </AppBar>
            <h1>Custom App bar</h1>
        </div>
    )
};

export default CustomAppBar;
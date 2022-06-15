import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import AdjustIcon from '@mui/icons-material/Adjust';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Footer() {

    return (
        <Box sx={{ width: '100%', background: '#1976D2',padding:'50px 0px 50px 0px'}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={2} sm={12} md={12} sx={{ display: 'flex', color: 'initial', ml: '40%', mt: '20px' }}>
                    <Typography sx={{ background: 'white', ml: '15px', color: '#1976D2', borderRadius: '50px', width: '30px', pl: '4px', height: '28px' }}><FacebookIcon /></Typography>
                    <Typography sx={{ background: 'white', ml: '15px', color: '#1976D2', borderRadius: '50px', width: '30px', pl: '4px', height: '28px' }}><TwitterIcon /></Typography>
                    <Typography sx={{ background: 'white', ml: '15px', color: '#1976D2', borderRadius: '50px', width: '30px', pl: '4px', height: '28px' }}><InstagramIcon /></Typography>
                    <Typography sx={{ background: 'white', ml: '15px', color: '#1976D2', borderRadius: '50px', width: '30px', pl: '4px', height: '28px' }}><NetworkCheckIcon /></Typography>
                    <Typography sx={{ background: 'white', ml: '15px', color: '#1976D2', borderRadius: '50px', width: '30px', pl: '4px', height: '28px' }}><AdjustIcon /></Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Typography sx={{ textAlign: 'center', color: 'white' }}>Copyright C 2020 SOFTY PINK COMPANY - DESIGN TEMPLATEMO</Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

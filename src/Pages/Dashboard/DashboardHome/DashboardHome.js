import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const DashboardHome = () => {

    return (
        <>
            <Typography variant="h2" display="block" gutterBottom>
                Welcome to Dashboard
            </Typography>
            <Grid container sx={{
                display: 'grid',
                columnGap: 1,
                rowGap: 1,
                gridTemplateColumns: 'repeat(4, 1fr)',
            }} spacing={2}>
                <Grid item sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'yellow', alignItems: 'center', py: 3, px: 5 }}>
                    <Typography variant="overline" display="block" gutterBottom>
                        Total Users
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        1254
                    </Typography>
                </Grid>
                <Grid item sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'yellow', alignItems: 'center', py: 3, px: 5 }}>
                    <Typography variant="overline" display="block" gutterBottom>
                        Total Users
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        1254
                    </Typography>
                </Grid>
                <Grid item sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'yellow', alignItems: 'center', py: 3, px: 5 }}>
                    <Typography variant="overline" display="block" gutterBottom>
                        Total Users
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        1254
                    </Typography>
                </Grid>
                <Grid item sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'yellow', alignItems: 'center', py: 3, px: 5 }}>
                    <Typography variant="overline" display="block" gutterBottom>
                        Total Users
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        1254
                    </Typography>
                </Grid>
            </Grid >
        </>
    );
};

export default DashboardHome;
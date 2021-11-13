import React from 'react';
import { Typography } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const { user } = useAuth();
    return (
        <>
            <Typography variant="h2" display="block" gutterBottom>
                Welcome <span className="text-success">{user.displayName}</span>
            </Typography>
            <Typography variant="h6" display="block" gutterBottom>
                Email: {user.email}
            </Typography>

        </>
    );
};

export default DashboardHome;
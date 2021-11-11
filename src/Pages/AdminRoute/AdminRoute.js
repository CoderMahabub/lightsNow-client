import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, loading, admin } = useAuth();
    if (loading) {
        return (
            <Spinner animation="border" variant="success" />
        )
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email && admin ? children
                : <Redirect
                    to={{
                        pathname: "/",
                        state: { from: location }
                    }}
                ></Redirect>}
        >
        </Route>
    );
};

export default AdminRoute;
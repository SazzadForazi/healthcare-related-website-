import userEvent from '@testing-library/user-event';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../../hooks/useAuth';

const PrivareRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            >

            </Redirect>


            }
        >

        </Route>
    );
};

export default PrivareRoute;
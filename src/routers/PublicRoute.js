import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PublicRoute = ({
    isNotAuth,
    component: Component,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            component={(props) => (
                (!isNotAuth)
                    ? <Component {...props} />
                    : <Redirect to="/" />
            )}
        />
    )
}

PublicRoute.propTypes = {
    isNotAuth: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
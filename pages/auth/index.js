import React from 'react';
import User from '../../components/user';

const authPage = () => (
    <div>
        <h1>This is the auth page</h1>
        <User name="chennakesava" age={23}/>
    </div>
);
export default authPage;
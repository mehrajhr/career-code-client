import React, { Suspense } from 'react';
import ApplicationList from '../../Components/ApplicationList';
import UseAuth from '../../hooks/UseAuth';
import { myApplicationPromise } from '../../api/api';

const MyApplications = () => {
    const {user} = UseAuth();
    return (
        <div>
            <Suspense fallback={<p>Application list loading</p>}>
                <ApplicationList myApplicationPromise={myApplicationPromise(user.email)}></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;
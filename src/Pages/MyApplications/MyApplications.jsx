import React, { Suspense } from 'react';
import ApplicationList from '../../Components/ApplicationList';
import UseAuth from '../../hooks/UseAuth';
import useApplicationApi from '../../api/useApplicationApi';

const MyApplications = () => {
    const {user} = UseAuth();
    const {myApplicationPromise} = useApplicationApi();
    return (
        <div>
            <Suspense fallback={<p>Application list loading</p>}>
                <ApplicationList myApplicationPromise={myApplicationPromise(user.email , user.accessToken)}></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;
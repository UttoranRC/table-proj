import { CircularProgress } from '@mui/material';
import { useProfile } from 'hooks/useProfile';
import * as React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProfilePage: React.FC = () => {
    const { id } = useParams();
    const { profData } = useProfile();
    return (
        <div>
            {
                profData ?
                    profData?.filter(r => r.empId === id).map(r => (
                        <div style={{ margin: '20px 150px', border: '1px solid black', borderRadius: '8px', textAlign: 'left', padding: '10px' }}>
                            <div>Full Name: {r.fName + ' ' + r.lName}</div>
                            <div>Employee Id: {r.empId}</div>
                            <div>Date of Birth: {r.dob}</div>
                            <div>Date of Joining: {r.doj}</div>
                            <div>Location: {r.location}</div>
                        </div>
                    )) :
                    <div style={{ margin: '100px' }}>
                        <CircularProgress color='success' size={40} />
                    </div>
            }
            <div>
                <Link to='/table-proj/'>Back to Main Page</Link>
            </div>
        </div>
    )
}

export default ProfilePage;
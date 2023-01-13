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
                        <div 
                        style={{ margin: '20px 150px', border: '1px solid black', borderRadius: '8px', textAlign: 'left', fontWeight: 'bold', padding: '10px', background: 'linear-gradient(90deg, rgba(255,198,175,1) 1%, rgba(255,246,165,0.9585084033613446) 53%, rgba(206,255,130,1) 100%)' }}
                        >
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
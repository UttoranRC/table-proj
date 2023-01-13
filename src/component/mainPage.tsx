import * as React from 'react';
import { useTable } from '../hooks/useTable';
import EmpTable from './table';
import { CircularProgress } from '@mui/material';

const MainPage: React.FC = () => {
    const { tabData, getTableRowData } = useTable();
    return (
        <div style={{ margin: '50px', background: 'linear-gradient(90deg, rgba(179,175,255,1) 1%, rgba(165,255,254,0.9613095238095238) 53%, rgba(0,212,255,1) 100%)' }}>
            {
                getTableRowData() ?
                    <EmpTable rows={getTableRowData() ?? []} /> :
                    <CircularProgress color='success' size={40} />
            }
        </div>
    )
}

export default MainPage;
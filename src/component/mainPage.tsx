import * as React from 'react';
import { useTable } from '../hooks/useTable';
import EmpTable from './table';
import { CircularProgress } from '@mui/material';

const MainPage: React.FC = () => {
    const { tabData, getTableRowData } = useTable();
    return (
        <div style={{ margin: '50px' }}>
            {
                getTableRowData() ?
                    <EmpTable rows={getTableRowData() ?? []} /> :
                    <CircularProgress color='success' size={40} />
            }
        </div>
    )
}

export default MainPage;
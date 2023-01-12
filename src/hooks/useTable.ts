import { TableData } from 'models/tableData';
import * as React from 'react';

export function useTable() {
    const [tabData, setTabData] = React.useState<TableData[]>();

    React.useEffect(() => {
        getTable();
    }, []);


    const getTable = async() => {
        try {
            const res = (await fetch("http://localhost:5000/employees")).json().then(result => {
                setTabData(result)
                console.log(result);
            });
            // console.log(res.json())
        } catch (error) {
            
        }
    }

    const getTableRowData = () => (tabData?.map(row => (
        {
            empId: row.empId,
            empName: row.empName,
            dob: row.dob
        }
    )))

    return { tabData, getTableRowData }
}
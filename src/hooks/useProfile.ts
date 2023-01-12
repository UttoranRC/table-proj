import { TableData } from 'models/tableData';
import * as React from 'react';

export function useProfile() {
    const [profData, setProfData] = React.useState<TableData[]>();

    React.useEffect(() => {
        getTable();
    }, []);


    const getTable = async () => {
        try {
            const res = (await fetch("http://localhost:5000/employees")).json().then(result => {
                setProfData(result)
                // console.log(result);
            });
            // console.log(res.json())
        } catch (error) {

        }
    }


    return { profData }
}
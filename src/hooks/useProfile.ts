import { TableData } from 'models/tableData';
import * as React from 'react';

export function useProfile() {
    const [profData, setProfData] = React.useState<TableData[]>();

    React.useEffect(() => {
        getTable();
    }, []);


    const getTable = async () => {
        try {
            const res = (await fetch("https://my-json-server.typicode.com/UttoranRC/table-backend/employees", {
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'application/json;odata.metadata=full',
                    'Content-Type': 'application/json'
                }
            })).json().then(result => {
                setProfData(result)
                // console.log(result);
            });
            // console.log(res.json())
        } catch (error) {

        }
    }


    return { profData }
}
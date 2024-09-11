import React, { useMemo, useState, useCallback } from 'react';
import { MaterialReactTable } from 'material-react-table';
import data from '../tabledata.json'
import PersonForm from './PersonFormComponent';

import { Delete, Edit } from '@mui/icons-material';
import {
    Box,
    IconButton,
    Tooltip,
  } from '@mui/material';

  
export default function Table() {
    const jsonData = data
    const [personData, setPersonData] = useState(jsonData);

    // This pushes the data to the row on the application
    const addRows = (data) => {
        const totalPeople = personData.length;
        data.id = totalPeople + 1;
        const updatedPeopleData = [...personData];
        console.log(updatedPeopleData)
        updatedPeopleData.push(data);
        setPersonData(updatedPeopleData);
    };


    const deleteRow = useCallback(
        (row) => {
            personData.splice(row.index, 1);

            const updatedPeopleData = [...personData];
            setPersonData(updatedPeopleData);

        },
        [personData],
    );
        

    const editRow = async ({ exitEditingMode, row, values}) => {
        personData[row.index] = values;
        setPersonData([...personData]);
        exitEditingMode()
    }

    const columns = useMemo (
        () => [
            {
                accessorKey: 'id',
                header: 'ID',
                size: 50,
                enableEditing: false,
            },
            {
                accessorKey: 'name',
                header: 'Name',
                size: 150,
            },
            {
                accessorKey: 'address',
                header: 'Address',
                size: 200,
            },
            {
                accessorKey: 'phoneNumber',
                header: 'Phone Number',
                size: 150,
            },
        ],
        [],
    );

    return (
        <>
            <PersonForm func={addRows} />
            <br/>
            <br/>
            <MaterialReactTable 
                columns={columns} 
                data={personData}
                enableEditing
                onEditingRowSave={editRow}
                renderRowActions={({ row, table }) => (
                    <Box sx={{ display: 'flex', gap: '1rem' }}>
                        <Tooltip arrow placement="left" title="Edit">
                            <IconButton onClick={() => table.setEditingRow(row)}>
                                <Edit />
                            </IconButton>
                        </Tooltip>
                        <Tooltip arrow placement="right" title="Delete">
                            <IconButton color="error" onClick={() => deleteRow(row)}>
                                <Delete />
                            </IconButton>
                        </Tooltip>
                    </Box>
                  )}
            />
        </>
    );
}

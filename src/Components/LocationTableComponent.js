import React, { useMemo, useState, useCallback } from 'react';
import { MaterialReactTable } from 'material-react-table';
import data from '../locationdata.json'
import LocationForm from './LocationFormComponent';

import { Delete, Edit } from '@mui/icons-material';
import {
    Box,
    IconButton,
    Tooltip,
  } from '@mui/material';

  
export default function Table() {
    const jsonData = data
    const [locationData, setLocationData] = useState(jsonData);

    // This pushes the data to the row on the application
    const addRows = (data) => {
        const totalLocations = locationData.length;
        data.id = totalLocations + 1;
        const updatedLocationData = [...locationData];
        console.log(updatedLocationData)
        updatedLocationData.push(data);
        setLocationData(updatedLocationData);
    };


    const deleteRow = useCallback(
        (row) => {
            locationData.splice(row.index, 1);

            const updatedLocationData = [...locationData];
            setLocationData(updatedLocationData);

        },
        [locationData],
    );
        

    const editRow = async ({ exitEditingMode, row, values}) => {
        locationData[row.index] = values;
        setLocationData([...locationData]);
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
                accessorKey: 'state',
                header: 'State',
                size: 200,
            },
            {
                accessorKey: 'country',
                header: 'Country',
                size: 150,
            },
        ],
        [],
    );

    return (
        <div>
            <LocationForm func={addRows} />
            <br/>
            <br/>
            <MaterialReactTable 
                columns={columns} 
                data={locationData}
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
        </div>
    );
}

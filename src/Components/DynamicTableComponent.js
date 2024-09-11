import React, { useMemo, useState, useCallback } from 'react';
import { MaterialReactTable } from 'material-react-table';
import TForm from './DynamicFormComponent';
import '../App.css';

import { Delete, Edit } from '@mui/icons-material';
import {
    Box,
    IconButton,
    Tooltip,
  } from '@mui/material';

  
export default function Table(props) {
    const jsonData = props.data

    const [tData, setTData] = useState(jsonData);
    
    // This pushes the data to the row on the application
    const addRows = (data) => {
        console.log(`Step 2 -> inside addrows`)
        console.log(`val for function ->`)
        console.log(data)
        const totalRow = tData.length;
        console.log(`Step 3 -> totalRow`)
        console.log(totalRow)
        data.column1 = totalRow + 1;
        console.log(`Step 4 -> data.id after being added`)
        console.log(data.id)
        const updatedTData = [...tData];
        console.log(`Step 5 -> updatedTData`)
        console.log(updatedTData)
        updatedTData.push(data);
        console.log(`Step 6 -> what updatedTData becomes after being pushed`)
        console.log(updatedTData)
        setTData(updatedTData);
    };


    const deleteRow = useCallback(
        (row) => {
            tData.splice(row.index, 1);

            const updatedTData = [...tData];
            setTData(updatedTData);

        },
        [tData],
    );
        

    const editRow = async ({ exitEditingMode, row, values}) => {
        tData[row.index] = values;
        setTData([...tData]);
        exitEditingMode()
    }

    
    const columns = useMemo(
      () => [
        {
          accessorKey: props.column1[0],
          header: props.column1[1],
          size: 50,
          enableEditing: false,
        },
        {
          accessorKey: props.column2[0],
          header: props.column2[1],
          size: 150,
        },
        {
          accessorKey: props.column3[0],
          header: props.column3[1],
          size: 200,
        },
        {
          accessorKey: props.column4[0],
          header: props.column4[1],
          size: 150,
        },
      ],
      [props]
    );

    return (
        <>
            <div class="flexStyleTable">
              <MaterialReactTable 
                  columns={columns} 
                  data={tData}
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
            <TForm func={addRows} 
                column2={props.column2}
                column3={props.column3}
                column4={props.column4} />
            <br/>
            <br/>
        </>
    );
}

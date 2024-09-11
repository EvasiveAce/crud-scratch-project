import { useState } from 'react';

//FLUENTUI IMPORTS
import * as React from 'react';
import { TextField } from '@fluentui/react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import { DefaultButton } from '@fluentui/react/lib/Button';

const stackTokens = { childrenGap: 50 };
const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
//

function TForm(props) {
    // Getting the useState for each column
    const [column2, setColumn2] = useState('')
    const [column3, setColumn3] = useState('')
    const [column4, setColumn4] = useState('')

    const changeColumn2 = (event) => {
        setColumn2(event.target.value);
    };

    const changeColumn3 = (event) => {
        setColumn3(event.target.value);
    };

    const changeColumn4 = (event) => {
        setColumn4(event.target.value);
    };


    const transferValue = (event) => {
        console.log("Step 1 -> submit to transfer value")
        console.log(`Column2 -> ${column2}`)
        console.log(`Column3 -> ${column3}`)
        console.log(`Column4 -> ${column4}`)
        const val = {
            column2,
            column3,
            column4
        };
        console.log(`val for function ->`)
        console.log(val)
        // This is where addRows gets called!!!!!
        props.func(val)
        console.log("Step ?? -> ")
        clearState();
    }

    const clearState = () => {
        setColumn2('');
        setColumn3('');
        setColumn4('');
    }

    const columnProps: Partial<IStackProps> = {
        styles: { 
          root: { 
            marginLeft: 500, }
          },
    };
    
    return (
      <div class="flexStyleForm">
        <form noValidate autoComplete="off">
          <Stack horizontal tokens={stackTokens} styles={stackStyles}>
            <Stack {...columnProps}>
              <TextField 
                label={props.column2[2]}
                type="text" name={"column2"}
                value={column2} 
                onChange={changeColumn2} />
            </Stack>
          </Stack>
        </form>
        <br />
        <br />
        <form noValidate autoComplete="off">
          <Stack horizontal tokens={stackTokens} styles={stackStyles}>
            <Stack {...columnProps}>
              <TextField 
                label={props.column3[2]}
                type="text" name={"column3"}
                value={column3} 
                onChange={changeColumn3} />
            </Stack>
          </Stack>
        </form>
        <br />
        <br />
        <form noValidate autoComplete="off">
          <Stack horizontal tokens={stackTokens} styles={stackStyles}>
            <Stack {...columnProps}>
                <TextField 
                    label={props.column4[2]}
                    type="text" name={"column4"}
                    value={column4} 
                    onChange={changeColumn4} />
            </Stack>
          </Stack>
        </form>
        <br />
        <br />
        <DefaultButton {...columnProps} text="Submit" onClick={transferValue} allowDisabledFocus />
      </div>
    );
}

export default TForm;
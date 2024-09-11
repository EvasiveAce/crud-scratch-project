import { useState } from 'react';

//FLUENTUI IMPORTS
import * as React from 'react';
import { TextField, MaskedTextField } from '@fluentui/react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import { DefaultButton } from '@fluentui/react/lib/Button';

const stackTokens = { childrenGap: 50 };
const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
//

function LocationForm(props) {
    // Getting the useState for each column
    const [name, setName] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')

    const changeName = (event) => {
        setName(event.target.value);
    };

    const changeState = (event) => {
        setState(event.target.value);
    };

    const changeCountry = (event) => {
        setCountry(event.target.value);
    };


    const transferValue = (event) => {
        event.preventDefault();
        const val = {
            name,
            state,
            country
        };
        // This is where addRows gets called!!!!!
        props.func(val)
        clearState();
    }

    const clearState = () => {
        setName('');
        setState('');
        setCountry('');
    }

    const columnProps: Partial<IStackProps> = {
        styles: { 
          root: { 
            marginLeft: 500, }
          },
    };
    
    return (
      <div>
        <form noValidate autoComplete="off">
          <Stack horizontal tokens={stackTokens} styles={stackStyles}>
            <Stack {...columnProps}>
              <TextField 
                label="Enter the location name:"
                title="Name bar" 
                type="text" name="name"
                value={name} 
                onChange={changeName} />
            </Stack>
          </Stack>
        </form>
        <br />
        <br />
        <form noValidate autoComplete="off">
          <Stack horizontal tokens={stackTokens} styles={stackStyles}>
            <Stack {...columnProps}>
              <TextField 
                label="Enter the state:"
                title="State bar" 
                type="text" name="address" 
                value={state} 
                onChange={changeState} />
            </Stack>
          </Stack>
        </form>
        <br />
        <br />
        <form noValidate autoComplete="off">
          <Stack horizontal tokens={stackTokens} styles={stackStyles}>
            <Stack {...columnProps}>
                <TextField 
                    label="Enter the country:" 
                    title="Country bar" 
                    type="text" 
                    value={country} 
                    onChange={changeCountry} />
            </Stack>
          </Stack>
        </form>
        <br />
        <br />
        <DefaultButton {...columnProps} text="Submit" onClick={transferValue} allowDisabledFocus />
      </div>
    );
}

export default LocationForm;
import { useState } from 'react';

//FLUENTUI IMPORTS
import * as React from 'react';
import { TextField, MaskedTextField } from '@fluentui/react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import { DefaultButton } from '@fluentui/react/lib/Button';

const stackTokens = { childrenGap: 50 };
const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
//

function PersonForm(props) {
    // Getting the useState for each column
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const changeName = (event) => {
        setName(event.target.value);
    };

    const changeAddress = (event) => {
        setAddress(event.target.value);
    };

    const changePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    };


    const transferValue = (event) => {
        event.preventDefault();
        const val = {
            name,
            address,
            phoneNumber
        };
        // This is where addRows gets called!!!!!
        props.func(val)
        clearState();
    }

    const clearState = () => {
        setName('');
        setAddress('');
        setPhoneNumber('');
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
                label="Enter your name:"
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
                label="Enter your address:"
                title="Address bar" 
                type="text" name="address" 
                value={address} 
                onChange={changeAddress} />
            </Stack>
          </Stack>
        </form>
        <br />
        <br />
        <form noValidate autoComplete="off">
          <Stack horizontal tokens={stackTokens} styles={stackStyles}>
            <Stack {...columnProps}>
                <MaskedTextField 
                    label="Enter your phone number:" 
                    mask="(999) 999-9999" 
                    title="Phone Number bar" 
                    type="text" 
                    name="phoneNumber" 
                    value={phoneNumber} 
                    onChange={changePhoneNumber} />
            </Stack>
          </Stack>
        </form>
        <br />
        <br />
        <DefaultButton {...columnProps} text="Submit" onClick={transferValue} allowDisabledFocus />
      </div>
    );
}

export default PersonForm;
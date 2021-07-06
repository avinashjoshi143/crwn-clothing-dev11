import React from 'react';

import { GroupContainer,
    InputForm,
    FormInputLabel} from './form-input.styles';

const FormInput = ({handleChange,label,...otherInputProps}) => (
    <GroupContainer>
        <InputForm onChange={handleChange} {...otherInputProps} />
        {
            label ?
            (<FormInputLabel otherInputProps={otherInputProps}>
                {label.toUpperCase()}
            </FormInputLabel>)
            :null
        }

    </GroupContainer>
);

export default FormInput;
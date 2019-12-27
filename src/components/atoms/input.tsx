import React from 'react';
import styled from 'styled-components';
import colors from 'components/atoms/colors';

interface StyledInputProps {
    fullWidth?: boolean
    light?: boolean
}

const StyledInput = styled.input<StyledInputProps>`
    width: ${p => p.fullWidth === true ? '100%' : '12vw'};
    height: 50px;
    font-size: 1em;
    border-radius: 5px;
    border: none;
    color: white;
    padding: 5px 20px;
    background-color: ${p => p.light === true ? colors.$background2 : colors.$background3};
`;

interface InputProps {
    placeholder?: string
    fullWidth?: boolean
    light?: boolean
    type?: string
    name: string
    updateValue: (a0: string) => void
}

const Input = (props: InputProps) => {
    return (
        <StyledInput
            {...props}
            onChange={v => props.updateValue(v.target.value)} />
    );
}

export default Input;
import React from 'react';
import styled from 'styled-components';
import colors from 'components/atoms/colors';

interface StyledProps {
    fullWidth?: boolean;
}

const StyledInput = styled.input<StyledProps>`
    width: ${p => p.fullWidth === true ? '100%' : '12vw'};
    height: 50px;
    font-size: 1em;
    border-radius: 5px;
    border: none;
    color: white;
    background-color: ${colors.$grey1};
`;

interface Props {
    placeholder?: string,
    fullWidth?: boolean
    updateValue: (a0: string) => void
}

const Input = (props: Props) => {
    return (
        <StyledInput
            {...props}
            onChange={v => props.updateValue(v.target.value)} />
    );
}

export default Input;
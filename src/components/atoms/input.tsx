import React from 'react';
import styled from 'styled-components';
import colors from 'components/atoms/colors';

const StyledInput = styled.input`
    width: 12vw;
    height: 50px;
    font-size: 1em;
    border-radius: 5px;
    border: none;
    color: white;
    background-color: ${colors.$grey1};
`;

interface Props {
    placeholder?: string,
    updateValue: any
}

const Input = (props: Props) => {
    return (
        <StyledInput placeholder={props.placeholder} onChange={v => props.updateValue(v.target.value)} />
    );
}

export default Input;
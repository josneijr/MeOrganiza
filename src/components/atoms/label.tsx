import styled from 'styled-components';

interface StyledTextFieldProps {
    primary?: boolean
}

const TextField = styled.div<StyledTextFieldProps>`
    color: ${(p) => p.primary === true ? '#09D3AC' : '#C4D8FF'}
`;

export default TextField;
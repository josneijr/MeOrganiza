import styled from 'styled-components';
import colors from 'components/atoms/colors';

interface StyledButtonProps {
    primary?: boolean,
    secondary?: boolean
}

const StyledButton = styled.button<StyledButtonProps>`
    width: 12vw;
    height: 60px;
    font-size: 1em;
    border-radius: 5px;
    border: none;
    color: ${p => p.secondary ? 'black' : 'white'};
    background-color: ${(p) => p.secondary ? colors.$secondary : colors.$primary};
    margin: auto;
`;

export default StyledButton;
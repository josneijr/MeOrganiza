import styled from 'styled-components';
import colors from 'components/atoms/colors';

interface StyledButtonProps {
    primary?: boolean,
    secondary?: boolean,
    disabled?: boolean
}

const StyledButton = styled.button.attrs<StyledButtonProps>((p) => ({
    disabled: p.disabled
})) <StyledButtonProps>`
    width: 12vw;
    height: 60px;
    font-size: 1em;
    border-radius: 5px;
    border: none;
    color: white;
    background-color: ${(p) => p.secondary ? colors.$secondary : colors.$primary};
    margin: auto;
    z-index: 99;

    &:hover {
        background-color: ${(p) => p.secondary ? colors.$secondaryHover : colors.$primaryHover};
    }
    
`;

export default StyledButton;
import styled from 'styled-components';
import colors from 'components/atoms/colors';

interface Props {
    primary?: boolean,
    secondary?: boolean
}

const Button = styled.button<Props>`
    width: 12vw;
    height: 50px;
    font-size: 1em;
    border-radius: 5px;
    border: none;

    color: ${(p) => {
        if (p.secondary)
            return 'black';

        return 'white';
    }};
    color: ${(p) => p.secondary ? 'black' : 'white'};
    background-color: ${(p) => p.secondary ? colors.$green5 : colors.$grey1};
`;

export default Button;
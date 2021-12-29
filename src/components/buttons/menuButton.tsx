import { StyledMenuButton } from "./buttons.Styles";
import { Link } from 'react-router-dom';

interface Props {
    to: string;
    text: string;
}

const MenuButton = ({to, text}: Props) => {

    return(
        <Link to={to}>
            <StyledMenuButton>
                {text}
            </StyledMenuButton>
        </Link>
    )
}

export default MenuButton
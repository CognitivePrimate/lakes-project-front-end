import { ButtonWrapper, StyledMenuButton } from "./buttons.Styles";
import { Link, Route } from 'react-router-dom';
import { textChangeRangeIsUnchanged } from "typescript";

interface Props {
    to: string;
    text: string;
    path: string;
}

const MenuButton = ({to, text, path}: Props) => {

    return(
        <ButtonWrapper>
            <Route path={path}></Route>
            <Link to={to}>
                <StyledMenuButton>
                    {text}
                </StyledMenuButton>
            </Link>
        </ButtonWrapper>
    )
}

export default MenuButton
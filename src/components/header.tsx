import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext, AuthContextModel } from '../context-providers/auth-context';

// styles
import { Wrapper } from './header/header.Styles';




const Header = () => {

    const user: AuthContextModel = useContext(AuthContext) || null

    return (
        <Wrapper>
            <Link to="/">
                <h1>Org Name</h1>
            </Link>
            <h3>{user.displayName}</h3>
        </Wrapper>
    )

}

export default Header;

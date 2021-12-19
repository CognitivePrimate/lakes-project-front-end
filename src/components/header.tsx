import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// styles
import { Wrapper } from './header/header.Styles';



const Header = () => {

    // const { user } = useContext()

    return (
        <Wrapper>
            <Link to="/">
                <h1>Org Name</h1>
            </Link>
            <h3>User Name</h3>
        </Wrapper>
    )

}

export default Header;
